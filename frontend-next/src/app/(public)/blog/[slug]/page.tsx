import React from 'react';
import { Metadata } from 'next';
import { contentService, mapToBlogPost } from '@/services/contentService';
import { notFound } from 'next/navigation';
import ProgressBar from '@/components/Blog/ProgressBar';
import SocialShareSidebar from '@/components/Blog/SocialShareSidebar';
import BlogHero from '@/components/Blog/BlogHero';
import TableOfContents from '@/components/Blog/TableOfContents';
import AuthorCard from '@/components/Blog/AuthorCard';
import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';
import Comments from '@/components/Comments/Comments';
import { sanitizeHtml } from '@/utils/sanitize';
import Header from '@/components/Header/Header';
import '@/components/Blog/BlogPost.css';
import '@/components/Blog/AuthorBio.css';

interface Props {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    // Backend serves blog posts at runtime; in static export return only a placeholder.
    return [{ slug: '_placeholder' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await contentService.getBySlug(slug);
    if (!data) return { title: 'Post Not Found' };

    return {
        title: data.seo?.metaTitle || `${data.title} | Blog Jose Gaspard`,
        description: data.seo?.metaDescription || `Lea más sobre ${data.title}`,
        keywords: data.seo?.keywords ? data.seo.keywords.split(',') : data.tags,
        alternates: {
            canonical: data.seo?.canonical || undefined,
        },
        robots: data.seo?.noIndex ? { index: false, follow: false } : undefined,
        openGraph: {
            title: data.seo?.metaTitle || data.title,
            description: data.seo?.metaDescription,
            images: data.seo?.ogImage ? [{ url: data.seo.ogImage }] : (data.coverImage ? [{ url: data.coverImage }] : undefined),
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const data = await contentService.getBySlug(slug);

    if (!data || data.type !== 'post') {
        notFound();
    }

    const post = mapToBlogPost(data);
    const postUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/blog/${slug}`;

    return (
        <>
            <Header />
            <article className="blog-post-container">
                <ProgressBar />

                <BlogHero
                    title={post.title}
                    coverImage={post.coverImage}
                    author={post.author}
                    publishedAt={post.publishedAt || new Date().toISOString()}
                    readingTime={post.readingTime}
                    category={post.category}
                    tags={post.tags}
                />

                <div className="blog-content-wrapper container">
                    {/* Left Sidebar: Social Share */}
                    <SocialShareSidebar url={postUrl} title={post.title} />

                    {/* Main Content */}
                    <main className="blog-main-content">
                        <div
                            className="post-body"
                            dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.blocks) }}
                        />

                        {/* Author Bio */}
                        <div className="author-bio glass-premium" data-aos="fade-up">
                            <img src="/img/josegaspard.png" alt={post.author} className="bio-avatar" />
                            <div className="bio-content">
                                <h4>{post.author}</h4>
                                <p>Arquitecto SEO y Especialista en Marketing Digital. Ayudo a marcas a dominar las SERPs con estrategias data-driven y desarrollo premium.</p>
                                <div className="bio-social">
                                    <a href="https://linkedin.com/in/josegaspard" className="bio-social-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://twitter.com/josegaspard" className="bio-social-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://github.com/josegaspard" className="bio-social-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Comments */}
                        <Comments postId={post.id} />
                    </main>

                    {/* Right Sidebar: TOC, Author, Newsletter */}
                    <aside className="blog-sidebar-right">
                        <TableOfContents />
                        <AuthorCard
                            author={post.author}
                            bio="SEO Architect & Digital Builder"
                            avatar="/img/josegaspard.png"
                        />
                        <NewsletterForm />
                    </aside>
                </div>
            </article>
        </>
    );
}
