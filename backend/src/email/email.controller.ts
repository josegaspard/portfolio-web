import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) { }

    @Post('reply')
    async sendReply(@Body() data: { messageId: number; reply: string }) {
        return this.emailService.sendReply(data.messageId, data.reply);
    }

    @Post('bulk')
    async sendBulk(@Body() data: { subject: string; content: string; emails: string[] }) {
        return this.emailService.sendBulkEmail(data.subject, data.content, data.emails);
    }
}
