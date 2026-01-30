import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { MediaService } from './media.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('media')
export class MediaController {
    constructor(private readonly mediaService: MediaService) { }

    @Get()
    findAll() {
        return this.mediaService.findAll();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() data: any) {
        return this.mediaService.create(data);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') id: string) {
        return this.mediaService.remove(+id);
    }
}

