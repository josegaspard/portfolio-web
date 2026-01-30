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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsEvent = exports.EventType = void 0;
const typeorm_1 = require("typeorm");
const user_session_entity_1 = require("./user-session.entity");
var EventType;
(function (EventType) {
    EventType["PAGE_VIEW"] = "page_view";
    EventType["CLICK_WHATSAPP"] = "click_whatsapp";
    EventType["CLICK_CTA"] = "click_cta";
    EventType["LINK_CLICK"] = "link_click";
    EventType["FORM_SUBMIT"] = "form_submit";
    EventType["NEWSLETTER_SIGNUP"] = "newsletter_signup";
    EventType["COMMENT_POSTED"] = "comment_posted";
    EventType["SOCIAL_SHARE"] = "social_share";
    EventType["BLOG_POST_READ"] = "blog_post_read";
    EventType["VIDEO_PLAY"] = "video_play";
    EventType["VIDEO_COMPLETE"] = "video_complete";
    EventType["DOWNLOAD"] = "download";
    EventType["SEARCH"] = "search";
    EventType["SCROLL_DEPTH"] = "scroll_depth";
    EventType["TIME_ON_PAGE"] = "time_on_page";
    EventType["EXIT_INTENT"] = "exit_intent";
})(EventType || (exports.EventType = EventType = {}));
let AnalyticsEvent = class AnalyticsEvent {
    id;
    type;
    url;
    userAgent;
    ip;
    clickX;
    clickY;
    elementSelector;
    scrollDepthPercent;
    timeOnPageSeconds;
    payload;
    timestamp;
    session;
    sessionId;
};
exports.AnalyticsEvent = AnalyticsEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AnalyticsEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: EventType,
    }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnalyticsEvent.prototype, "clickX", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnalyticsEvent.prototype, "clickY", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "elementSelector", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnalyticsEvent.prototype, "scrollDepthPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], AnalyticsEvent.prototype, "timeOnPageSeconds", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], AnalyticsEvent.prototype, "payload", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AnalyticsEvent.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_session_entity_1.UserSession, session => session.events, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'sessionId' }),
    __metadata("design:type", user_session_entity_1.UserSession)
], AnalyticsEvent.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AnalyticsEvent.prototype, "sessionId", void 0);
exports.AnalyticsEvent = AnalyticsEvent = __decorate([
    (0, typeorm_1.Entity)()
], AnalyticsEvent);
//# sourceMappingURL=analytics-event.entity.js.map