import { ContentStatus, ContentType } from '../entities/content.entity';
export declare class CreateContentDto {
    slug: string;
    title: string;
    blocks: string;
    type?: ContentType;
    status?: ContentStatus;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string;
        ogImage?: string;
        canonical?: string;
        schemaType?: string;
        noIndex?: boolean;
    };
    coverImage?: string;
    author?: string;
    category?: string;
    tags?: string[];
    readingTime?: number;
    layout?: string;
}
