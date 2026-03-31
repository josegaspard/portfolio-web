// Utility para tracking de analytics en el frontend
import { logger } from './logger';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const analytics = {
    // Track page view
    trackPageView(url?: string) {
        const pageUrl = url || window.location.href;

        fetch(`${API_URL}/analytics/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'page_view',
                url: pageUrl,
                userAgent: navigator.userAgent,
            })
        }).catch(err => logger.error('Failed to track page view', err, 'analytics.trackPageView'));
    },

    // Track button/link click
    trackClick(element: string, data?: any) {
        fetch(`${API_URL}/analytics/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'link_click',
                url: window.location.href,
                payload: { element, ...data },
                userAgent: navigator.userAgent,
            })
        }).catch(err => logger.error('Failed to track click', err, 'analytics.trackClick'));
    },

    // Track WhatsApp click
    trackWhatsApp() {
        fetch(`${API_URL}/analytics/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'click_whatsapp',
                url: window.location.href,
                userAgent: navigator.userAgent,
            })
        }).catch(err => logger.error('Failed to track WhatsApp click', err, 'analytics.trackWhatsApp'));
    },

    // Track form submit
    trackFormSubmit(formName: string, data?: any) {
        fetch(`${API_URL}/analytics/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'form_submit',
                url: window.location.href,
                payload: { formName, ...data },
                userAgent: navigator.userAgent,
            })
        }).catch(err => logger.error('Failed to track form submit', err, 'analytics.trackFormSubmit'));
    },

    // Track social share
    trackSocialShare(platform: string, url: string) {
        fetch(`${API_URL}/analytics/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'social_share',
                url: window.location.href,
                payload: { platform, sharedUrl: url },
                userAgent: navigator.userAgent,
            })
        }).catch(err => logger.error('Failed to track social share', err, 'analytics.trackSocialShare'));
    },
};

// Hook para tracking automático de page views
export function usePageTracking() {
    if (typeof window !== 'undefined') {
        // Track on mount
        analytics.trackPageView();
    }
}
