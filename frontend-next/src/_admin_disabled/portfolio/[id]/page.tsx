'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { logger } from '@/utils/logger';
import './editor.css';

interface ProjectData {
    title: string;
    slug: string;
    category: string;
    status: 'draft' | 'published';
    blocks: string;
    portfolioData: {
        client: string;
        shortDescription: string;
        heroImage: string;
        thumbnail: string;
        gallery: string[];
        results: Array<{
            metric: string;
            value: string;
            unit: string;
            label: string;
        }>;
        features: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
        technologies: Array<{
            name: string;
            icon: string;
            category: string;
        }>;
        challenges: Array<{
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
    seo: {
        metaTitle: string;
        metaDescription: string;
        keywords: string;
    };
}

export default function ProjectEditorPage() {
    const router = useRouter();
    const params = useParams();
    const isNew = params.id === 'new' || params.id === 'new-project';

    const [project, setProject] = useState<ProjectData>({
        title: '',
        slug: '',
        category: 'SEO y Crecimiento',
        status: 'draft',
        blocks: '',
        portfolioData: {
            client: '',
            shortDescription: '',
            heroImage: '',
            thumbnail: '',
            gallery: [],
            results: [],
            features: [],
            technologies: [],
            challenges: [],
            liveUrl: '',
            caseStudyUrl: '',
        },
        seo: {
            metaTitle: '',
            metaDescription: '',
            keywords: '',
        },
    });

    const [saving, setSaving] = useState(false);
    const [activeSection, setActiveSection] = useState('basic');

    useEffect(() => {
        if (!isNew) {
            loadProject();
        }
    }, []);

    const loadProject = async () => {
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            const res = await fetch(`${API_URL}/content/${params.id}`);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setProject(data);
        } catch (error) {
            logger.error('Failed to load project', error, 'PortfolioProjectEditor.loadProject');
            alert('Error al cargar el proyecto');
        }
    };

    // Validación de campos requeridos
    const validateProject = (): string | null => {
        if (!project.title.trim()) return 'El título es requerido';
        if (!project.slug.trim()) return 'El slug es requerido';
        if (!project.portfolioData.client.trim()) return 'El cliente es requerido';
        if (!project.portfolioData.shortDescription.trim()) return 'La descripción corta es requerida';
        if (!project.portfolioData.heroImage.trim()) return 'La imagen hero es requerida';
        if (!project.portfolioData.thumbnail.trim()) return 'El thumbnail es requerido';
        return null;
    };

    const handleSave = async () => {
        // Validar antes de guardar
        const error = validateProject();
        if (error) {
            alert(error);
            return;
        }

        setSaving(true);
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            const url = isNew
                ? `${API_URL}/content`
                : `${API_URL}/content/${params.id}`;

            const method = isNew ? 'POST' : 'PUT';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...project,
                    type: 'portfolio',
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            if (res.ok) {
                const data = await res.json();
                if (isNew) {
                    router.push(`/admin/portfolio/${data.id}`);
                }
                alert('Proyecto guardado exitosamente');
            }
        } catch (error) {
            logger.error('Failed to save project', error, 'PortfolioProjectEditor.handleSave');
            alert('Error al guardar el proyecto. Por favor intenta de nuevo.');
        } finally {
            setSaving(false);
        }
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    const handleTitleChange = (title: string) => {
        setProject({
            ...project,
            title,
            slug: generateSlug(title),
        });
    };

    // Repetidor: Agregar resultado
    const addResult = () => {
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                results: [
                    ...project.portfolioData.results,
                    { metric: '', value: '', unit: '', label: '' },
                ],
            },
        });
    };

    // Repetidor: Eliminar resultado
    const removeResult = (index: number) => {
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                results: project.portfolioData.results.filter((_, i) => i !== index),
            },
        });
    };

    // Repetidor: Actualizar resultado
    const updateResult = (index: number, field: string, value: string) => {
        const newResults = [...project.portfolioData.results];
        newResults[index] = { ...newResults[index], [field]: value };
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                results: newResults,
            },
        });
    };

    // Similar functions for features, technologies, challenges...
    const addFeature = () => {
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                features: [
                    ...project.portfolioData.features,
                    { icon: '', title: '', description: '' },
                ],
            },
        });
    };

    const removeFeature = (index: number) => {
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                features: project.portfolioData.features.filter((_, i) => i !== index),
            },
        });
    };

    const updateFeature = (index: number, field: string, value: string) => {
        const newFeatures = [...project.portfolioData.features];
        newFeatures[index] = { ...newFeatures[index], [field]: value };
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                features: newFeatures,
            },
        });
    };

    const addTechnology = () => {
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                technologies: [
                    ...project.portfolioData.technologies,
                    { name: '', icon: '', category: 'Frontend' },
                ],
            },
        });
    };

    const removeTechnology = (index: number) => {
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                technologies: project.portfolioData.technologies.filter((_, i) => i !== index),
            },
        });
    };

    const updateTechnology = (index: number, field: string, value: string) => {
        const newTech = [...project.portfolioData.technologies];
        newTech[index] = { ...newTech[index], [field]: value };
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                technologies: newTech,
            },
        });
    };

    const addChallenge = () => {
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                challenges: [
                    ...project.portfolioData.challenges,
                    { challenge: '', solution: '' },
                ],
            },
        });
    };

    const removeChallenge = (index: number) => {
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                challenges: project.portfolioData.challenges.filter((_, i) => i !== index),
            },
        });
    };

    const updateChallenge = (index: number, field: string, value: string) => {
        const newChallenges = [...project.portfolioData.challenges];
        newChallenges[index] = { ...newChallenges[index], [field]: value };
        setProject({
            ...project,
            portfolioData: {
                ...project.portfolioData,
                challenges: newChallenges,
            },
        });
    };

    return (
        <div className="project-editor">
            {/* Header */}
            <div className="editor-header">
                <div>
                    <h2>{isNew ? 'Nuevo Proyecto' : 'Editar Proyecto'}</h2>
                    <p>Completa toda la información del proyecto</p>
                </div>
                <div className="header-actions">
                    <button onClick={() => router.push('/admin/portfolio')} className="btn-cancel">
                        Cancelar
                    </button>
                    <button onClick={handleSave} disabled={saving} className="btn-save">
                        {saving ? 'Guardando...' : 'Guardar Proyecto'}
                    </button>
                </div>
            </div>

            <div className="editor-layout">
                {/* Sidebar */}
                <div className="editor-sidebar">
                    <div className="sidebar-nav">
                        <button
                            className={activeSection === 'basic' ? 'active' : ''}
                            onClick={() => setActiveSection('basic')}
                        >
                            <i className="fas fa-info-circle"></i> Información Básica
                        </button>
                        <button
                            className={activeSection === 'description' ? 'active' : ''}
                            onClick={() => setActiveSection('description')}
                        >
                            <i className="fas fa-align-left"></i> Descripción
                        </button>
                        <button
                            className={activeSection === 'images' ? 'active' : ''}
                            onClick={() => setActiveSection('images')}
                        >
                            <i className="fas fa-images"></i> Imágenes
                        </button>
                        <button
                            className={activeSection === 'results' ? 'active' : ''}
                            onClick={() => setActiveSection('results')}
                        >
                            <i className="fas fa-chart-line"></i> Resultados
                        </button>
                        <button
                            className={activeSection === 'features' ? 'active' : ''}
                            onClick={() => setActiveSection('features')}
                        >
                            <i className="fas fa-star"></i> Features
                        </button>
                        <button
                            className={activeSection === 'tech' ? 'active' : ''}
                            onClick={() => setActiveSection('tech')}
                        >
                            <i className="fas fa-code"></i> Tecnologías
                        </button>
                        <button
                            className={activeSection === 'challenges' ? 'active' : ''}
                            onClick={() => setActiveSection('challenges')}
                        >
                            <i className="fas fa-puzzle-piece"></i> Desafíos
                        </button>
                        <button
                            className={activeSection === 'testimonial' ? 'active' : ''}
                            onClick={() => setActiveSection('testimonial')}
                        >
                            <i className="fas fa-quote-right"></i> Testimonial
                        </button>
                        <button
                            className={activeSection === 'links' ? 'active' : ''}
                            onClick={() => setActiveSection('links')}
                        >
                            <i className="fas fa-link"></i> Links
                        </button>
                        <button
                            className={activeSection === 'seo' ? 'active' : ''}
                            onClick={() => setActiveSection('seo')}
                        >
                            <i className="fas fa-search"></i> SEO
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="editor-content">
                    {/* Sección: Información Básica */}
                    {activeSection === 'basic' && (
                        <div className="editor-section">
                            <h3>Información Básica</h3>

                            <div className="form-group">
                                <label>Título del Proyecto *</label>
                                <input
                                    type="text"
                                    value={project.title}
                                    onChange={(e) => handleTitleChange(e.target.value)}
                                    placeholder="Ej: Optimización SEO E-commerce TechStore"
                                />
                            </div>

                            <div className="form-group">
                                <label>Slug (URL) *</label>
                                <input
                                    type="text"
                                    value={project.slug}
                                    onChange={(e) => setProject({ ...project, slug: e.target.value })}
                                    placeholder="ecommerce-seo-techstore"
                                />
                                <small>URL: /portafolio/{project.slug}</small>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Cliente *</label>
                                    <input
                                        type="text"
                                        value={project.portfolioData.client}
                                        onChange={(e) => setProject({
                                            ...project,
                                            portfolioData: { ...project.portfolioData, client: e.target.value }
                                        })}
                                        placeholder="TechStore México"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Categoría *</label>
                                    <select
                                        value={project.category}
                                        onChange={(e) => setProject({ ...project, category: e.target.value })}
                                    >
                                        <option value="SEO y Crecimiento">SEO y Crecimiento</option>
                                        <option value="Desarrollo Web">Desarrollo Web</option>
                                        <option value="Full-Stack">Full-Stack</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Estado *</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="draft"
                                            checked={project.status === 'draft'}
                                            onChange={(e) => setProject({ ...project, status: e.target.value as 'draft' })}
                                        />
                                        Borrador
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="published"
                                            checked={project.status === 'published'}
                                            onChange={(e) => setProject({ ...project, status: e.target.value as 'published' })}
                                        />
                                        Publicado
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Sección: Descripción */}
                    {activeSection === 'description' && (
                        <div className="editor-section">
                            <h3>Descripción del Proyecto</h3>

                            <div className="form-group">
                                <label>Descripción Corta * (max 150 caracteres)</label>
                                <textarea
                                    value={project.portfolioData.shortDescription}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: { ...project.portfolioData, shortDescription: e.target.value }
                                    })}
                                    placeholder="Incremento del 400% en tráfico orgánico mediante estrategia SEO integral"
                                    maxLength={150}
                                    rows={3}
                                />
                                <small>{project.portfolioData.shortDescription.length}/150 caracteres</small>
                            </div>

                            <div className="form-group">
                                <label>Descripción Completa (Markdown)</label>
                                <textarea
                                    value={project.blocks}
                                    onChange={(e) => setProject({ ...project, blocks: e.target.value })}
                                    placeholder="# Caso de Éxito&#10;&#10;TechStore México necesitaba..."
                                    rows={15}
                                />
                                <small>Puedes usar Markdown para formatear el texto</small>
                            </div>
                        </div>
                    )}

                    {/* Sección: Imágenes */}
                    {activeSection === 'images' && (
                        <div className="editor-section">
                            <h3>Imágenes del Proyecto</h3>

                            <div className="form-group">
                                <label>Hero Image (Principal) *</label>
                                <input
                                    type="text"
                                    value={project.portfolioData.heroImage}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: { ...project.portfolioData, heroImage: e.target.value }
                                    })}
                                    placeholder="/img/portfolio/project-hero.webp"
                                />
                                {project.portfolioData.heroImage && (
                                    <div className="image-preview">
                                        <img src={project.portfolioData.heroImage} alt="Hero" />
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Thumbnail (Miniatura) *</label>
                                <input
                                    type="text"
                                    value={project.portfolioData.thumbnail}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: { ...project.portfolioData, thumbnail: e.target.value }
                                    })}
                                    placeholder="/img/portfolio/project-thumb.webp"
                                />
                                {project.portfolioData.thumbnail && (
                                    <div className="image-preview small">
                                        <img src={project.portfolioData.thumbnail} alt="Thumbnail" />
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Galería (URLs separadas por coma)</label>
                                <textarea
                                    value={project.portfolioData.gallery.join(', ')}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: {
                                            ...project.portfolioData,
                                            gallery: e.target.value.split(',').map(url => url.trim()).filter(url => url)
                                        }
                                    })}
                                    placeholder="/img/portfolio/project-1.webp, /img/portfolio/project-2.webp"
                                    rows={3}
                                />
                            </div>
                        </div>
                    )}

                    {/* Sección: Resultados (Repetidor) */}
                    {activeSection === 'results' && (
                        <div className="editor-section">
                            <div className="section-header">
                                <h3>Resultados Cuantificables</h3>
                                <button onClick={addResult} className="btn-add">
                                    <i className="fas fa-plus"></i> Agregar Resultado
                                </button>
                            </div>

                            {project.portfolioData.results.map((result, index) => (
                                <div key={index} className="repeater-item">
                                    <div className="repeater-header">
                                        <span>Resultado #{index + 1}</span>
                                        <button onClick={() => removeResult(index)} className="btn-remove">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>

                                    <div className="form-group">
                                        <label>Métrica</label>
                                        <input
                                            type="text"
                                            value={result.metric}
                                            onChange={(e) => updateResult(index, 'metric', e.target.value)}
                                            placeholder="+400% Tráfico Orgánico"
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Valor</label>
                                            <input
                                                type="text"
                                                value={result.value}
                                                onChange={(e) => updateResult(index, 'value', e.target.value)}
                                                placeholder="400"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Unidad</label>
                                            <input
                                                type="text"
                                                value={result.unit}
                                                onChange={(e) => updateResult(index, 'unit', e.target.value)}
                                                placeholder="%"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Label</label>
                                        <input
                                            type="text"
                                            value={result.label}
                                            onChange={(e) => updateResult(index, 'label', e.target.value)}
                                            placeholder="Incremento en tráfico"
                                        />
                                    </div>
                                </div>
                            ))}

                            {project.portfolioData.results.length === 0 && (
                                <div className="empty-repeater">
                                    <p>No hay resultados agregados</p>
                                    <button onClick={addResult} className="btn-add">
                                        Agregar Primer Resultado
                                    </button>
                                </div>
                            )}
                        </div>
                    )}


                    {/* Sección: Features (Repetidor) */}
                    {activeSection === 'features' && (
                        <div className="editor-section">
                            <div className="section-header">
                                <h3>Features del Proyecto</h3>
                                <button onClick={addFeature} className="btn-add">
                                    <i className="fas fa-plus"></i> Agregar Feature
                                </button>
                            </div>

                            {project.portfolioData.features.map((feature, index) => (
                                <div key={index} className="repeater-item">
                                    <div className="repeater-header">
                                        <span>Feature #{index + 1}</span>
                                        <button onClick={() => removeFeature(index)} className="btn-remove">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>

                                    <div className="form-group">
                                        <label>Icono (Font Awesome)</label>
                                        <input
                                            type="text"
                                            value={feature.icon}
                                            onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                                            placeholder="fas fa-chart-line"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Título</label>
                                        <input
                                            type="text"
                                            value={feature.title}
                                            onChange={(e) => updateFeature(index, 'title', e.target.value)}
                                            placeholder="SEO Técnico Avanzado"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Descripción</label>
                                        <textarea
                                            value={feature.description}
                                            onChange={(e) => updateFeature(index, 'description', e.target.value)}
                                            placeholder="Implementación completa de Core Web Vitals..."
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            ))}

                            {project.portfolioData.features.length === 0 && (
                                <div className="empty-repeater">
                                    <p>No hay features agregados</p>
                                    <button onClick={addFeature} className="btn-add">
                                        Agregar Primer Feature
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Sección: Tecnologías (Repetidor) */}
                    {activeSection === 'tech' && (
                        <div className="editor-section">
                            <div className="section-header">
                                <h3>Stack Tecnológico</h3>
                                <button onClick={addTechnology} className="btn-add">
                                    <i className="fas fa-plus"></i> Agregar Tecnología
                                </button>
                            </div>

                            {project.portfolioData.technologies.map((tech, index) => (
                                <div key={index} className="repeater-item">
                                    <div className="repeater-header">
                                        <span>Tecnología #{index + 1}</span>
                                        <button onClick={() => removeTechnology(index)} className="btn-remove">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>

                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input
                                            type="text"
                                            value={tech.name}
                                            onChange={(e) => updateTechnology(index, 'name', e.target.value)}
                                            placeholder="Next.js"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Icono/Logo (URL o clase)</label>
                                        <input
                                            type="text"
                                            value={tech.icon}
                                            onChange={(e) => updateTechnology(index, 'icon', e.target.value)}
                                            placeholder="devicon-nextjs-plain"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Categoría</label>
                                        <select
                                            value={tech.category}
                                            onChange={(e) => updateTechnology(index, 'category', e.target.value)}
                                        >
                                            <option value="Frontend">Frontend</option>
                                            <option value="Backend">Backend</option>
                                            <option value="Database">Database</option>
                                            <option value="Tools">Tools</option>
                                            <option value="DevOps">DevOps</option>
                                        </select>
                                    </div>
                                </div>
                            ))}

                            {project.portfolioData.technologies.length === 0 && (
                                <div className="empty-repeater">
                                    <p>No hay tecnologías agregadas</p>
                                    <button onClick={addTechnology} className="btn-add">
                                        Agregar Primera Tecnología
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Sección: Desafíos (Repetidor) */}
                    {activeSection === 'challenges' && (
                        <div className="editor-section">
                            <div className="section-header">
                                <h3>Desafíos y Soluciones</h3>
                                <button onClick={addChallenge} className="btn-add">
                                    <i className="fas fa-plus"></i> Agregar Desafío
                                </button>
                            </div>

                            {project.portfolioData.challenges.map((item, index) => (
                                <div key={index} className="repeater-item">
                                    <div className="repeater-header">
                                        <span>Desafío #{index + 1}</span>
                                        <button onClick={() => removeChallenge(index)} className="btn-remove">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>

                                    <div className="form-group">
                                        <label>Desafío</label>
                                        <textarea
                                            value={item.challenge}
                                            onChange={(e) => updateChallenge(index, 'challenge', e.target.value)}
                                            placeholder="Bajo rendimiento en mobile..."
                                            rows={3}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Solución</label>
                                        <textarea
                                            value={item.solution}
                                            onChange={(e) => updateChallenge(index, 'solution', e.target.value)}
                                            placeholder="Implementamos lazy loading y optimización de imágenes..."
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            ))}

                            {project.portfolioData.challenges.length === 0 && (
                                <div className="empty-repeater">
                                    <p>No hay desafíos agregados</p>
                                    <button onClick={addChallenge} className="btn-add">
                                        Agregar Primer Desafío
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Sección: Testimonial */}
                    {activeSection === 'testimonial' && (
                        <div className="editor-section">
                            <h3>Testimonial del Cliente</h3>

                            <div className="form-group">
                                <label>Quote</label>
                                <textarea
                                    value={project.portfolioData.testimonial?.quote || ''}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: {
                                            ...project.portfolioData,
                                            testimonial: {
                                                ...project.portfolioData.testimonial,
                                                quote: e.target.value,
                                                author: project.portfolioData.testimonial?.author || '',
                                                position: project.portfolioData.testimonial?.position || '',
                                                company: project.portfolioData.testimonial?.company || '',
                                            }
                                        }
                                    })}
                                    placeholder="Resultados increíbles en solo 3 meses..."
                                    rows={4}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Autor</label>
                                    <input
                                        type="text"
                                        value={project.portfolioData.testimonial?.author || ''}
                                        onChange={(e) => setProject({
                                            ...project,
                                            portfolioData: {
                                                ...project.portfolioData,
                                                testimonial: {
                                                    ...project.portfolioData.testimonial,
                                                    author: e.target.value,
                                                    quote: project.portfolioData.testimonial?.quote || '',
                                                    position: project.portfolioData.testimonial?.position || '',
                                                    company: project.portfolioData.testimonial?.company || '',
                                                }
                                            }
                                        })}
                                        placeholder="Juan Pérez"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Posición</label>
                                    <input
                                        type="text"
                                        value={project.portfolioData.testimonial?.position || ''}
                                        onChange={(e) => setProject({
                                            ...project,
                                            portfolioData: {
                                                ...project.portfolioData,
                                                testimonial: {
                                                    ...project.portfolioData.testimonial,
                                                    position: e.target.value,
                                                    quote: project.portfolioData.testimonial?.quote || '',
                                                    author: project.portfolioData.testimonial?.author || '',
                                                    company: project.portfolioData.testimonial?.company || '',
                                                }
                                            }
                                        })}
                                        placeholder="CEO"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Empresa</label>
                                <input
                                    type="text"
                                    value={project.portfolioData.testimonial?.company || ''}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: {
                                            ...project.portfolioData,
                                            testimonial: {
                                                ...project.portfolioData.testimonial,
                                                company: e.target.value,
                                                quote: project.portfolioData.testimonial?.quote || '',
                                                author: project.portfolioData.testimonial?.author || '',
                                                position: project.portfolioData.testimonial?.position || '',
                                            }
                                        }
                                    })}
                                    placeholder="TechStore"
                                />
                            </div>

                            <div className="form-group">
                                <label>Avatar (URL)</label>
                                <input
                                    type="text"
                                    value={project.portfolioData.testimonial?.avatar || ''}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: {
                                            ...project.portfolioData,
                                            testimonial: {
                                                ...project.portfolioData.testimonial,
                                                avatar: e.target.value,
                                                quote: project.portfolioData.testimonial?.quote || '',
                                                author: project.portfolioData.testimonial?.author || '',
                                                position: project.portfolioData.testimonial?.position || '',
                                                company: project.portfolioData.testimonial?.company || '',
                                            }
                                        }
                                    })}
                                    placeholder="/img/avatars/client.jpg"
                                />
                            </div>
                        </div>
                    )}

                    {/* Sección: Links */}
                    {activeSection === 'links' && (
                        <div className="editor-section">
                            <h3>Links del Proyecto</h3>

                            <div className="form-group">
                                <label>URL en Vivo</label>
                                <input
                                    type="url"
                                    value={project.portfolioData.liveUrl || ''}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: { ...project.portfolioData, liveUrl: e.target.value }
                                    })}
                                    placeholder="https://techstore.mx"
                                />
                            </div>

                            <div className="form-group">
                                <label>URL Caso de Estudio</label>
                                <input
                                    type="url"
                                    value={project.portfolioData.caseStudyUrl || ''}
                                    onChange={(e) => setProject({
                                        ...project,
                                        portfolioData: { ...project.portfolioData, caseStudyUrl: e.target.value }
                                    })}
                                    placeholder="https://josegaspard.dev/caso-estudio/techstore"
                                />
                            </div>
                        </div>
                    )}

                    {/* Sección: SEO */}
                    {activeSection === 'seo' && (
                        <div className="editor-section">
                            <h3>SEO y Meta Tags</h3>

                            <div className="form-group">
                                <label>Meta Title</label>
                                <input
                                    type="text"
                                    value={project.seo.metaTitle}
                                    onChange={(e) => setProject({
                                        ...project,
                                        seo: { ...project.seo, metaTitle: e.target.value }
                                    })}
                                    placeholder="Caso de Éxito: SEO E-commerce +400% | José Gaspard"
                                    maxLength={60}
                                />
                                <small>{project.seo.metaTitle.length}/60 caracteres</small>
                            </div>

                            <div className="form-group">
                                <label>Meta Description</label>
                                <textarea
                                    value={project.seo.metaDescription}
                                    onChange={(e) => setProject({
                                        ...project,
                                        seo: { ...project.seo, metaDescription: e.target.value }
                                    })}
                                    placeholder="Descubre cómo incrementamos el tráfico orgánico en 400%..."
                                    maxLength={160}
                                    rows={3}
                                />
                                <small>{project.seo.metaDescription.length}/160 caracteres</small>
                            </div>

                            <div className="form-group">
                                <label>Keywords (separadas por coma)</label>
                                <input
                                    type="text"
                                    value={project.seo.keywords}
                                    onChange={(e) => setProject({
                                        ...project,
                                        seo: { ...project.seo, keywords: e.target.value }
                                    })}
                                    placeholder="seo, ecommerce, caso de éxito, marketing digital"
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
