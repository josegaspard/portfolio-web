import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from '../content/entities/content.entity';
import { AnalyticsEvent } from '../analytics/entities/analytics-event.entity';
import { Subscriber } from '../newsletter/entities/subscriber.entity';
import { Comment } from '../comments/entities/comment.entity';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [TypeOrmModule.forFeature([Content, AnalyticsEvent, Subscriber, Comment])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule { }
