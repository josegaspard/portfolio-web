import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { ContactMessagesModule } from '../contact-messages/contact-messages.module';

@Module({
    imports: [ContactMessagesModule],
    controllers: [EmailController],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule { }
