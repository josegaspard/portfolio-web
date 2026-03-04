import { AnalyticsService } from './analytics.service';
import type { Request } from 'express';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    trackEvent(body: any, req: Request): Promise<import("./entities/analytics-event.entity").AnalyticsEvent>;
    getStats(): Promise<{
        totalViews: number;
        uniqueVisitors: number;
        whatsappClicks: number;
        topPages: any[];
        topClicks: any[];
        clicksByDay: any[];
        avgSessionDuration: string;
        bounceRate: number;
    }>;
}
