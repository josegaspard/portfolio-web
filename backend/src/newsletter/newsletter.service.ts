import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsletterSubscriber } from './newsletter-subscriber.entity';

@Injectable()
export class NewsletterService {
    constructor(
        @InjectRepository(NewsletterSubscriber)
        private readonly subscriberRepository: Repository<NewsletterSubscriber>,
    ) { }

    async subscribe(email: string, name?: string, source: string = 'blog'): Promise<NewsletterSubscriber> {
        // Verificar si ya existe
        const existing = await this.subscriberRepository.findOne({ where: { email } });
        if (existing) {
            // Reactivar si estaba inactivo
            if (!existing.active) {
                existing.active = true;
                return this.subscriberRepository.save(existing);
            }
            return existing;
        }

        // Crear nuevo suscriptor
        const subscriber = this.subscriberRepository.create({ email, name, source });
        return this.subscriberRepository.save(subscriber);
    }

    async findAll(): Promise<NewsletterSubscriber[]> {
        return this.subscriberRepository.find({
            where: { active: true },
            order: { subscribedAt: 'DESC' },
        });
    }

    async unsubscribe(email: string): Promise<void> {
        await this.subscriberRepository.update({ email }, { active: false });
    }

    async getStats() {
        const total = await this.subscriberRepository.count({ where: { active: true } });
        const thisMonth = await this.subscriberRepository
            .createQueryBuilder('subscriber')
            .where('subscriber.active = :active', { active: true })
            .andWhere('subscriber.subscribedAt >= datetime("now", "-30 days")')
            .getCount();

        return { total, thisMonth };
    }
}
