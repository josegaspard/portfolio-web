import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { Content } from './content/entities/content.entity';
import { User } from './auth/entities/user.entity';
import { Setting } from './settings/entities/setting.entity';
import { Media } from './media/entities/media.entity';
import { SettingsModule } from './settings/settings.module';
import { MediaModule } from './media/media.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { CommentsModule } from './comments/comments.module';
import { ContactMessagesModule } from './contact-messages/contact-messages.module';
import { EmailModule } from './email/email.module';  // ACTIVADO
import { AnalyticsEvent } from './analytics/entities/analytics-event.entity';
import { UserSession } from './analytics/entities/user-session.entity';
import { Subscriber } from './newsletter/entities/subscriber.entity';
import { Comment } from './comments/entities/comment.entity';
import { ContactMessage } from './contact-messages/contact-message.entity';
import { NewsletterSubscriber } from './newsletter/newsletter-subscriber.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [
        Content,
        User,
        Setting,
        Media,
        AnalyticsEvent,
        UserSession,
        Subscriber,
        Comment,
        ContactMessage,
        NewsletterSubscriber,
      ],
      synchronize: true,
    }),

    ContentModule,
    AuthModule,
    DashboardModule,
    SettingsModule,
    MediaModule,
    AnalyticsModule,
    NewsletterModule,
    CommentsModule,
    ContactMessagesModule,
    EmailModule,  // ACTIVADO
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
