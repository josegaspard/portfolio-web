import { ContactMessagesService } from './contact-messages.service';
import { ContactMessage } from './contact-message.entity';
export declare class ContactMessagesController {
    private readonly contactMessagesService;
    constructor(contactMessagesService: ContactMessagesService);
    create(data: Partial<ContactMessage>): Promise<ContactMessage>;
    findAll(): Promise<ContactMessage[]>;
    findOne(id: string): Promise<ContactMessage | null>;
    markAsRead(id: string): Promise<ContactMessage | null>;
    reply(id: string, reply: string): Promise<ContactMessage | null>;
    delete(id: string): Promise<void>;
}
