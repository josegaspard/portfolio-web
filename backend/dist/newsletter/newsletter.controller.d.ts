import { NewsletterService } from './newsletter.service';
import { NewsletterSubscriber } from './newsletter-subscriber.entity';
export declare class NewsletterController {
    private readonly newsletterService;
    constructor(newsletterService: NewsletterService);
    subscribe(data: {
        email: string;
        name?: string;
        source?: string;
    }): Promise<NewsletterSubscriber>;
    getSubscribers(): Promise<NewsletterSubscriber[]>;
    getStats(): Promise<{
        total: number;
        thisMonth: number;
    }>;
    unsubscribe(email: string): Promise<void>;
}
