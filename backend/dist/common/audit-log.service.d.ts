import { Repository } from 'typeorm';
import { AuditLog } from './audit-log.entity';
export declare enum AuditAction {
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
    LOGIN_BLOCKED = "LOGIN_BLOCKED",
    TWO_FA_ENABLED = "TWO_FA_ENABLED",
    TWO_FA_DISABLED = "TWO_FA_DISABLED",
    TWO_FA_VERIFIED = "TWO_FA_VERIFIED",
    CONTENT_CREATE = "CONTENT_CREATE",
    CONTENT_UPDATE = "CONTENT_UPDATE",
    CONTENT_DELETE = "CONTENT_DELETE",
    SETTINGS_UPDATE = "SETTINGS_UPDATE",
    EMAIL_SEND = "EMAIL_SEND",
    LOGOUT_ALL = "LOGOUT_ALL",
    SUSPICIOUS_IP = "SUSPICIOUS_IP"
}
export declare class AuditLogService {
    private auditLogRepository;
    constructor(auditLogRepository: Repository<AuditLog>);
    log(params: {
        action: AuditAction | string;
        userId?: number;
        username?: string;
        ip?: string;
        userAgent?: string;
        details?: Record<string, any>;
    }): Promise<AuditLog>;
    getRecentLogs(limit?: number): Promise<AuditLog[]>;
    getLogsByAction(action: string, limit?: number): Promise<AuditLog[]>;
    getLogsByUser(userId: number, limit?: number): Promise<AuditLog[]>;
}
