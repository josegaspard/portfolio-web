import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsEvent } from './entities/analytics-event.entity';
import { UserSession } from './entities/user-session.entity';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { GeolocationService } from './geolocation.service';

@Module({
    imports: [TypeOrmModule.forFeature([AnalyticsEvent, UserSession])],
    controllers: [AnalyticsController],
    providers: [AnalyticsService, GeolocationService],
    exports: [AnalyticsService, GeolocationService],
})
export class AnalyticsModule { }
