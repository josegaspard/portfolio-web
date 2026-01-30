import { Injectable, signal, effect, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ContentManagerService } from './content-manager.service';

export interface DailyStats {
    date: string;
    visitors: number;
    pageViews: number;
    uniqueSessions: string[];
}

@Injectable({
    providedIn: 'root'
})
export class MetricsService {
    private STORAGE_KEY = 'jg_metrics_db';
    private router = inject(Router);
    private contentService = inject(ContentManagerService);

    // Reactive State
    currentStats = signal<DailyStats>({
        date: new Date().toISOString().split('T')[0],
        visitors: 0,
        pageViews: 0,
        uniqueSessions: []
    });

    // Computed Globals
    totalVisitors = signal(0);
    totalPageViews = signal(0);

    constructor() {
        this.loadMetrics();
        this.trackNavigation();
        this.initSession();
    }

    private loadMetrics() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            try {
                const allStats: DailyStats[] = JSON.parse(stored);
                const today = new Date().toISOString().split('T')[0];

                // Find today's stats or create new
                const todayStats = allStats.find(s => s.date === today) || {
                    date: today,
                    visitors: 0,
                    pageViews: 0,
                    uniqueSessions: []
                };

                this.currentStats.set(todayStats);

                // Calculate Totals
                const totalV = allStats.reduce((acc, curr) => acc + curr.visitors, 0);
                const totalP = allStats.reduce((acc, curr) => acc + curr.pageViews, 0);

                this.totalVisitors.set(totalV);
                this.totalPageViews.set(totalP);

            } catch (e) {
                console.error('Error loading metrics', e);
            }
        }
    }

    private saveMetrics() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        let allStats: DailyStats[] = stored ? JSON.parse(stored) : [];

        const today = new Date().toISOString().split('T')[0];
        const index = allStats.findIndex(s => s.date === today);

        if (index !== -1) {
            allStats[index] = this.currentStats();
        } else {
            allStats.push(this.currentStats());
        }

        // Limit to last 30 days to save space
        if (allStats.length > 30) {
            allStats = allStats.slice(-30);
        }

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allStats));
    }

    private trackNavigation() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            // Increment Page View
            this.currentStats.update(s => ({
                ...s,
                pageViews: s.pageViews + 1
            }));
            this.totalPageViews.update(n => n + 1);
            this.saveMetrics();
        });
    }

    private initSession() {
        const sessionId = sessionStorage.getItem('jg_session_id');
        if (!sessionId) {
            // New Session -> New Visitor
            const newId = Math.random().toString(36).substring(2);
            sessionStorage.setItem('jg_session_id', newId);

            // Check if this visitor is already counted today
            const currentUnique = this.currentStats().uniqueSessions || [];

            // In a real app we might fingerprint, here we trust session storage for "Sessions"
            // actually if session is new, it's a new "Visit"

            this.currentStats.update(s => ({
                ...s,
                visitors: s.visitors + 1,
                uniqueSessions: [...(s.uniqueSessions || []), newId]
            }));
            this.totalVisitors.update(n => n + 1);
            this.saveMetrics();
        }
    }

    // Public API for Dashboard
    getDashboardMetrics() {
        // Mocking "Organic" as 70% of total for now (logic step)
        const organic = Math.floor(this.totalVisitors() * 0.7);

        return {
            visitors: this.totalVisitors(),
            pageViews: this.totalPageViews(),
            organic: organic,
            posts: this.contentService.posts().length
        };
    }
}
