'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { contentService, Content, mapToBlogPost, BlogPost } from '@/services/contentService';
import Header from '@/components/Header/Header';
import './blog-archive.css';

export default function BlogArchive() {
    const { t } = useLanguage();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            const data = await contentService.getAll();
            const blogPosts = data.filter((item: Content) => item.type === 'post').map(mapToBlogPost);
            setPosts(blogPosts);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    const filteredPosts = selectedCategory === 'all'
        ? posts
        : posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <>
            <Header />
            <div className="blog-archive-page">
                <section className="archive-hero">
                    <div className="container">
                        <h1 className="archive-title">Blog</h1>
                        <p className="archive-subtitle">
                            Artículos sobre SEO técnico, desarrollo web, y estrategias de crecimiento digital
                        </p>
                    </div>
                </section>

                <section className="archive-filters">
                    <div className="container">
                        <div className="filter-buttons">
                            <button
                                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('all')}>
                                Todos
                            </button>
                            <button
                                className={`filter-btn ${selectedCategory === 'seo' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('seo')}>
                                SEO Técnico
                            </button>
                        </div>
                    </div>
                </section>

                <section className="archive-posts">
                    <div className="container">
                        {loading ? (
                            <div className="text-center py-20">Cargando artículos...</div>
                        ) : (
                            <div className="posts-grid">
                                {filteredPosts.map(post => (
                                    <article key={post.id} className="post-card glass-premium">
                                        <Link href={`/blog/${post.slug || post.id}`} className="post-link">
                                            <div className="post-image">
                                                <img src={post.coverImage || '/img/placeholder-post.jpg'} alt={post.title} />
                                                <span className="post-category">{post.category}</span>
                                            </div>
                                            <div className="post-content">
                                                <div className="post-meta">
                                                    <span className="post-date">
                                                        <i className="far fa-calendar"></i>
                                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                                                    </span>
                                                </div>
                                                <h2 className="post-title">{post.title}</h2>
                                                <p className="post-excerpt">{post.seo?.metaDescription || post.title}</p>
                                                <div className="post-footer">
                                                    <span className="read-more">
                                                        Leer más
                                                        <i className="fas fa-arrow-right"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                        {!loading && filteredPosts.length === 0 && (
                            <div className="text-center py-20">No se encontraron artículos.</div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}
