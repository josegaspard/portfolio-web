export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    twoFactorSecret: string;
    twoFactorEnabled: boolean;
    knownIps: string[];
    lastLoginAt: Date;
    lastLoginIp: string;
}
