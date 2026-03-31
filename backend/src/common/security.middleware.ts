import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger } from './logger.service';
import { AuthService } from '../auth/auth.service';

// Simple in-memory rate limiter for auth routes
const authRateLimiter = new Map<string, { count: number; windowStart: number }>();
const AUTH_RATE_LIMIT = 5; // 5 requests
const AUTH_RATE_WINDOW = 60 * 1000; // per 1 minute

@Injectable()
export class SecurityMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.ip ||
      'unknown';
    const method = req.method;
    const path = req.originalUrl || req.url;
    const userAgent = req.headers['user-agent'] || 'unknown';

    // 1. Log every request
    Logger.log(`${method} ${path} - IP: ${ip} - UA: ${userAgent}`, 'SecurityMiddleware');

    // 2. Block requests from flagged IPs
    if (AuthService.isIpBlocked(ip)) {
      Logger.warn(`Blocked request from flagged IP: ${ip}`, 'SecurityMiddleware');
      res.status(403).json({ message: 'Access denied' });
      return;
    }

    // 3. Stricter rate limiting for /auth routes
    if (path.startsWith('/auth')) {
      const now = Date.now();
      const entry = authRateLimiter.get(ip);

      if (entry) {
        if (now - entry.windowStart > AUTH_RATE_WINDOW) {
          // Window expired, reset
          authRateLimiter.set(ip, { count: 1, windowStart: now });
        } else {
          entry.count += 1;
          if (entry.count > AUTH_RATE_LIMIT) {
            Logger.warn(
              `Auth rate limit exceeded for IP: ${ip} (${entry.count} requests in window)`,
              'SecurityMiddleware',
            );
            res.status(429).json({
              message: 'Too many authentication requests. Please try again later.',
            });
            return;
          }
        }
      } else {
        authRateLimiter.set(ip, { count: 1, windowStart: now });
      }
    }

    // 4. Add security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    next();
  }
}
