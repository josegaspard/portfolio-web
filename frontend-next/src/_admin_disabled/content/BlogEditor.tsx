'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { contentService, BlogPost, Content, mapToBlogPost } from '@/services/contentService';
import { logger } from '@/utils/logger';
import './blog-editor.css';

export default function BlogEditor() {
    const params = useParams();
    const router = useRouter();
    const contentEditorRef = useRef<HTMLDivElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newTag, setNewTag] = useState('');

    const [post, setPost] = useState<BlogPost>({
        id: 0,
        title: '',
        slug: '',
        blocks: '',
        coverImage: '',
        status: 'draft',
        type: 'post',
        category: 'seo',
        tags: [],
        readingTime: 5,
        author: 'José Gaspard',
        layout: '3-column',
        seo: {
            metaTitle: '',
            metaDescription: '',
            keywords: '',
            canonical: '',
            noIndex: false
        }
    });


    useEffect(() => {
        const id = params.id;
        if (id) {
            loadPost(Number(id));
        }
    }, [params.id]);

    const loadPost = async (id: number) => {
        const data = await contentService.getById(id);
        if (data) {
            setPost(mapToBlogPost(data));
            setIsEditing(true);
            if (contentEditorRef.current) {
                contentEditorRef.current.innerHTML = data.blocks;
            }
        }
    };

    const execCommand = (command: string, value?: string) => {
        document.execCommand(command, false, value);
        contentEditorRef.current?.focus();
    };

    const insertLink = () => {
        const url = prompt('Ingresa la URL:');
        if (url) execCommand('createLink', url);
    };

    const insertImage = () => {
        const url = prompt('Ingresa la URL de la imagen:');
        if (url) execCommand('insertImage', url);
    };

    const updateContent = () => {
        if (contentEditorRef.current) {
            const html = contentEditorRef.current.innerHTML;
            const text = contentEditorRef.current.innerText;
            const words = text.trim().split(/\s+/).length;
            setPost(prev => ({
                ...prev,
                blocks: html,
                readingTime: Math.ceil(words / 200)
            }));
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPost(prev => ({ ...prev, coverImage: event.target?.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const addTag = () => {
        if (newTag.trim() && !post.tags.includes(newTag.trim())) {
            setPost(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
            setNewTag('');
        }
    };

    const removeTag = (index: number) => {
        setPost(prev => ({ ...prev, tags: prev.tags.filter((_, i) => i !== index) }));
    };

    const savePost = async (status: 'draft' | 'published') => {
        if (!post.slug) {
            alert('Por favor, ingresa un Slug (URL) válido.');
            return;
        }

        try {
            const updatedPost = {
                ...post,
                status,
                publishedAt: status === 'published' ? new Date().toISOString() : undefined
            };

            let result;
            if (isEditing && post.id) {
                result = await contentService.update(post.id, updatedPost);
            } else {
                result = await contentService.create(updatedPost);
            }

            if (result) {
                alert(`Contenido ${isEditing ? 'actualizado' : 'creado'} correctamente.`);
                router.push('/admin/content');
            } else {
                alert('Ocurrió un error al guardar el contenido.');
            }
        } catch (error) {
            logger.error('Failed to save post', error, 'BlogEditor.savePost');
            alert('Error al conectar con el servidor.');
        }
    };

    const slugify = (text: string) => {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')     // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-')   // Replace multiple - with single -
            .replace(/^-+/, '')       // Trim - from start of text
            .replace(/-+$/, '');      // Trim - from end of text
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setPost(prev => ({
            ...prev,
            title,
            slug: !post.id ? slugify(title) : prev.slug // Only auto-slug for new posts
        }));
    };

    return (
        <div className="editor-container">
            <div className="editor-header">
                <h2>{isEditing ? 'Editar' : 'Crear'} {post.type === 'post' ? 'Artículo' : 'Página'}</h2>
                <div className="header-actions">
                    <button className="btn btn-secondary" onClick={() => savePost('draft')}>
                        <i className="fas fa-save"></i> {isEditing ? 'Actualizar Borrador' : 'Guardar Borrador'}
                    </button>
                    <button className="btn btn-primary" onClick={() => savePost('published')}>
                        <i className="fas fa-paper-plane"></i> {isEditing ? 'Actualizar' : 'Publicar'}
                    </button>
                </div>
            </div>

            <div className="editor-body">
                <main className="editor-main">
                    <input
                        type="text"
                        value={post.title}
                        onChange={handleTitleChange}
                        className="title-input"
                        placeholder="Título..."
                    />

                    <div className="featured-image-section">
                        <label>Imagen Destacada</label>
                        <div className="image-upload-area" onClick={() => imageInputRef.current?.click()}>
                            <input
                                ref={imageInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                            />
                            {!post.coverImage ? (
                                <div className="upload-placeholder">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                    <p>Click para subir imagen</p>
                                </div>
                            ) : (
                                <div className="image-preview">
                                    <img src={post.coverImage} alt="Featured" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="wysiwyg-toolbar">
                        <button onClick={() => execCommand('bold')}><i className="fas fa-bold"></i></button>
                        <button onClick={() => execCommand('italic')}><i className="fas fa-italic"></i></button>
                        <button onClick={() => execCommand('underline')}><i className="fas fa-underline"></i></button>
                        <span className="divider"></span>
                        <button onClick={() => execCommand('formatBlock', 'h2')}>H2</button>
                        <button onClick={() => execCommand('formatBlock', 'h3')}>H3</button>
                        <button onClick={() => execCommand('formatBlock', 'p')}>P</button>
                        <span className="divider"></span>
                        <button onClick={insertLink}><i className="fas fa-link"></i></button>
                        <button onClick={insertImage}><i className="fas fa-image"></i></button>
                    </div>

                    <div
                        ref={contentEditorRef}
                        className="content-editor"
                        contentEditable
                        onInput={updateContent}
                        suppressContentEditableWarning={true}
                    ></div>

                    {/* SEO Meta Card */}
                    <div className="seo-meta-card">
                        <div className="seo-header">
                            <h3><i className="fas fa-search"></i> SEO Avanzado (Meta Data)</h3>
                        </div>
                        <div className="seo-body">
                            <div className="form-group">
                                <label>Título SEO (Title Tag)</label>
                                <input
                                    type="text"
                                    value={post.seo?.metaTitle || ''}
                                    onChange={e => setPost({ ...post, seo: { ...post.seo, metaTitle: e.target.value } })}
                                    className="form-control"
                                    placeholder={post.title || 'Título por defecto'}
                                />
                                <small className="hint">{post.seo?.metaTitle?.length || 0} / 60 caracteres recomendados</small>
                            </div>

                            <div className="form-group">
                                <label>Meta Descripción</label>
                                <textarea
                                    value={post.seo?.metaDescription || ''}
                                    onChange={e => setPost({ ...post, seo: { ...post.seo, metaDescription: e.target.value } })}
                                    className="form-control"
                                    maxLength={160}
                                    rows={3}
                                />
                                <small className="hint">{post.seo?.metaDescription?.length || 0} / 160 caracteres máximos</small>
                            </div>

                            <div className="form-group">
                                <label>Palabras Clave (separadas por coma)</label>
                                <input
                                    type="text"
                                    value={post.seo?.keywords || ''}
                                    onChange={e => setPost({ ...post, seo: { ...post.seo, keywords: e.target.value } })}
                                    className="form-control"
                                    placeholder="seo, nextjs, react"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-grow">
                                    <label>URL Canónica</label>
                                    <input
                                        type="text"
                                        value={post.seo?.canonical || ''}
                                        onChange={e => setPost({ ...post, seo: { ...post.seo, canonical: e.target.value } })}
                                        className="form-control"
                                        placeholder="https://josegaspard.dev/..."
                                    />
                                </div>
                                <div className="form-group checkbox-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={post.seo?.noIndex || false}
                                            onChange={e => setPost({ ...post, seo: { ...post.seo, noIndex: e.target.checked } })}
                                        />
                                        No Index / No Follow
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <aside className="editor-sidebar">
                    <div className="sidebar-section">
                        <h3>Tipo</h3>
                        <select
                            value={post.type}
                            onChange={(e) => setPost({ ...post, type: e.target.value as 'post' | 'page' })}
                            className="form-select"
                        >
                            <option value="post">Artículo (Post)</option>
                            <option value="page">Página (Landing)</option>
                        </select>
                    </div>

                    <div className="sidebar-section">
                        <h3>Slug (URL)</h3>
                        <input
                            type="text"
                            value={post.slug}
                            onChange={(e) => setPost({ ...post, slug: slugify(e.target.value) })}
                            className="form-input"
                            placeholder="url-amigable"
                        />
                    </div>

                    <div className="sidebar-section">
                        <h3>Categoría</h3>
                        <select
                            value={post.category}
                            onChange={(e) => setPost({ ...post, category: e.target.value })}
                            className="form-select"
                        >
                            <option value="seo">SEO Técnico</option>
                            <option value="development">Desarrollo Web</option>
                        </select>
                    </div>

                    <div className="sidebar-section">
                        <h3>Layout</h3>
                        <select
                            value={post.layout || '3-column'}
                            onChange={(e) => setPost({ ...post, layout: e.target.value })}
                            className="form-select"
                        >
                            <option value="1-column">1 Columna</option>
                            <option value="2-column">2 Columnas</option>
                            <option value="3-column">3 Columnas</option>
                        </select>
                    </div>

                    <div className="sidebar-section">
                        <h3>Autor</h3>
                        <input
                            type="text"
                            value={post.author}
                            onChange={(e) => setPost({ ...post, author: e.target.value })}
                            className="form-input"
                            placeholder="Nombre del autor"
                        />
                    </div>

                    <div className="sidebar-section">
                        <h3>Tiempo de Lectura (min)</h3>
                        <input
                            type="number"
                            value={post.readingTime}
                            onChange={(e) => setPost({ ...post, readingTime: Number(e.target.value) })}
                            className="form-input"
                            placeholder="5"
                        />
                    </div>

                    <div className="sidebar-section">
                        <h3>Etiquetas</h3>
                        <div className="tags-input">
                            {post.tags.map((tag, i) => (
                                <span key={i} className="tag">
                                    {tag} <button onClick={() => removeTag(i)}>×</button>
                                </span>
                            ))}
                            <input
                                type="text"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addTag()}
                                placeholder="+"
                                className="tag-input"
                            />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
