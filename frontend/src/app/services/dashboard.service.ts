import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

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
    timestamp: Date;
    icon: string;
}

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/dashboard'; // TODO: Use environment variable

    // Signals for state
    overview = signal<DashboardOverview>({
        totalVisitors: 0,
        organicTraffic: 0,
        totalPosts: 0,
        performanceScore: 0,
        seoHealth: 0
    });

    recentActivity = signal<ActivityLog[]>([]);

    constructor() {
        this.refreshData();
    }

    async refreshData() {
        try {
            // Single fetch from Backend
            const { overview, recentActivity } = await firstValueFrom(this.http.get<{ overview: DashboardOverview, recentActivity: ActivityLog[] }>(`${this.apiUrl}/stats`));

            this.overview.set(overview);
            this.recentActivity.set(recentActivity);
        } catch (e) {
            console.error('Failed to fetch dashboard data', e);
        }
    }
}
