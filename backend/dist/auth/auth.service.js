"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = __importStar(require("bcrypt"));
const { authenticator } = require('otplib');
const logger_service_1 = require("../common/logger.service");
const loginAttempts = new Map();
const activeSessions = new Map();
const blockedIps = new Set();
let AuthService = class AuthService {
    userRepository;
    jwtService;
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async onModuleInit() {
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
            logger_service_1.Logger.log('Seeded admin user', 'AuthService');
        }
    }
    async login(username, pass, ip, userAgent, twoFactorCode) {
        const attemptKey = `${ip}:${username}`;
        if (this.isBlocked(attemptKey)) {
            const attempts = loginAttempts.get(attemptKey);
            const remainingMs = attempts.blockedUntil.getTime() - Date.now();
            const remainingMin = Math.ceil(remainingMs / 60000);
            throw new common_1.ForbiddenException(`Too many failed attempts. Try again in ${remainingMin} minute(s).`);
        }
        let user = await this.userRepository.findOneBy({ username });
        if (!user) {
            user = await this.userRepository.findOneBy({ email: username });
        }
        if (!user || !(await bcrypt.compare(pass, user.password))) {
            this.recordFailedAttempt(attemptKey);
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        this.resetAttempts(attemptKey);
        const isNewIp = this.detectNewIp(user, ip);
        if (user.twoFactorEnabled) {
            if (!twoFactorCode) {
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
            const isValid = authenticator.verify({
                token: twoFactorCode,
                secret: user.twoFactorSecret,
            });
            if (!isValid) {
                throw new common_1.UnauthorizedException('Invalid 2FA code');
            }
        }
        await this.updateLoginMetadata(user, ip);
        const payload = {
            username: user.username,
            sub: user.id,
            role: user.role,
        };
        const accessToken = this.jwtService.sign(payload);
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
    async verify2FA(tempToken, twoFactorCode, ip, userAgent) {
        let decoded;
        try {
            decoded = this.jwtService.verify(tempToken);
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid or expired temp token');
        }
        if (decoded.type !== 'temp_2fa') {
            throw new common_1.UnauthorizedException('Invalid token type');
        }
        const user = await this.userRepository.findOneBy({ id: decoded.sub });
        if (!user || !user.twoFactorEnabled) {
            throw new common_1.UnauthorizedException('2FA is not enabled for this user');
        }
        const isValid = authenticator.verify({
            token: twoFactorCode,
            secret: user.twoFactorSecret,
        });
        if (!isValid) {
            throw new common_1.UnauthorizedException('Invalid 2FA code');
        }
        await this.updateLoginMetadata(user, ip);
        const payload = {
            username: user.username,
            sub: user.id,
            role: user.role,
        };
        const accessToken = this.jwtService.sign(payload);
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
    async enable2FA(userId) {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        if (user.twoFactorEnabled) {
            throw new common_1.BadRequestException('2FA is already enabled');
        }
        const secret = authenticator.generateSecret();
        const appName = 'JoseGaspardPortfolio';
        const otpauthUrl = authenticator.keyuri(user.username, appName, secret);
        user.twoFactorSecret = secret;
        await this.userRepository.save(user);
        return {
            secret,
            qrUrl: otpauthUrl,
        };
    }
    async confirm2FA(userId, token) {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user || !user.twoFactorSecret) {
            throw new common_1.BadRequestException('2FA setup not initiated');
        }
        const isValid = authenticator.verify({
            token,
            secret: user.twoFactorSecret,
        });
        if (!isValid) {
            throw new common_1.BadRequestException('Invalid 2FA code. Try again.');
        }
        user.twoFactorEnabled = true;
        await this.userRepository.save(user);
        return { success: true };
    }
    async disable2FA(userId) {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        user.twoFactorEnabled = false;
        user.twoFactorSecret = undefined;
        await this.userRepository.save(user);
        return { success: true };
    }
    getActiveSessions(userId) {
        const sessions = [];
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
    logoutAllSessions(userId) {
        let count = 0;
        activeSessions.forEach((session, token) => {
            if (session.userId === userId) {
                activeSessions.delete(token);
                count++;
            }
        });
        return { count };
    }
    logoutSession(token) {
        return activeSessions.delete(token);
    }
    getSecurityStatus() {
        const blockedEntries = [];
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
    isBlocked(key) {
        const attempts = loginAttempts.get(key);
        if (!attempts || !attempts.blockedUntil)
            return false;
        if (attempts.blockedUntil.getTime() > Date.now())
            return true;
        loginAttempts.delete(key);
        return false;
    }
    recordFailedAttempt(key) {
        const attempts = loginAttempts.get(key) || { count: 0, blockedUntil: null };
        attempts.count += 1;
        if (attempts.count >= 5) {
            attempts.blockedUntil = new Date(Date.now() + 15 * 60 * 1000);
            logger_service_1.Logger.warn(`Blocked login attempts for ${key} after ${attempts.count} failures`, 'AuthService');
        }
        loginAttempts.set(key, attempts);
    }
    resetAttempts(key) {
        loginAttempts.delete(key);
    }
    detectNewIp(user, ip) {
        const knownIps = user.knownIps || [];
        if (!knownIps.includes(ip)) {
            logger_service_1.Logger.warn(`New IP detected for user ${user.username}: ${ip}`, 'AuthService');
            return true;
        }
        return false;
    }
    async updateLoginMetadata(user, ip) {
        const knownIps = user.knownIps || [];
        if (!knownIps.includes(ip)) {
            knownIps.push(ip);
        }
        user.knownIps = knownIps;
        user.lastLoginAt = new Date();
        user.lastLoginIp = ip;
        await this.userRepository.save(user);
    }
    static isIpBlocked(ip) {
        return blockedIps.has(ip);
    }
    static blockIp(ip) {
        blockedIps.add(ip);
    }
    static unblockIp(ip) {
        blockedIps.delete(ip);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map