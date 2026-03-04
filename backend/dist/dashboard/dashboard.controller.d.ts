import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
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
