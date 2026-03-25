import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { EmailService } from './email.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) { }

    @Post('reply')
    @UseGuards(JwtAuthGuard)
    async sendReply(@Body() data: { messageId: number; reply: string }) {
        return this.emailService.sendReply(data.messageId, data.reply);
    }

    @Post('bulk')
    @UseGuards(JwtAuthGuard)
    async sendBulk(@Body() data: { subject: string; content: string; emails: string[] }) {
        return this.emailService.sendBulkEmail(data.subject, data.content, data.emails);
    }
}
