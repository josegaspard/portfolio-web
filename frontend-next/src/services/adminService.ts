import { logger } from '@/utils/logger';

export interface DashboardOverview {
    totalVisitors: number;
    organicTraffic: number;
    totalPosts: number;
    performanceScore: number;
    seoHealth: number;
}

export interface ActivityLog {
    id: string;
    type: 'post' | 'page' | 'system' | 'error';
    text: string;
    timestamp: string;
    icon: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const adminService = {
    async getStats(): Promise<{ overview: DashboardOverview, recentActivity: ActivityLog[] }> {
        try {
            const token = localStorage.getItem('access_token');
            const res = await fetch(`${API_URL}/dashboard/stats`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!res.ok) {
                // NO INVENTAR DATOS - Devolver valores REALES en 0
                console.warn('Backend no disponible o sin autenticación. Mostrando valores REALES en 0');
                return {
                    overview: {
                        totalVisitors: 0,
                        organicTraffic: 0,
                        totalPosts: 0,
                        performanceScore: 0,
                        seoHealth: 0
                    },
                    recentActivity: []
                };
            }

            return res.json();
        } catch (error) {
            logger.error('Failed to fetch admin stats', error, 'adminService.getStats');
            // Devolver datos REALES en 0 (sin inventar)
            return {
                overview: {
                    totalVisitors: 0,
                    organicTraffic: 0,
                    totalPosts: 0,
                    performanceScore: 0,
                    seoHealth: 0
                },
                recentActivity: []
            };
        }
    }
};
