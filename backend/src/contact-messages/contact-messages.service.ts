import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactMessage } from './contact-message.entity';

@Injectable()
export class ContactMessagesService {
    constructor(
        @InjectRepository(ContactMessage)
        private readonly contactMessageRepository: Repository<ContactMessage>,
    ) { }

    async create(data: Partial<ContactMessage>): Promise<ContactMessage> {
        const message = this.contactMessageRepository.create(data);
        return this.contactMessageRepository.save(message);
    }

    async findAll(): Promise<ContactMessage[]> {
        return this.contactMessageRepository.find({
            order: { createdAt: 'DESC' },
        });
    }

    async findOne(id: number): Promise<ContactMessage | null> {
        return this.contactMessageRepository.findOne({ where: { id } });
    }

    async markAsRead(id: number): Promise<ContactMessage | null> {
        await this.contactMessageRepository.update(id, { read: true });
        return this.findOne(id);
    }

    async reply(id: number, reply: string): Promise<ContactMessage | null> {
        await this.contactMessageRepository.update(id, {
            replied: true,
            adminReply: reply,
        });
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.contactMessageRepository.delete(id);
    }
}
