import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnalyticsEvent, EventType } from './entities/analytics-event.entity';

@Injectable()
export class AnalyticsService {
    constructor(
        @InjectRepository(AnalyticsEvent)
        private analyticsRepository: Repository<AnalyticsEvent>,
    ) { }

    async trackEvent(data: {
        type: EventType;
        url?: string;
        userAgent?: string;
        ip?: string;
        payload?: any;
    }) {
        const event = this.analyticsRepository.create(data);
        return this.analyticsRepository.save(event);
    }

    async getStats() {
        // Total page views
        const totalViews = await this.analyticsRepository.count({
            where: { type: EventType.PAGE_VIEW }
        });

        // Unique visitors (by IP)
        const uniqueVisitors = await this.analyticsRepository
            .createQueryBuilder('event')
            .select('COUNT(DISTINCT event.ip)', 'count')
            .where('event.type = :type', { type: EventType.PAGE_VIEW })
            .getRawOne();

        // Top pages
        const topPages = await this.analyticsRepository
            .createQueryBuilder('event')
            .select('event.url', 'url')
            .addSelect('COUNT(*)', 'views')
            .where('event.type = :type', { type: EventType.PAGE_VIEW })
            .groupBy('event.url')
            .orderBy('views', 'DESC')
            .limit(10)
            .getRawMany();

        // Top clicks
        const topClicks = await this.analyticsRepository
            .createQueryBuilder('event')
            .select('event.payload', 'data')
            .addSelect('COUNT(*)', 'clicks')
            .where('event.type = :type', { type: EventType.LINK_CLICK })
            .groupBy('event.payload')
            .orderBy('clicks', 'DESC')
            .limit(10)
            .getRawMany();

        // WhatsApp clicks
        const whatsappClicks = await this.analyticsRepository.count({
            where: { type: EventType.CLICK_WHATSAPP }
        });

        // Visits by day (last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const clicksByDay = await this.analyticsRepository
            .createQueryBuilder('event')
            .select("strftime('%Y-%m-%d', event.timestamp)", 'date')
            .addSelect('COUNT(*)', 'count')
            .where('event.type = :type', { type: EventType.PAGE_VIEW })
            .andWhere('event.timestamp >= :date', { date: sevenDaysAgo })
            .groupBy('date')
            .orderBy('date', 'ASC')
            .getRawMany();

        // Average Session Duration
        // Calculate from UserSession.durationSeconds
        const avgDurationResult = await this.analyticsRepository.manager
            .createQueryBuilder()
            .select('AVG(durationSeconds)', 'avgDuration')
            .from('user_session', 'session')
            .where('durationSeconds IS NOT NULL')
            .andWhere('durationSeconds > 0')
            .getRawOne();

        const avgDurationSeconds = parseInt(avgDurationResult?.avgDuration || '0');
        const avgSessionDuration = this.formatDuration(avgDurationSeconds);

        // Bounce Rate
        // Calculate percentage of sessions with only 1 pageView
        const totalSessions = await this.analyticsRepository.manager
            .createQueryBuilder()
            .select('COUNT(*)', 'count')
            .from('user_session', 'session')
            .getRawOne();

        const bouncedSessions = await this.analyticsRepository.manager
            .createQueryBuilder()
            .select('COUNT(*)', 'count')
            .from('user_session', 'session')
            .where('pageViews <= 1')
            .getRawOne();

        const totalSessionsCount = parseInt(totalSessions?.count || '0');
        const bouncedSessionsCount = parseInt(bouncedSessions?.count || '0');
        const bounceRate = totalSessionsCount > 0
            ? parseFloat(((bouncedSessionsCount / totalSessionsCount) * 100).toFixed(1))
            : 0;

        return {
            totalViews,
            uniqueVisitors: parseInt(uniqueVisitors?.count || '0'),
            whatsappClicks,
            topPages,
            topClicks,
            clicksByDay,
            avgSessionDuration,
            bounceRate,
        };
    }

    private formatDuration(seconds: number): string {
        if (seconds < 60) {
            return `0:${seconds.toString().padStart(2, '0')}`;
        }
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}
