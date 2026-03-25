"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogService = exports.AuditAction = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const audit_log_entity_1 = require("./audit-log.entity");
const logger_service_1 = require("./logger.service");
var AuditAction;
(function (AuditAction) {
    AuditAction["LOGIN_SUCCESS"] = "LOGIN_SUCCESS";
    AuditAction["LOGIN_FAIL"] = "LOGIN_FAIL";
    AuditAction["LOGIN_BLOCKED"] = "LOGIN_BLOCKED";
    AuditAction["TWO_FA_ENABLED"] = "TWO_FA_ENABLED";
    AuditAction["TWO_FA_DISABLED"] = "TWO_FA_DISABLED";
    AuditAction["TWO_FA_VERIFIED"] = "TWO_FA_VERIFIED";
    AuditAction["CONTENT_CREATE"] = "CONTENT_CREATE";
    AuditAction["CONTENT_UPDATE"] = "CONTENT_UPDATE";
    AuditAction["CONTENT_DELETE"] = "CONTENT_DELETE";
    AuditAction["SETTINGS_UPDATE"] = "SETTINGS_UPDATE";
    AuditAction["EMAIL_SEND"] = "EMAIL_SEND";
    AuditAction["LOGOUT_ALL"] = "LOGOUT_ALL";
    AuditAction["SUSPICIOUS_IP"] = "SUSPICIOUS_IP";
})(AuditAction || (exports.AuditAction = AuditAction = {}));
let AuditLogService = class AuditLogService {
    auditLogRepository;
    constructor(auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }
    async log(params) {
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
        }
        catch (err) {
            logger_service_1.Logger.error(`Failed to write audit log: ${err}`, undefined, 'AuditLogService');
            return null;
        }
    }
    async getRecentLogs(limit = 100) {
        return this.auditLogRepository.find({
            order: { createdAt: 'DESC' },
            take: limit,
        });
    }
    async getLogsByAction(action, limit = 50) {
        return this.auditLogRepository.find({
            where: { action },
            order: { createdAt: 'DESC' },
            take: limit,
        });
    }
    async getLogsByUser(userId, limit = 50) {
        return this.auditLogRepository.find({
            where: { userId },
            order: { createdAt: 'DESC' },
            take: limit,
        });
    }
};
exports.AuditLogService = AuditLogService;
exports.AuditLogService = AuditLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(audit_log_entity_1.AuditLog)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuditLogService);
//# sourceMappingURL=audit-log.service.js.map