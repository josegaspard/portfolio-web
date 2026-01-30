import { Injectable } from '@angular/core';

interface PerformanceMetrics {
    fcp?: number; // First Contentful Paint
    lcp?: number; // Largest Contentful Paint
    fid?: number; // First Input Delay
    cls?: number; // Cumulative Layout Shift
    ttfb?: number; // Time to First Byte
}

@Injectable({
    providedIn: 'root'
})
export class PerformanceMonitorService {
    private metrics: PerformanceMetrics = {};

    constructor() {
        if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
            this.observePerformance();
        }
    }

    /**
     * Observe Core Web Vitals
     */
    private observePerformance() {
        // Largest Contentful Paint (LCP)
        try {
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1] as any;
                this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
                console.log('LCP:', this.metrics.lcp);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
            console.warn('LCP observation not supported');
        }

        // First Input Delay (FID)
        try {
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry: any) => {
                    this.metrics.fid = entry.processingStart - entry.startTime;
                    console.log('FID:', this.metrics.fid);
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
            console.warn('FID observation not supported');
        }

        // Cumulative Layout Shift (CLS)
        try {
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry: any) => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        this.metrics.cls = clsValue;
                        console.log('CLS:', this.metrics.cls);
                    }
                });
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            console.warn('CLS observation not supported');
        }

        // First Contentful Paint (FCP)
        try {
            const fcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry: any) => {
                    if (entry.name === 'first-contentful-paint') {
                        this.metrics.fcp = entry.startTime;
                        console.log('FCP:', this.metrics.fcp);
                    }
                });
            });
            fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
            console.warn('FCP observation not supported');
        }

        // Time to First Byte (TTFB)
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            this.metrics.ttfb = timing.responseStart - timing.requestStart;
            console.log('TTFB:', this.metrics.ttfb);
        }
    }

    /**
     * Get current metrics
     */
    getMetrics(): PerformanceMetrics {
        return { ...this.metrics };
    }

    /**
     * Get performance score (0-100)
     */
    getPerformanceScore(): number {
        let score = 100;

        // LCP scoring (< 2.5s = good)
        if (this.metrics.lcp) {
            if (this.metrics.lcp > 4000) score -= 30;
            else if (this.metrics.lcp > 2500) score -= 15;
        }

        // FID scoring (< 100ms = good)
        if (this.metrics.fid) {
            if (this.metrics.fid > 300) score -= 20;
            else if (this.metrics.fid > 100) score -= 10;
        }

        // CLS scoring (< 0.1 = good)
        if (this.metrics.cls) {
            if (this.metrics.cls > 0.25) score -= 20;
            else if (this.metrics.cls > 0.1) score -= 10;
        }

        // FCP scoring (< 1.8s = good)
        if (this.metrics.fcp) {
            if (this.metrics.fcp > 3000) score -= 15;
            else if (this.metrics.fcp > 1800) score -= 7;
        }

        // TTFB scoring (< 600ms = good)
        if (this.metrics.ttfb) {
            if (this.metrics.ttfb > 1800) score -= 15;
            else if (this.metrics.ttfb > 600) score -= 7;
        }

        return Math.max(0, score);
    }

    /**
     * Log performance report
     */
    logReport() {
        console.group('Performance Report');
        console.log('Metrics:', this.metrics);
        console.log('Score:', this.getPerformanceScore());
        console.groupEnd();
    }

    /**
     * Send metrics to analytics
     */
    sendToAnalytics() {
        // Implement sending to your analytics service
        // Example: Google Analytics, custom endpoint, etc.
        if (typeof window !== 'undefined' && (window as any).gtag) {
            const gtag = (window as any).gtag;

            if (this.metrics.lcp) {
                gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'LCP',
                    value: Math.round(this.metrics.lcp)
                });
            }

            if (this.metrics.fid) {
                gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'FID',
                    value: Math.round(this.metrics.fid)
                });
            }

            if (this.metrics.cls) {
                gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'CLS',
                    value: Math.round(this.metrics.cls * 1000) / 1000
                });
            }
        }
    }
}
