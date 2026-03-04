import { Repository } from 'typeorm';
import { AnalyticsEvent, EventType } from './entities/analytics-event.entity';
export declare class AnalyticsService {
    private analyticsRepository;
    constructor(analyticsRepository: Repository<AnalyticsEvent>);
    trackEvent(data: {
        type: EventType;
        url?: string;
        userAgent?: string;
        ip?: string;
        payload?: any;
    }): Promise<AnalyticsEvent>;
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
    private formatDuration;
}
