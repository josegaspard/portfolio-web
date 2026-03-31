'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { sanitizeHtml } from '@/utils/sanitize';
import { logger } from '@/utils/logger';
import './Portfolio.css';

interface Project {
    id: string;
    slug: string;
    title: string;
    category: 'seo' | 'programming' | 'growth' | string;
    categoryKey: string;
    image: string;
    link: string;
    detailUrl: string;
}

export default function Portfolio() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function loadPortfolio() {
            try {
                const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
                const res = await fetch(`${API_URL}/content/portfolio`, {
                    cache: 'no-store'
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();

                if (data && data.length > 0) {
                    const mapped: Project[] = data
                        .filter((item: any) => item.status === 'published')
                        .map((item: any) => {
                            // Determinar categoría basada en el campo category
                            let category = 'growth';
                            const cat = item.category.toLowerCase();
                            if (cat.includes('seo') || cat.includes('crecimiento')) {
                                category = 'seo';
                            } else if (cat.includes('desarrollo') || cat.includes('programación') || cat.includes('programming')) {
                                category = 'programming';
                            }

                            return {
                                id: item.id.toString(),
                                slug: item.slug,
                                title: item.title,
                                category,
                                categoryKey: item.category,
                                image: item.portfolioData?.thumbnail || item.coverImage || '/img/placeholder.png',
                                link: item.portfolioData?.liveUrl || '#',
                                detailUrl: `/portafolio/${item.slug}`
                            };
                        });

                    setProjects(mapped);
                } else {
                    setProjects([]);
                }
            } catch (err) {
                logger.error('Failed to load portfolio', err, 'Portfolio.loadPortfolio');
                setError(true);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        }
        loadPortfolio();
    }, []);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    // Limitar a 6 proyectos en el home
    const displayedProjects = filteredProjects.slice(0, 6);
    const hasMoreProjects = filteredProjects.length > 6;

    return (
        <section className="section" id="portfolio">
            <div className="container">
                <h2 className="section-title-2line">
                    <span className="title-line-white">Mi</span>
                    <span className="title-line-gradient"> Portafolio</span>
                </h2>
                <p className="text-xl text-gray-400" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t('portfolio_subtitle')) }}></p>

                <div className="portfolio-filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(t('filter_all')) }}>
                    </button>
                    <button
                        className={`filter-btn ${filter === 'seo' ? 'active' : ''}`}
                        onClick={() => setFilter('seo')}
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(t('filter_seo')) }}>
                    </button>
                    <button
                        className={`filter-btn ${filter === 'programming' ? 'active' : ''}`}
                        onClick={() => setFilter('programming')}
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(t('filter_programming')) }}>
                    </button>
                    <button
                        className={`filter-btn ${filter === 'strategy' ? 'active' : ''}`}
                        onClick={() => setFilter('strategy')}
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(t('filter_strategy')) }}>
                    </button>
                    <button
                        className={`filter-btn ${filter === 'growth' ? 'active' : ''}`}
                        onClick={() => setFilter('growth')}
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(t('filter_growth')) }}>
                    </button>
                </div>

                {loading && (
                    <div className="portfolio-loading">
                        <i className="fas fa-spinner fa-spin"></i>
                        <p>Cargando proyectos...</p>
                    </div>
                )}

                {error && !loading && (
                    <div className="portfolio-error">
                        <i className="fas fa-exclamation-triangle"></i>
                        <p>Error al cargar los proyectos. Por favor, intenta de nuevo más tarde.</p>
                    </div>
                )}

                {!loading && !error && displayedProjects.length === 0 && (
                    <div className="portfolio-empty">
                        <i className="fas fa-folder-open"></i>
                        <p>No hay proyectos disponibles en esta categoría.</p>
                    </div>
                )}

                {!loading && !error && displayedProjects.length > 0 && (
                    <>
                        <div className="portfolio-grid" role="list">
                            {displayedProjects.map((project, i) => (
                                <article
                                    key={project.id}
                                    className="portfolio-item"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                    itemScope
                                    itemType="https://schema.org/CreativeWork"
                                    role="listitem"
                                >
                                    <div className="portfolio-image">
                                        <img
                                            src={project.image}
                                            alt={`Proyecto ${project.title} - ${project.categoryKey}`}
                                            loading="lazy"
                                            itemProp="image"
                                            width="600"
                                            height="400"
                                        />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-actions">
                                                <Link
                                                    href={project.detailUrl}
                                                    className="btn-view-details"
                                                    title={`Ver detalles de ${project.title}`}
                                                    aria-label={`Ver detalles del proyecto ${project.title}`}
                                                >
                                                    <i className="fas fa-arrow-right"></i>
                                                    <span>Ver Detalles</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-info">
                                        <span className="portfolio-category" itemProp="genre">
                                            {project.categoryKey}
                                        </span>
                                        <h3 className="portfolio-name" itemProp="name">{project.title}</h3>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Botón Ver Todos los Proyectos */}
                        {(hasMoreProjects || filter !== 'all') && (
                            <div className="portfolio-view-all">
                                <Link href="/portafolio" className="btn-view-all">
                                    Ver Todos los Proyectos
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
