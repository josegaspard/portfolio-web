export declare class AuditLog {
    id: number;
    action: string;
    userId: number;
    username: string;
    ip: string;
    userAgent: string;
    details: Record<string, any>;
    createdAt: Date;
}
