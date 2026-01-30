import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) { }

  @Post()
  // Remover autenticación para facilitar creación de contenido
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.create(createContentDto);
  }

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Get('portfolio')
  findPortfolio() {
    return this.contentService.findPortfolio();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOne(+id);
  }

  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.contentService.findBySlug(slug);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentService.update(+id, updateContentDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.contentService.remove(+id);
  }

  @Get('sitemap.xml')
  async getSitemap(@Res() res: Response) {
    const sitemap = await this.contentService.generateSitemap();
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  }

  @Get('robots.txt')
  getRobots(@Res() res: Response) {
    const robots = `User-agent: *\nAllow: /\nSitemap: https://josegaspard.dev/sitemap.xml`;
    res.header('Content-Type', 'text/plain');
    res.send(robots);
  }
}
