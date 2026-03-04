import type { Response } from 'express';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
export declare class ContentController {
    private readonly contentService;
    constructor(contentService: ContentService);
    create(createContentDto: CreateContentDto): Promise<import("./entities/content.entity").Content>;
    findAll(): Promise<import("./entities/content.entity").Content[]>;
    findPortfolio(): Promise<import("./entities/content.entity").Content[]>;
    findOne(id: string): Promise<import("./entities/content.entity").Content | null>;
    findBySlug(slug: string): Promise<import("./entities/content.entity").Content | null>;
    update(id: string, updateContentDto: UpdateContentDto): Promise<import("./entities/content.entity").Content | null>;
    remove(id: string): Promise<void>;
    getSitemap(res: Response): Promise<void>;
    getRobots(res: Response): void;
}
