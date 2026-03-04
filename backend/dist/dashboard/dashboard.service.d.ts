import { Repository } from 'typeorm';
import { Content } from '../content/entities/content.entity';
import { AnalyticsEvent } from '../analytics/entities/analytics-event.entity';
import { Subscriber } from '../newsletter/entities/subscriber.entity';
import { Comment } from '../comments/entities/comment.entity';
export declare class DashboardService {
    private contentRepository;
    private analyticsRepository;
    private subscriberRepository;
    private commentRepository;
    constructor(contentRepository: Repository<Content>, analyticsRepository: Repository<AnalyticsEvent>, subscriberRepository: Repository<Subscriber>, commentRepository: Repository<Comment>);
    getStats(): Promise<{
        overview: {
            totalVisitors: number;
            organicTraffic: number;
            whatsappClicks: number;
            totalPosts: number;
            performanceScore: number;
            totalSubscribers: number;
            seoHealth: number;
            pendingComments: number;
        };
        recentActivity: {
            id: number;
            type: string;
            text: string;
            timestamp: Date;
            icon: string;
        }[];
    }>;
}
