import React from 'react';
import { Metadata } from 'next';
import { contentService } from '@/services/contentService';
import { notFound, redirect } from 'next/navigation';
import { sanitizeHtml } from '@/utils/sanitize';
import Header from '@/components/Header/Header';
import './dynamic-page.css';

interface Props {
    params: Promise<{ slug: string }>;
}

// In static export mode, return safe known slugs that the backend API can serve at build time.
// If backend is unreachable during build, contentService returns null and notFound() handles it.
export function generateStaticParams() {
    return [{ slug: '_placeholder' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await contentService.getBySlug(slug);

    if (!data) return { title: 'Not Found | Jose Gaspard' };

    return {
        title: `${data.seo?.metaTitle || data.title} | Jose Gaspard`,
        description: data.seo?.metaDescription,
        keywords: data.seo?.keywords,
        openGraph: {
            title: data.seo?.metaTitle || data.title,
            description: data.seo?.metaDescription,
            images: data.seo?.ogImage ? [{ url: data.seo.ogImage }] : undefined,
        }
    };
}

export default async function DynamicPage({ params }: Props) {
    const { slug } = await params;
    const data = await contentService.getBySlug(slug);

    if (!data) {
        notFound();
    }

    if (data.type === 'post') {
        redirect(`/blog/${slug}`);
    }

    return (
        <>
            <Header />
            <div className="dynamic-page-container">
                <header className="page-hero">
                    <div className="container">
                        <h1 className="page-title">{data.title}</h1>
                    </div>
                </header>

                <main className="page-body-container">
                    <div className="container">
                        <div className="page-content" dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.blocks) }}></div>
                    </div>
                </main>
            </div>
        </>
    );
}

