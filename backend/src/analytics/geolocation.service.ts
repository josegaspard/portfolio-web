import { Injectable } from '@nestjs/common';
import * as geoip from 'geoip-lite';

export interface GeoLocation {
    country: string;
    region: string;
    city: string;
    timezone: string;
    ll: [number, number]; // latitude, longitude
}

@Injectable()
export class GeolocationService {
    getLocationFromIP(ip: string): GeoLocation | null {
        // Skip localhost/private IPs
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

    // Parse user agent to extract device info
    parseUserAgent(userAgent: string): {
        device: string;
        browser: string;
        browserVersion: string;
        os: string;
        osVersion: string;
    } {
        const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(userAgent);
        const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);

        let device = 'desktop';
        if (isTablet) device = 'tablet';
        else if (isMobile) device = 'mobile';

        // Browser detection
        let browser = 'Unknown';
        let browserVersion = '';
        if (userAgent.includes('Chrome')) {
            browser = 'Chrome';
            browserVersion = userAgent.match(/Chrome\/([\d.]+)/)?.[1] || '';
        } else if (userAgent.includes('Firefox')) {
            browser = 'Firefox';
            browserVersion = userAgent.match(/Firefox\/([\d.]+)/)?.[1] || '';
        } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
            browser = 'Safari';
            browserVersion = userAgent.match(/Version\/([\d.]+)/)?.[1] || '';
        } else if (userAgent.includes('Edge')) {
            browser = 'Edge';
            browserVersion = userAgent.match(/Edge\/([\d.]+)/)?.[1] || '';
        }

        // OS detection
        let os = 'Unknown';
        let osVersion = '';
        if (userAgent.includes('Windows')) {
            os = 'Windows';
            osVersion = userAgent.match(/Windows NT ([\d.]+)/)?.[1] || '';
        } else if (userAgent.includes('Mac OS')) {
            os = 'macOS';
            osVersion = userAgent.match(/Mac OS X ([\d_]+)/)?.[1]?.replace(/_/g, '.') || '';
        } else if (userAgent.includes('Android')) {
            os = 'Android';
            osVersion = userAgent.match(/Android ([\d.]+)/)?.[1] || '';
        } else if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) {
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
}
