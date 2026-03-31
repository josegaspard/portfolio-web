import { Metadata } from 'next';
import HomeClient from './HomeClient';
import { contentService } from '@/services/contentService';

export async function generateMetadata(): Promise<Metadata> {
    const data = await contentService.getBySlug('home');
    if (!data) {
        return {
            title: 'José Gaspard - SEO Architect & Builder',
            description: 'Experto en SEO técnico y desarrollo web premium.',
        };
    }

    return {
        title: data.seo?.metaTitle || data.title,
        description: data.seo?.metaDescription,
        keywords: data.seo?.keywords,
        alternates: {
            canonical: data.seo?.canonical,
        },
        robots: data.seo?.noIndex ? { index: false, follow: false } : undefined,
        openGraph: {
            title: data.seo?.metaTitle || data.title,
            description: data.seo?.metaDescription,
            images: data.seo?.ogImage ? [{ url: data.seo.ogImage }] : undefined,
        },
    };
}

export default function HomePage() {
    return <HomeClient />;
}
