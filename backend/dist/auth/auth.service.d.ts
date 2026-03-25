import { OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class AuthService implements OnModuleInit {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    onModuleInit(): Promise<void>;
    login(username: string, pass: string, ip: string, userAgent?: string, twoFactorCode?: string): Promise<any>;
    verify2FA(tempToken: string, twoFactorCode: string, ip: string, userAgent?: string): Promise<any>;
    enable2FA(userId: number): Promise<{
        secret: string;
        qrUrl: string;
    }>;
    confirm2FA(userId: number, token: string): Promise<{
        success: boolean;
    }>;
    disable2FA(userId: number): Promise<{
        success: boolean;
    }>;
    getActiveSessions(userId?: number): any[];
    logoutAllSessions(userId: number): {
        count: number;
    };
    logoutSession(token: string): boolean;
    getSecurityStatus(): any;
    private isBlocked;
    private recordFailedAttempt;
    private resetAttempts;
    private detectNewIp;
    private updateLoginMetadata;
    static isIpBlocked(ip: string): boolean;
    static blockIp(ip: string): void;
    static unblockIp(ip: string): void;
}
