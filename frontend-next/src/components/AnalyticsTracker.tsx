'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analyticsService, EventType } from '../services/analyticsService';

export default function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        analyticsService.trackEvent(EventType.PAGE_VIEW);
    }, [pathname, searchParams]);

    return null;
}
