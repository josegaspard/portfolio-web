import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendReply(data: {
        messageId: number;
        reply: string;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    sendBulk(data: {
        subject: string;
        content: string;
        emails: string[];
    }): Promise<{
        success: boolean;
        sent: number;
        failed: number;
    }>;
}
