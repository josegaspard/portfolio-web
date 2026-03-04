"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const content_entity_1 = require("./entities/content.entity");
let ContentService = class ContentService {
    contentRepository;
    constructor(contentRepository) {
        this.contentRepository = contentRepository;
    }
    create(createContentDto) {
        const content = this.contentRepository.create(createContentDto);
        return this.contentRepository.save(content);
    }
    findAll() {
        return this.contentRepository.find();
    }
    findOne(id) {
        return this.contentRepository.findOneBy({ id });
    }
    findPortfolio() {
        return this.contentRepository.find({
            where: { type: content_entity_1.ContentType.PORTFOLIO, status: content_entity_1.ContentStatus.PUBLISHED },
        });
    }
    async findBySlug(slug) {
        const content = await this.contentRepository.findOneBy({ slug });
        if (content) {
            await this.incrementViewCount(content.id);
        }
        return content;
    }
    async incrementViewCount(id) {
        await this.contentRepository.increment({ id }, 'viewCount', 1);
    }
    async update(id, updateContentDto) {
        await this.contentRepository.update(id, updateContentDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.contentRepository.delete(id);
    }
    async generateSitemap() {
        const pages = await this.contentRepository.find();
        const baseUrl = 'https://josegaspard.dev';
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
        xml += `  <url><loc>${baseUrl}/</loc><priority>1.0</priority></url>\n`;
        xml += `  <url><loc>${baseUrl}/about</loc><priority>0.8</priority></url>\n`;
        xml += `  <url><loc>${baseUrl}/portfolio</loc><priority>0.8</priority></url>\n`;
        pages.forEach((page) => {
            const path = page.type === content_entity_1.ContentType.PORTFOLIO ? 'portfolio' : 'page';
            xml += `  <url><loc>${baseUrl}/${path}/${page.slug}</loc><priority>0.6</priority></url>\n`;
        });
        xml += `</urlset>`;
        return xml;
    }
};
exports.ContentService = ContentService;
exports.ContentService = ContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(content_entity_1.Content)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContentService);
//# sourceMappingURL=content.service.js.map