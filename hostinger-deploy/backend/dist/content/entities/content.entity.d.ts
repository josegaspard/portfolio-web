export declare enum ContentStatus {
    DRAFT = "draft",
    PUBLISHED = "published",
    ARCHIVED = "archived"
}
export declare enum ContentType {
    PAGE = "page",
    POST = "post",
    HOME = "home",
    PORTFOLIO = "portfolio"
}
export declare class Content {
    id: number;
    slug: string;
    title: string;
    blocks: string;
    type: ContentType;
    status: ContentStatus;
    seo: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string;
        ogImage?: string;
        canonical?: string;
        schemaType?: string;
        noIndex?: boolean;
    };
    coverImage: string;
    author: string;
    category: string;
    tags: string[];
    readingTime: number;
    layout: string;
    portfolioData: {
        client?: string;
        shortDescription?: string;
        heroImage?: string;
        thumbnail?: string;
        gallery?: string[];
        results?: Array<{
            metric: string;
            value: string;
            unit: string;
            label: string;
        }>;
        features?: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
        technologies?: Array<{
            name: string;
            icon: string;
            category: string;
        }>;
        challenges?: Array<{
            challenge: string;
            solution: string;
        }>;
        testimonial?: {
            quote: string;
            author: string;
            position: string;
            company: string;
            avatar?: string;
        };
        liveUrl?: string;
        caseStudyUrl?: string;
    };
    viewCount: number;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
