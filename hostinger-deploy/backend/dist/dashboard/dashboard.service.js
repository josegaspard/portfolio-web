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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const content_entity_1 = require("../content/entities/content.entity");
const analytics_event_entity_1 = require("../analytics/entities/analytics-event.entity");
const subscriber_entity_1 = require("../newsletter/entities/subscriber.entity");
const comment_entity_1 = require("../comments/entities/comment.entity");
let DashboardService = class DashboardService {
    contentRepository;
    analyticsRepository;
    subscriberRepository;
    commentRepository;
    constructor(contentRepository, analyticsRepository, subscriberRepository, commentRepository) {
        this.contentRepository = contentRepository;
        this.analyticsRepository = analyticsRepository;
        this.subscriberRepository = subscriberRepository;
        this.commentRepository = commentRepository;
    }
    async getStats() {
        const totalPosts = await this.contentRepository.count({
            where: { type: content_entity_1.ContentType.POST, status: content_entity_1.ContentStatus.PUBLISHED },
        });
        const totalViews = await this.analyticsRepository.count({ where: { type: analytics_event_entity_1.EventType.PAGE_VIEW } });
        const whatsappClicks = await this.analyticsRepository.count({ where: { type: analytics_event_entity_1.EventType.CLICK_WHATSAPP } });
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const recentViews = await this.analyticsRepository.count({
            where: { type: analytics_event_entity_1.EventType.PAGE_VIEW, timestamp: thirtyDaysAgo }
        });
        const totalSubscribers = await this.subscriberRepository.count();
        const pendingComments = await this.commentRepository.count({ where: { isApproved: false } });
        const allContent = await this.contentRepository.find();
        const seoHealthyCount = allContent.filter((item) => item.seo &&
            item.seo.metaTitle &&
            item.seo.metaDescription).length;
        const seoHealth = allContent.length > 0 ? Math.round((seoHealthyCount / allContent.length) * 100) : 0;
        const recentContent = await this.contentRepository.find({ order: { updatedAt: 'DESC' }, take: 5 });
        const recentComments = await this.commentRepository.find({ order: { createdAt: 'DESC' }, take: 3 });
        return {
            overview: {
                totalVisitors: totalViews,
                organicTraffic: totalViews > 0 ? 65 : 0,
                whatsappClicks: whatsappClicks,
                totalPosts: totalPosts,
                performanceScore: 95,
                totalSubscribers: totalSubscribers,
                seoHealth: seoHealth,
                pendingComments: pendingComments
            },
            recentActivity: [
                ...recentContent.map(item => ({
                    id: item.id,
                    type: 'content',
                    text: `Contenido modificado: ${item.title}`,
                    timestamp: item.updatedAt,
                    icon: 'fas fa-file-alt'
                })),
                ...recentComments.map(c => ({
                    id: c.id,
                    type: 'comment',
                    text: `Nuevo comentario de ${c.authorName}`,
                    timestamp: c.createdAt,
                    icon: 'fas fa-comment'
                }))
            ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(content_entity_1.Content)),
    __param(1, (0, typeorm_1.InjectRepository)(analytics_event_entity_1.AnalyticsEvent)),
    __param(2, (0, typeorm_1.InjectRepository)(subscriber_entity_1.Subscriber)),
    __param(3, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map