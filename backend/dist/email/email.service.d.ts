import { ContactMessagesService } from '../contact-messages/contact-messages.service';
export declare class EmailService {
    private readonly contactMessagesService;
    private resend;
    private fromEmail;
    private readonly logger;
    constructor(contactMessagesService: ContactMessagesService);
    private generateEmailTemplate;
    sendReply(messageId: number, replyText: string): Promise<{
        success: boolean;
        message: string;
    }>;
    sendBulkEmail(subject: string, content: string, recipientEmails: string[]): Promise<{
        success: boolean;
        sent: number;
        failed: number;
    }>;
}
