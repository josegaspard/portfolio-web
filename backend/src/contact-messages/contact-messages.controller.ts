import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ContactMessagesService } from './contact-messages.service';
import { ContactMessage } from './contact-message.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('contact-messages')
export class ContactMessagesController {
    constructor(private readonly contactMessagesService: ContactMessagesService) { }

    @Post()
    async create(@Body() data: Partial<ContactMessage>): Promise<ContactMessage> {
        return this.contactMessagesService.create(data);
    }

    @Get()
    // Remover autenticación para que dashboard pueda leer mensajes
    async findAll(): Promise<ContactMessage[]> {
        return this.contactMessagesService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async findOne(@Param('id') id: string): Promise<ContactMessage | null> {
        return this.contactMessagesService.findOne(+id);
    }

    @Put(':id/read')
    // Remover autenticación para facilitar uso desde dashboard
    async markAsRead(@Param('id') id: string): Promise<ContactMessage | null> {
        return this.contactMessagesService.markAsRead(+id);
    }

    @Post(':id/reply')
    // Remover autenticación para facilitar uso desde dashboard
    async reply(
        @Param('id') id: string,
        @Body('reply') reply: string,
    ): Promise<ContactMessage | null> {
        return this.contactMessagesService.reply(+id, reply);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id') id: string): Promise<void> {
        return this.contactMessagesService.delete(+id);
    }
}
