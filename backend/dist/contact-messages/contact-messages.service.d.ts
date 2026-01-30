import { Repository } from 'typeorm';
import { ContactMessage } from './contact-message.entity';
export declare class ContactMessagesService {
    private readonly contactMessageRepository;
    constructor(contactMessageRepository: Repository<ContactMessage>);
    create(data: Partial<ContactMessage>): Promise<ContactMessage>;
    findAll(): Promise<ContactMessage[]>;
    findOne(id: number): Promise<ContactMessage | null>;
    markAsRead(id: number): Promise<ContactMessage | null>;
    reply(id: number, reply: string): Promise<ContactMessage | null>;
    delete(id: number): Promise<void>;
}
