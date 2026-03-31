import { logger } from '@/utils/logger';

export enum EventType {
    PAGE_VIEW = 'page_view',
    CLICK_WHATSAPP = 'click_whatsapp',
    CLICK_CTA = 'click_cta',
    FORM_SUBMIT = 'form_submit',
    SOCIAL_SHARE = 'social_share',
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/analytics`;

export const analyticsService = {
    async trackEvent(type: EventType, payload?: any) {
        try {
            await fetch(`${API_URL}/event`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type,
                    url: typeof window !== 'undefined' ? window.location.href : '',
                    payload,
                }),
            });
        } catch (error) {
            logger.error('Failed to track analytics event', error, 'analyticsService.trackEvent');
        }
    },
};
