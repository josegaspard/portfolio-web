'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { logger } from '@/utils/logger';
import './portfolio.css';

interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    status: string;
    portfolioData?: {
        client?: string;
        thumbnail?: string;
        shortDescription?: string;
    };
    createdAt: string;
    updatedAt: string;
}

export default function PortfolioAdminPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            const res = await fetch(`${API_URL}/content/portfolio`);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setProjects(data);
        } catch (error) {
            logger.error('Failed to load projects', error, 'PortfolioAdminPage.loadProjects');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('¿Estás seguro de eliminar este proyecto?')) return;

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            const res = await fetch(`${API_URL}/content/${id}`, {
                method: 'DELETE',
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            loadProjects();
        } catch (error) {
            logger.error('Failed to delete project', error, 'PortfolioAdminPage.handleDelete');
            alert('Error al eliminar el proyecto');
        }
    };

    if (loading) return <div className="loading">Cargando proyectos...</div>;

    return (
        <div className="portfolio-admin-page">
            <div className="page-header">
                <div>
                    <h2 className="admin-title-gradient"><i className="fas fa-briefcase"></i> Gestión de Proyectos</h2>
                    <p>Administra tu portafolio de proyectos</p>
                </div>
                <Link href="/admin/portfolio/new-project" className="btn-primary">
                    <i className="fas fa-plus"></i> Nuevo Proyecto
                </Link>
            </div>

            <div className="projects-grid">
                {projects.length === 0 ? (
                    <div className="empty-state">
                        <i className="fas fa-folder-open"></i>
                        <p>No hay proyectos aún</p>
                        <Link href="/admin/portfolio/new" className="btn-primary">
                            Crear Primer Proyecto
                        </Link>
                    </div>
                ) : (
                    projects.map((project) => (
                        <div key={project.id} className="project-card">
                            {project.portfolioData?.thumbnail && (
                                <div className="project-thumbnail">
                                    <img src={project.portfolioData.thumbnail} alt={project.title} />
                                </div>
                            )}
                            <div className="project-info">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className={`status-badge ${project.status}`}>
                                        {project.status}
                                    </span>
                                </div>
                                {project.portfolioData?.client && (
                                    <p className="project-client">
                                        <i className="fas fa-building"></i> {project.portfolioData.client}
                                    </p>
                                )}
                                <p className="project-category">
                                    <i className="fas fa-tag"></i> {project.category}
                                </p>
                                {project.portfolioData?.shortDescription && (
                                    <p className="project-description">
                                        {project.portfolioData.shortDescription}
                                    </p>
                                )}
                                <div className="project-actions">
                                    <Link href={`/admin/portfolio/${project.id}`} className="btn-edit">
                                        <i className="fas fa-edit"></i> Editar
                                    </Link>
                                    <Link href={`/portafolio/${project.slug}`} className="btn-view" target="_blank">
                                        <i className="fas fa-eye"></i> Ver
                                    </Link>
                                    <button onClick={() => handleDelete(project.id)} className="btn-delete">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
