import React from 'react';
import Link from 'next/link';
import './BlogHero.css';

interface BlogHeroProps {
    title: string;
    coverImage: string;
    author: string;
    publishedAt: string;
    readingTime: number;
    category: string;
    tags: string[];
}

export default function BlogHero({
    title,
    coverImage,
    author,
    publishedAt,
    readingTime,
    category,
    tags
}: BlogHeroProps) {
    const formattedDate = new Date(publishedAt).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <section className="blog-hero">
            {/* Background Image with Overlay */}
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${coverImage})` }}
            >
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content container">
                {/* Breadcrumbs */}
                <nav className="hero-breadcrumbs">
                    <Link href="/">Inicio</Link>
                    <span>/</span>
                    <Link href="/blog">Blog</Link>
                    <span>/</span>
                    <span>{category}</span>
                </nav>

                {/* Category Badge */}
                <div className="hero-category">
                    <span className="category-badge">{category}</span>
                </div>

                {/* Title */}
                <h1 className="hero-title">{title}</h1>

                {/* Meta Information */}
                <div className="hero-meta">
                    <div className="meta-item">
                        <i className="fas fa-user"></i>
                        <span>{author}</span>
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-calendar"></i>
                        <span>{formattedDate}</span>
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{readingTime} min lectura</span>
                    </div>
                </div>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="hero-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <i className="fas fa-chevron-down"></i>
            </div>
        </section>
    );
}
