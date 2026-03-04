import { Repository } from 'typeorm';
import { NewsletterSubscriber } from './newsletter-subscriber.entity';
export declare class NewsletterService {
    private readonly subscriberRepository;
    constructor(subscriberRepository: Repository<NewsletterSubscriber>);
    subscribe(email: string, name?: string, source?: string): Promise<NewsletterSubscriber>;
    findAll(): Promise<NewsletterSubscriber[]>;
    unsubscribe(email: string): Promise<void>;
    getStats(): Promise<{
        total: number;
        thisMonth: number;
    }>;
}
