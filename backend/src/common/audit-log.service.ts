import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditLog } from './audit-log.entity';
import { Logger } from './logger.service';

export enum AuditAction {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGIN_BLOCKED = 'LOGIN_BLOCKED',
  TWO_FA_ENABLED = 'TWO_FA_ENABLED',
  TWO_FA_DISABLED = 'TWO_FA_DISABLED',
  TWO_FA_VERIFIED = 'TWO_FA_VERIFIED',
  CONTENT_CREATE = 'CONTENT_CREATE',
  CONTENT_UPDATE = 'CONTENT_UPDATE',
  CONTENT_DELETE = 'CONTENT_DELETE',
  SETTINGS_UPDATE = 'SETTINGS_UPDATE',
  EMAIL_SEND = 'EMAIL_SEND',
  LOGOUT_ALL = 'LOGOUT_ALL',
  SUSPICIOUS_IP = 'SUSPICIOUS_IP',
}

@Injectable()
export class AuditLogService {
  constructor(
    @InjectRepository(AuditLog)
    private auditLogRepository: Repository<AuditLog>,
  ) {}

  async log(params: {
    action: AuditAction | string;
    userId?: number;
    username?: string;
    ip?: string;
    userAgent?: string;
    details?: Record<string, any>;
  }): Promise<AuditLog> {
    try {
      const entry = this.auditLogRepository.create({
        action: params.action,
        userId: params.userId,
        username: params.username,
        ip: params.ip,
        userAgent: params.userAgent,
        details: params.details || {},
      });
      return await this.auditLogRepository.save(entry);
    } catch (err) {
      Logger.error(
        `Failed to write audit log: ${err}`,
        undefined,
        'AuditLogService',
      );
      return null as any;
    }
  }

  async getRecentLogs(limit = 100): Promise<AuditLog[]> {
    return this.auditLogRepository.find({
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async getLogsByAction(action: string, limit = 50): Promise<AuditLog[]> {
    return this.auditLogRepository.find({
      where: { action },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async getLogsByUser(userId: number, limit = 50): Promise<AuditLog[]> {
    return this.auditLogRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }
}
