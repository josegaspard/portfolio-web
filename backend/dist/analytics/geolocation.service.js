"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolocationService = void 0;
const common_1 = require("@nestjs/common");
const geoip = __importStar(require("geoip-lite"));
let GeolocationService = class GeolocationService {
    getLocationFromIP(ip) {
        if (ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
            return null;
        }
        const geo = geoip.lookup(ip);
        if (!geo) {
            return null;
        }
        return {
            country: geo.country,
            region: geo.region,
            city: geo.city,
            timezone: geo.timezone,
            ll: geo.ll,
        };
    }
    parseUserAgent(userAgent) {
        const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(userAgent);
        const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
        let device = 'desktop';
        if (isTablet)
            device = 'tablet';
        else if (isMobile)
            device = 'mobile';
        let browser = 'Unknown';
        let browserVersion = '';
        if (userAgent.includes('Chrome')) {
            browser = 'Chrome';
            browserVersion = userAgent.match(/Chrome\/([\d.]+)/)?.[1] || '';
        }
        else if (userAgent.includes('Firefox')) {
            browser = 'Firefox';
            browserVersion = userAgent.match(/Firefox\/([\d.]+)/)?.[1] || '';
        }
        else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
            browser = 'Safari';
            browserVersion = userAgent.match(/Version\/([\d.]+)/)?.[1] || '';
        }
        else if (userAgent.includes('Edge')) {
            browser = 'Edge';
            browserVersion = userAgent.match(/Edge\/([\d.]+)/)?.[1] || '';
        }
        let os = 'Unknown';
        let osVersion = '';
        if (userAgent.includes('Windows')) {
            os = 'Windows';
            osVersion = userAgent.match(/Windows NT ([\d.]+)/)?.[1] || '';
        }
        else if (userAgent.includes('Mac OS')) {
            os = 'macOS';
            osVersion = userAgent.match(/Mac OS X ([\d_]+)/)?.[1]?.replace(/_/g, '.') || '';
        }
        else if (userAgent.includes('Android')) {
            os = 'Android';
            osVersion = userAgent.match(/Android ([\d.]+)/)?.[1] || '';
        }
        else if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) {
            os = 'iOS';
            osVersion = userAgent.match(/OS ([\d_]+)/)?.[1]?.replace(/_/g, '.') || '';
        }
        return {
            device,
            browser,
            browserVersion,
            os,
            osVersion,
        };
    }
};
exports.GeolocationService = GeolocationService;
exports.GeolocationService = GeolocationService = __decorate([
    (0, common_1.Injectable)()
], GeolocationService);
//# sourceMappingURL=geolocation.service.js.map