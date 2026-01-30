"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const analytics_event_entity_1 = require("./entities/analytics-event.entity");
let AnalyticsService = class AnalyticsService {
    analyticsRepository;
    constructor(analyticsRepository) {
        this.analyticsRepository = analyticsRepository;
    }
    async trackEvent(data) {
        const event = this.analyticsRepository.create(data);
        return this.analyticsRepository.save(event);
    }
    async getStats() {
        const totalViews = await this.analyticsRepository.count({
            where: { type: analytics_event_entity_1.EventType.PAGE_VIEW }
        });
        const uniqueVisitors = await this.analyticsRepository
            .createQueryBuilder('event')
            .select('COUNT(DISTINCT event.ip)', 'count')
            .where('event.type = :type', { type: analytics_event_entity_1.EventType.PAGE_VIEW })
            .getRawOne();
        const topPages = await this.analyticsRepository
            .createQueryBuilder('event')
            .select('event.url', 'url')
            .addSelect('COUNT(*)', 'views')
            .where('event.type = :type', { type: analytics_event_entity_1.EventType.PAGE_VIEW })
            .groupBy('event.url')
            .orderBy('views', 'DESC')
            .limit(10)
            .getRawMany();
        const topClicks = await this.analyticsRepository
            .createQueryBuilder('event')
            .select('event.payload', 'data')
            .addSelect('COUNT(*)', 'clicks')
            .where('event.type = :type', { type: analytics_event_entity_1.EventType.LINK_CLICK })
            .groupBy('event.payload')
            .orderBy('clicks', 'DESC')
            .limit(10)
            .getRawMany();
        const whatsappClicks = await this.analyticsRepository.count({
            where: { type: analytics_event_entity_1.EventType.CLICK_WHATSAPP }
        });
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const clicksByDay = await this.analyticsRepository
            .createQueryBuilder('event')
            .select("strftime('%Y-%m-%d', event.timestamp)", 'date')
            .addSelect('COUNT(*)', 'count')
            .where('event.type = :type', { type: analytics_event_entity_1.EventType.PAGE_VIEW })
            .andWhere('event.timestamp >= :date', { date: sevenDaysAgo })
            .groupBy('date')
            .orderBy('date', 'ASC')
            .getRawMany();
        const avgDurationResult = await this.analyticsRepository.manager
            .createQueryBuilder()
            .select('AVG(durationSeconds)', 'avgDuration')
            .from('user_session', 'session')
            .where('durationSeconds IS NOT NULL')
            .andWhere('durationSeconds > 0')
            .getRawOne();
        const avgDurationSeconds = parseInt(avgDurationResult?.avgDuration || '0');
        const avgSessionDuration = this.formatDuration(avgDurationSeconds);
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
    formatDuration(seconds) {
        if (seconds < 60) {
            return `0:${seconds.toString().padStart(2, '0')}`;
        }
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analytics_event_entity_1.AnalyticsEvent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map