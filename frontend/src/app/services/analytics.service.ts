import { Injectable } from '@angular/core';

declare global {
    interface Window {
        gtag: any;
        dataLayer: any;
    }
}

interface AnalyticsEvent {
    category: string;
    action: string;
    label?: string;
    value?: number;
}

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    private initialized = false;

    /**
     * Initialize Google Analytics 4
     */
    initializeGA4(measurementId: string) {
        if (typeof window === 'undefined' || this.initialized) return;

        // Load GA4 script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);

        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', measurementId, {
            send_page_view: false // We'll send manually for SPA
        });

        this.initialized = true;
    }

    /**
     * Track page view
     */
    trackPageView(url: string, title: string) {
        if (typeof window === 'undefined' || !window.gtag) return;

        window.gtag('event', 'page_view', {
            page_path: url,
            page_title: title
        });
    }

    /**
     * Track custom event
     */
    trackEvent(event: AnalyticsEvent) {
        if (typeof window === 'undefined' || !window.gtag) return;

        window.gtag('event', event.action, {
            event_category: event.category,
            event_label: event.label,
            value: event.value
        });
    }

    /**
     * Track CTA clicks
     */
    trackCTAClick(ctaName: string, location: string) {
        this.trackEvent({
            category: 'CTA',
            action: 'click',
            label: `${ctaName} - ${location}`
        });
    }

    /**
     * Track form submissions
     */
    trackFormSubmission(formName: string, success: boolean) {
        this.trackEvent({
            category: 'Form',
            action: success ? 'submit_success' : 'submit_error',
            label: formName
        });
    }

    /**
     * Track scroll depth
     */
    trackScrollDepth(percentage: number) {
        this.trackEvent({
            category: 'Engagement',
            action: 'scroll',
            label: `${percentage}%`,
            value: percentage
        });
    }

    /**
     * Track time on page
     */
    trackTimeOnPage(seconds: number) {
        this.trackEvent({
            category: 'Engagement',
            action: 'time_on_page',
            value: seconds
        });
    }

    /**
     * Track outbound link clicks
     */
    trackOutboundLink(url: string) {
        this.trackEvent({
            category: 'Outbound Link',
            action: 'click',
            label: url
        });
    }

    /**
     * Track file downloads
     */
    trackDownload(fileName: string) {
        this.trackEvent({
            category: 'Download',
            action: 'click',
            label: fileName
        });
    }

    /**
     * Track video interactions
     */
    trackVideo(action: 'play' | 'pause' | 'complete', videoTitle: string) {
        this.trackEvent({
            category: 'Video',
            action,
            label: videoTitle
        });
    }

    /**
     * Set user properties
     */
    setUserProperty(propertyName: string, value: any) {
        if (typeof window === 'undefined' || !window.gtag) return;

        window.gtag('set', 'user_properties', {
            [propertyName]: value
        });
    }

    /**
     * Track conversion
     */
    trackConversion(conversionId: string, value?: number, currency: string = 'USD') {
        if (typeof window === 'undefined' || !window.gtag) return;

        window.gtag('event', 'conversion', {
            send_to: conversionId,
            value: value,
            currency: currency
        });
    }
}
