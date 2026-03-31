import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Throttle } from '@nestjs/throttler';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ============================================
  // POST /auth/login
  // Supports optional 2FA code in body
  // ============================================
  @Throttle({ default: { limit: 5, ttl: 900000 } })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(
    @Body()
    signInDto: {
      username?: string;
      password?: string;
      twoFactorCode?: string;
    },
    @Req() req: Request,
  ) {
    if (!signInDto.username || !signInDto.password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (signInDto.username.length > 100 || signInDto.password.length > 100) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.ip ||
      'unknown';
    const userAgent = req.headers['user-agent'];

    return this.authService.login(
      signInDto.username,
      signInDto.password,
      ip,
      userAgent,
      signInDto.twoFactorCode,
    );
  }

  // ============================================
  // POST /auth/verify-2fa
  // Verify TOTP code with temp token
  // ============================================
  @Throttle({ default: { limit: 5, ttl: 900000 } })
  @HttpCode(HttpStatus.OK)
  @Post('verify-2fa')
  verify2FA(
    @Body() body: { tempToken: string; twoFactorCode: string },
    @Req() req: Request,
  ) {
    if (!body.tempToken || !body.twoFactorCode) {
      throw new UnauthorizedException('Temp token and 2FA code are required');
    }

    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.ip ||
      'unknown';
    const userAgent = req.headers['user-agent'];

    return this.authService.verify2FA(
      body.tempToken,
      body.twoFactorCode,
      ip,
      userAgent,
    );
  }

  // ============================================
  // POST /auth/enable-2fa
  // Enable 2FA for the logged-in user (returns secret + QR URL)
  // ============================================
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('enable-2fa')
  enable2FA(@Req() req: any) {
    return this.authService.enable2FA(req.user.userId);
  }

  // ============================================
  // POST /auth/confirm-2fa
  // Confirm 2FA setup with a valid TOTP code
  // ============================================
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('confirm-2fa')
  confirm2FA(@Req() req: any, @Body() body: { token: string }) {
    if (!body.token) {
      throw new UnauthorizedException('2FA token is required');
    }
    return this.authService.confirm2FA(req.user.userId, body.token);
  }

  // ============================================
  // POST /auth/disable-2fa
  // Disable 2FA for the logged-in user
  // ============================================
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('disable-2fa')
  disable2FA(@Req() req: any) {
    return this.authService.disable2FA(req.user.userId);
  }

  // ============================================
  // GET /auth/security-status
  // Returns security overview: failed attempts, blocked IPs, sessions
  // ============================================
  @UseGuards(JwtAuthGuard)
  @Get('security-status')
  getSecurityStatus() {
    return this.authService.getSecurityStatus();
  }

  // ============================================
  // POST /auth/logout-all
  // Logout from all devices
  // ============================================
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('logout-all')
  logoutAll(@Req() req: any) {
    return this.authService.logoutAllSessions(req.user.userId);
  }
}
