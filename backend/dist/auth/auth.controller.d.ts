import { AuthService } from './auth.service';
import type { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(signInDto: {
        username?: string;
        password?: string;
        twoFactorCode?: string;
    }, req: Request): Promise<any>;
    verify2FA(body: {
        tempToken: string;
        twoFactorCode: string;
    }, req: Request): Promise<any>;
    enable2FA(req: any): Promise<{
        secret: string;
        qrUrl: string;
    }>;
    confirm2FA(req: any, body: {
        token: string;
    }): Promise<{
        success: boolean;
    }>;
    disable2FA(req: any): Promise<{
        success: boolean;
    }>;
    getSecurityStatus(): any;
    logoutAll(req: any): {
        count: number;
    };
}
