"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMiddleware = void 0;
const common_1 = require("@nestjs/common");
const logger_service_1 = require("./logger.service");
const auth_service_1 = require("../auth/auth.service");
const authRateLimiter = new Map();
const AUTH_RATE_LIMIT = 5;
const AUTH_RATE_WINDOW = 60 * 1000;
let SecurityMiddleware = class SecurityMiddleware {
    use(req, res, next) {
        const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
            req.ip ||
            'unknown';
        const method = req.method;
        const path = req.originalUrl || req.url;
        const userAgent = req.headers['user-agent'] || 'unknown';
        logger_service_1.Logger.log(`${method} ${path} - IP: ${ip} - UA: ${userAgent}`, 'SecurityMiddleware');
        if (auth_service_1.AuthService.isIpBlocked(ip)) {
            logger_service_1.Logger.warn(`Blocked request from flagged IP: ${ip}`, 'SecurityMiddleware');
            res.status(403).json({ message: 'Access denied' });
            return;
        }
        if (path.startsWith('/auth')) {
            const now = Date.now();
            const entry = authRateLimiter.get(ip);
            if (entry) {
                if (now - entry.windowStart > AUTH_RATE_WINDOW) {
                    authRateLimiter.set(ip, { count: 1, windowStart: now });
                }
                else {
                    entry.count += 1;
                    if (entry.count > AUTH_RATE_LIMIT) {
                        logger_service_1.Logger.warn(`Auth rate limit exceeded for IP: ${ip} (${entry.count} requests in window)`, 'SecurityMiddleware');
                        res.status(429).json({
                            message: 'Too many authentication requests. Please try again later.',
                        });
                        return;
                    }
                }
            }
            else {
                authRateLimiter.set(ip, { count: 1, windowStart: now });
            }
        }
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
        next();
    }
};
exports.SecurityMiddleware = SecurityMiddleware;
exports.SecurityMiddleware = SecurityMiddleware = __decorate([
    (0, common_1.Injectable)()
], SecurityMiddleware);
//# sourceMappingURL=security.middleware.js.map