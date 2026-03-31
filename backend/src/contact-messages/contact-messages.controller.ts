import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ContactMessagesService } from './contact-messages.service';
import { ContactMessage } from './contact-message.entity';

@Controller('contact-messages')
export class ContactMessagesController {
    constructor(private readonly contactMessagesService: ContactMessagesService) { }

    @Post()
    async create(@Body() data: Partial<ContactMessage>): Promise<ContactMessage> {
        return this.contactMessagesService.create(data);
    }

    @Get()
    async findAll(): Promise<ContactMessage[]> {
        return this.contactMessagesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ContactMessage | null> {
        return this.contactMessagesService.findOne(+id);
    }

    @Put(':id/read')
    async markAsRead(@Param('id') id: string): Promise<ContactMessage | null> {
        return this.contactMessagesService.markAsRead(+id);
    }

    @Post(':id/reply')
    async reply(@Param('id') id: string, @Body('reply') reply: string): Promise<ContactMessage | null> {
        return this.contactMessagesService.reply(+id, reply);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.contactMessagesService.delete(+id);
    }
}
