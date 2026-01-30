import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterSubscriber } from './newsletter-subscriber.entity';

@Controller('newsletter')
export class NewsletterController {
    constructor(private readonly newsletterService: NewsletterService) { }

    @Post('subscribe')
    async subscribe(@Body() data: { email: string; name?: string; source?: string }): Promise<NewsletterSubscriber> {
        return this.newsletterService.subscribe(data.email, data.name, data.source || 'blog');
    }

    @Get('subscribers')
    async getSubscribers(): Promise<NewsletterSubscriber[]> {
        return this.newsletterService.findAll();
    }

    @Get('stats')
    async getStats() {
        return this.newsletterService.getStats();
    }

    @Delete('unsubscribe/:email')
    async unsubscribe(@Param('email') email: string): Promise<void> {
        return this.newsletterService.unsubscribe(email);
    }
}
