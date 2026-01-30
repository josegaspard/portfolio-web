import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    async create(@Body() body: any) {
        return this.commentsService.create(body);
    }

    @Get('post/:postId')
    async getByPost(@Param('postId', ParseIntPipe) postId: number) {
        return this.commentsService.getByPost(postId);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id/approve')
    async approve(@Param('id') id: number) {
        return this.commentsService.approve(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.commentsService.delete(id);
    }
}
