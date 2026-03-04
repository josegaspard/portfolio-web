import { AnalyticsEvent } from './analytics-event.entity';
export declare class UserSession {
    id: number;
    sessionId: string;
    ip: string;
    country: string;
    city: string;
    region: string;
    userAgent: string;
    device: string;
    browser: string;
    browserVersion: string;
    os: string;
    osVersion: string;
    referrer: string;
    landingPage: string;
    language: string;
    pageViews: number;
    durationSeconds: number;
    startedAt: Date;
    lastActivityAt: Date;
    endedAt: Date;
    events: AnalyticsEvent[];
}
