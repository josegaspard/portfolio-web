import { logger } from '@/utils/logger';

export interface Content {
    id: number;
    title: string;
    slug: string;
    blocks: string;
    type: 'post' | 'page' | 'portfolio' | 'home';
    status: 'draft' | 'published' | 'archived';
    coverImage: string;
    author?: string;
    category?: string;
    tags?: string[];
    readingTime?: number;
    layout?: string;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string;
        ogImage?: string;
        canonical?: string;
        schemaType?: string;
        noIndex?: boolean;
    };
    publishedAt?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface BlogPost extends Content {
    author: string;
    readingTime: number;
    category: string;
    tags: string[];
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/content`;

const getAuthHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    };
};

export const contentService = {
    async getAll(): Promise<Content[]> {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) return [];
            return res.json();
        } catch (error) {
            logger.error('Failed to fetch all content', error, 'contentService.getAll');
            return [];
        }
    },

    async getById(id: number): Promise<Content | null> {
        try {
            const res = await fetch(`${API_URL}/${id}`);
            if (!res.ok) return null;
            return res.json();
        } catch (error) {
            logger.error(`Failed to fetch content by ID: ${id}`, error, 'contentService.getById');
            return null;
        }
    },

    async getBySlug(slug: string): Promise<Content | null> {
        try {
            const res = await fetch(`${API_URL}/slug/${slug}`);
            if (!res.ok) return null;
            const text = await res.text();
            if (!text || text === 'null') return null;
            return JSON.parse(text);
        } catch (error) {
            logger.error(`Failed to fetch content by slug: ${slug}`, error, 'contentService.getBySlug');
            return null;
        }
    },

    async create(data: Partial<Content>): Promise<Content | null> {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: getAuthHeaders(),
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error('Failed to create content');
            return res.json();
        } catch (error) {
            logger.error('Failed to create content', error, 'contentService.create');
            return null;
        }
    },

    async update(id: number, data: Partial<Content>): Promise<Content | null> {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: getAuthHeaders(),
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error('Failed to update content');
            return res.json();
        } catch (error) {
            logger.error(`Failed to update content: ${id}`, error, 'contentService.update');
            return null;
        }
    },

    async delete(id: number): Promise<boolean> {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: getAuthHeaders(),
            });
            return res.ok;
        } catch (error) {
            logger.error(`Failed to delete content: ${id}`, error, 'contentService.delete');
            return false;
        }
    },

    async getPortfolio(): Promise<Content[]> {
        try {
            const res = await fetch(`${API_URL}/portfolio`);
            if (!res.ok) return [];
            return res.json();
        } catch (error) {
            logger.error('Failed to fetch portfolio content', error, 'contentService.getPortfolio');
            return [];
        }
    }
};

export function mapToBlogPost(item: Content): BlogPost {
    return {
        ...item,
        author: item.author || 'José Gaspard',
        readingTime: item.readingTime || 5,
        category: item.category || 'SEO',
        tags: item.tags || []
    };
}

