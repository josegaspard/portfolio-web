import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content, ContentStatus, ContentType } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  create(createContentDto: CreateContentDto) {
    const content = this.contentRepository.create(createContentDto);
    return this.contentRepository.save(content);
  }

  findAll() {
    return this.contentRepository.find();
  }

  findOne(id: number) {
    return this.contentRepository.findOneBy({ id });
  }

  findPortfolio() {
    return this.contentRepository.find({
      where: { type: ContentType.PORTFOLIO, status: ContentStatus.PUBLISHED },
    });
  }

  async findBySlug(slug: string) {
    const content = await this.contentRepository.findOneBy({ slug });
    if (content) {
      await this.incrementViewCount(content.id);
    }
    return content;
  }

  async incrementViewCount(id: number) {
    await this.contentRepository.increment({ id }, 'viewCount', 1);
  }

  async update(id: number, updateContentDto: UpdateContentDto) {
    await this.contentRepository.update(id, updateContentDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.contentRepository.delete(id);
  }

  async generateSitemap(): Promise<string> {
    const pages = await this.contentRepository.find();
    const baseUrl = 'https://josegaspard.dev';

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static routes
    xml += `  <url><loc>${baseUrl}/</loc><priority>1.0</priority></url>\n`;
    xml += `  <url><loc>${baseUrl}/about</loc><priority>0.8</priority></url>\n`;
    xml += `  <url><loc>${baseUrl}/portfolio</loc><priority>0.8</priority></url>\n`;

    // Dynamic pages
    pages.forEach((page) => {
      const path = page.type === ContentType.PORTFOLIO ? 'portfolio' : 'page';
      xml += `  <url><loc>${baseUrl}/${path}/${page.slug}</loc><priority>0.6</priority></url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  }
}
