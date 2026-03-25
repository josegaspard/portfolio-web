import { Controller, Post, Body, Req, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import type { Request } from 'express';

@Controller('analytics')
export class AnalyticsController {
    constructor(private readonly analyticsService: AnalyticsService) { }

    @Post('event')
    async trackEvent(@Body() body: any, @Req() req: Request) {
        return this.analyticsService.trackEvent({
            ...body,
            userAgent: req.headers['user-agent'],
            ip: req.ip || req.headers['x-forwarded-for'] as string,
        });
    }

    @Get('stats')
    async getStats() {
        return this.analyticsService.getStats();
    }
}
