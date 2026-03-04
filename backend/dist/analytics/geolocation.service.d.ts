export interface GeoLocation {
    country: string;
    region: string;
    city: string;
    timezone: string;
    ll: [number, number];
}
export declare class GeolocationService {
    getLocationFromIP(ip: string): GeoLocation | null;
    parseUserAgent(userAgent: string): {
        device: string;
        browser: string;
        browserVersion: string;
        os: string;
        osVersion: string;
    };
}
