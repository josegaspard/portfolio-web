"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const content_module_1 = require("./content/content.module");
const auth_module_1 = require("./auth/auth.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const content_entity_1 = require("./content/entities/content.entity");
const user_entity_1 = require("./auth/entities/user.entity");
const setting_entity_1 = require("./settings/entities/setting.entity");
const media_entity_1 = require("./media/entities/media.entity");
const settings_module_1 = require("./settings/settings.module");
const media_module_1 = require("./media/media.module");
const analytics_module_1 = require("./analytics/analytics.module");
const newsletter_module_1 = require("./newsletter/newsletter.module");
const comments_module_1 = require("./comments/comments.module");
const contact_messages_module_1 = require("./contact-messages/contact-messages.module");
const email_module_1 = require("./email/email.module");
const analytics_event_entity_1 = require("./analytics/entities/analytics-event.entity");
const user_session_entity_1 = require("./analytics/entities/user-session.entity");
const subscriber_entity_1 = require("./newsletter/entities/subscriber.entity");
const comment_entity_1 = require("./comments/entities/comment.entity");
const contact_message_entity_1 = require("./contact-messages/contact-message.entity");
const newsletter_subscriber_entity_1 = require("./newsletter/newsletter-subscriber.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database.sqlite',
                entities: [
                    content_entity_1.Content,
                    user_entity_1.User,
                    setting_entity_1.Setting,
                    media_entity_1.Media,
                    analytics_event_entity_1.AnalyticsEvent,
                    user_session_entity_1.UserSession,
                    subscriber_entity_1.Subscriber,
                    comment_entity_1.Comment,
                    contact_message_entity_1.ContactMessage,
                    newsletter_subscriber_entity_1.NewsletterSubscriber,
                ],
                synchronize: true,
            }),
            content_module_1.ContentModule,
            auth_module_1.AuthModule,
            dashboard_module_1.DashboardModule,
            settings_module_1.SettingsModule,
            media_module_1.MediaModule,
            analytics_module_1.AnalyticsModule,
            newsletter_module_1.NewsletterModule,
            comments_module_1.CommentsModule,
            contact_messages_module_1.ContactMessagesModule,
            email_module_1.EmailModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map