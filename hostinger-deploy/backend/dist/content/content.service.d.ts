import { Repository } from 'typeorm';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content } from './entities/content.entity';
export declare class ContentService {
    private contentRepository;
    constructor(contentRepository: Repository<Content>);
    create(createContentDto: CreateContentDto): Promise<Content>;
    findAll(): Promise<Content[]>;
    findOne(id: number): Promise<Content | null>;
    findPortfolio(): Promise<Content[]>;
    findBySlug(slug: string): Promise<Content | null>;
    incrementViewCount(id: number): Promise<void>;
    update(id: number, updateContentDto: UpdateContentDto): Promise<Content | null>;
    remove(id: number): Promise<void>;
    generateSitemap(): Promise<string>;
}
