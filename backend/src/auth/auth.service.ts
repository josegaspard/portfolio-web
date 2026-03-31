import {
  Injectable,
  UnauthorizedException,
  OnModuleInit,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { generateSecret, verify as otpVerify, generateURI } from 'otplib';
import { Logger } from '../common/logger.service';

// In-memory login attempt tracking
const loginAttempts = new Map<string, { count: number; blockedUntil: Date | null }>();

// In-memory active sessions tracking
const activeSessions = new Map<string, { userId: number; username: string; ip: string; createdAt: Date; userAgent?: string }>();

// Blocked IPs set (flagged by middleware or suspicious activity)
const blockedIps = new Set<string>();

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async onModuleInit() {
    // Seed admin user if it doesn't exist
    const admin = await this.userRepository.findOneBy({ username: 'admin' });
    if (!admin) {
      const defaultPassword = process.env.ADMIN_PASSWORD || 'admin123';
      const hashedPassword = await bcrypt.hash(defaultPassword, 12);
      const newUser = this.userRepository.create({
        username: 'admin',
        email: 'admin@josegaspard.dev',
        password: hashedPassword,
        role: 'admin',
        knownIps: [],
      });
      await this.userRepository.save(newUser);
      Logger.log('Seeded admin user', 'AuthService');
    }
  }

  // ============================================
  // LOGIN WITH BRUTE-FORCE PROTECTION + 2FA
  // ============================================
  async login(
    username: string,
    pass: string,
    ip: string,
    userAgent?: string,
    twoFactorCode?: string,
  ): Promise<any> {
    const attemptKey = `${ip}:${username}`;

    // Check if IP/username combo is blocked
    if (this.isBlocked(attemptKey)) {
      const attempts = loginAttempts.get(attemptKey);
      const remainingMs = attempts!.blockedUntil!.getTime() - Date.now();
      const remainingMin = Math.ceil(remainingMs / 60000);
      throw new ForbiddenException(
        `Too many failed attempts. Try again in ${remainingMin} minute(s).`,
      );
    }

    // Try to find user by username OR email
    let user = await this.userRepository.findOneBy({ username });
    if (!user) {
      user = await this.userRepository.findOneBy({ email: username });
    }

    if (!user || !(await bcrypt.compare(pass, user.password))) {
      this.recordFailedAttempt(attemptKey);
      throw new UnauthorizedException('Invalid credentials');
    }

    // Credentials valid - reset failed attempts
    this.resetAttempts(attemptKey);

    // Detect suspicious activity (new IP)
    const isNewIp = this.detectNewIp(user, ip);

    // If 2FA is enabled, handle the two-step flow
    if (user.twoFactorEnabled) {
      if (!twoFactorCode) {
        // Step 1: Return temp token indicating 2FA is required
        const tempPayload = {
          sub: user.id,
          username: user.username,
          type: 'temp_2fa',
        };
        const tempToken = this.jwtService.sign(tempPayload, {
          expiresIn: '5m',
        });
        return {
          requires2FA: true,
          tempToken,
        };
      }

      // Step 2: Validate the TOTP code inline
      const otpResult = await otpVerify({
        token: twoFactorCode,
        secret: user.twoFactorSecret,
      });
      if (!otpResult.valid) {
        throw new UnauthorizedException('Invalid 2FA code');
      }
    }

    // Update user login metadata
    await this.updateLoginMetadata(user, ip);

    // Generate full access token
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role,
    };
    const accessToken = this.jwtService.sign(payload);

    // Track active session
    activeSessions.set(accessToken, {
      userId: user.id,
      username: user.username,
      ip,
      createdAt: new Date(),
      userAgent,
    });

    return {
      access_token: accessToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      ...(isNewIp ? { warning: 'Login from a new IP address detected' } : {}),
    };
  }

  // ============================================
  // VERIFY 2FA (with temp token)
  // ============================================
  async verify2FA(tempToken: string, twoFactorCode: string, ip: string, userAgent?: string): Promise<any> {
    let decoded: any;
    try {
      decoded = this.jwtService.verify(tempToken);
    } catch {
      throw new UnauthorizedException('Invalid or expired temp token');
    }

    if (decoded.type !== 'temp_2fa') {
      throw new UnauthorizedException('Invalid token type');
    }

    const user = await this.userRepository.findOneBy({ id: decoded.sub });
    if (!user || !user.twoFactorEnabled) {
      throw new UnauthorizedException('2FA is not enabled for this user');
    }

    const otpResult = await otpVerify({
      token: twoFactorCode,
      secret: user.twoFactorSecret,
    });

    if (!otpResult.valid) {
      throw new UnauthorizedException('Invalid 2FA code');
    }

    // Update login metadata
    await this.updateLoginMetadata(user, ip);

    // Generate full access token
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role,
    };
    const accessToken = this.jwtService.sign(payload);

    // Track session
    activeSessions.set(accessToken, {
      userId: user.id,
      username: user.username,
      ip,
      createdAt: new Date(),
      userAgent,
    });

    return {
      access_token: accessToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }

  // ============================================
  // ENABLE 2FA
  // ============================================
  async enable2FA(userId: number): Promise<{ secret: string; qrUrl: string }> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (user.twoFactorEnabled) {
      throw new BadRequestException('2FA is already enabled');
    }

    const secret = generateSecret();
    const otpauthUrl = generateURI({
      issuer: 'JoseGaspardPortfolio',
      label: user.username,
      secret,
    });

    user.twoFactorSecret = secret;
    await this.userRepository.save(user);

    return {
      secret,
      qrUrl: otpauthUrl,
    };
  }

  // ============================================
  // CONFIRM & ACTIVATE 2FA (verify code before enabling)
  // ============================================
  async confirm2FA(userId: number, token: string): Promise<{ success: boolean }> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user || !user.twoFactorSecret) {
      throw new BadRequestException('2FA setup not initiated');
    }

    const otpResult = await otpVerify({
      token,
      secret: user.twoFactorSecret,
    });

    if (!otpResult.valid) {
      throw new BadRequestException('Invalid 2FA code. Try again.');
    }

    user.twoFactorEnabled = true;
    await this.userRepository.save(user);

    return { success: true };
  }

  // ============================================
  // DISABLE 2FA
  // ============================================
  async disable2FA(userId: number): Promise<{ success: boolean }> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    user.twoFactorEnabled = false;
    user.twoFactorSecret = undefined as any;
    await this.userRepository.save(user);

    return { success: true };
  }

  // ============================================
  // SESSION MANAGEMENT
  // ============================================
  getActiveSessions(userId?: number): any[] {
    const sessions: any[] = [];
    activeSessions.forEach((session, token) => {
      if (!userId || session.userId === userId) {
        sessions.push({
          tokenPrefix: token.substring(0, 12) + '...',
          username: session.username,
          ip: session.ip,
          createdAt: session.createdAt,
          userAgent: session.userAgent,
        });
      }
    });
    return sessions;
  }

  logoutAllSessions(userId: number): { count: number } {
    let count = 0;
    activeSessions.forEach((session, token) => {
      if (session.userId === userId) {
        activeSessions.delete(token);
        count++;
      }
    });
    return { count };
  }

  logoutSession(token: string): boolean {
    return activeSessions.delete(token);
  }

  // ============================================
  // SECURITY STATUS
  // ============================================
  getSecurityStatus(): any {
    const blockedEntries: any[] = [];
    loginAttempts.forEach((value, key) => {
      if (value.blockedUntil && value.blockedUntil.getTime() > Date.now()) {
        blockedEntries.push({
          key,
          count: value.count,
          blockedUntil: value.blockedUntil,
        });
      }
    });

    return {
      failedAttempts: Array.from(loginAttempts.entries()).map(([key, val]) => ({
        key,
        count: val.count,
        blockedUntil: val.blockedUntil,
      })),
      blockedIps: Array.from(blockedIps),
      activeSessions: this.getActiveSessions(),
      blockedEntries,
    };
  }

  // ============================================
  // PRIVATE HELPERS
  // ============================================
  private isBlocked(key: string): boolean {
    const attempts = loginAttempts.get(key);
    if (!attempts || !attempts.blockedUntil) return false;
    if (attempts.blockedUntil.getTime() > Date.now()) return true;
    // Block period expired, reset
    loginAttempts.delete(key);
    return false;
  }

  private recordFailedAttempt(key: string): void {
    const attempts = loginAttempts.get(key) || { count: 0, blockedUntil: null };
    attempts.count += 1;
    if (attempts.count >= 5) {
      attempts.blockedUntil = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
      Logger.warn(
        `Blocked login attempts for ${key} after ${attempts.count} failures`,
        'AuthService',
      );
    }
    loginAttempts.set(key, attempts);
  }

  private resetAttempts(key: string): void {
    loginAttempts.delete(key);
  }

  private detectNewIp(user: User, ip: string): boolean {
    const knownIps = user.knownIps || [];
    if (!knownIps.includes(ip)) {
      Logger.warn(
        `New IP detected for user ${user.username}: ${ip}`,
        'AuthService',
      );
      return true;
    }
    return false;
  }

  private async updateLoginMetadata(user: User, ip: string): Promise<void> {
    const knownIps = user.knownIps || [];
    if (!knownIps.includes(ip)) {
      knownIps.push(ip);
    }
    user.knownIps = knownIps;
    user.lastLoginAt = new Date();
    user.lastLoginIp = ip;
    await this.userRepository.save(user);
  }

  // Expose for middleware use
  static isIpBlocked(ip: string): boolean {
    return blockedIps.has(ip);
  }

  static blockIp(ip: string): void {
    blockedIps.add(ip);
  }

  static unblockIp(ip: string): void {
    blockedIps.delete(ip);
  }
}
