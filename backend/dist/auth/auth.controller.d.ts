import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(signInDto: {
        username?: string;
        password?: string;
    }): Promise<any>;
}
