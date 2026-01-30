export type ContentStatus = 'draft' | 'published' | 'archived';
export type ContentType = 'page' | 'post' | 'home';

export interface Content {
    id?: number;
    slug: string;
    title: string;
    blocks: string; // JSON string
    type: ContentType;
    status: ContentStatus;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string;
        ogImage?: string;
        canonical?: string;
        schemaType?: string;
    };
    coverImage?: string;
    viewCount?: number;
    publishedAt?: Date;
    updatedAt?: Date;
}
