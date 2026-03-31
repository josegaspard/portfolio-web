'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { contentService, Content } from '@/services/contentService';
import { logger } from '@/utils/logger';
import './content-list.css';

export default function ContentList() {
    const [contents, setContents] = useState<Content[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        setLoading(true);
        try {
            const data = await contentService.getAll();

            // ✅✅✅ FILTRO ABSOLUTO - SOLO POST Y PAGE ✅✅✅
            // NO PORTFOLIO, NUNCA, JAMÁS
            const filteredData = data.filter((item: Content) => {
                const type = item.type?.toLowerCase();
                return type === 'post' || type === 'page';
            });

            console.log('🔍 FILTRO APLICADO:');
            console.log('Total items:', data.length);
            console.log('Items filtrados (solo post/page):', filteredData.length);
            console.log('Items mostrados:', filteredData.map(i => `${i.title} (${i.type})`));

            setContents(filteredData);
        } catch (error) {
            logger.error('Failed to load content', error, 'ContentList.loadContent');
            setContents([]);
        }
        setLoading(false);
    };

    const deleteContent = async (id: number) => {
        if (confirm('¿Estás seguro de que deseas eliminar este contenido?')) {
            const success = await contentService.delete(id);
            if (success) {
                setContents(contents.filter(c => c.id !== id));
            } else {
                alert('Ocurrió un error al eliminar el contenido.');
            }
        }
    };


    return (
        <div className="admin-content-list">
            <div className="page-header">
                <div>
                    <h2>Pages & Posts</h2>
                    <p className="subtitle">Manage your website content (ONLY pages and blog posts)</p>
                </div>
                <Link href="/admin/content/new" className="btn-primary">
                    <i className="fas fa-plus"></i> Create New
                </Link>
            </div>

            <div className="content-card">
                {loading ? (
                    <div className="skeleton-placeholder">Loading content...</div>
                ) : (
                    <div className="table-responsive">
                        {contents.length > 0 ? (
                            <table className="content-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '40%' }}>Title</th>
                                        <th style={{ width: '20%' }}>Type</th>
                                        <th style={{ width: '20%' }}>Status</th>
                                        <th style={{ width: '20%' }} className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contents.map(item => (
                                        <tr key={item.id} className="table-row">
                                            <td>
                                                <div className="item-title">{item.title}</div>
                                                <div className="item-meta">/{item.slug}</div>
                                            </td>
                                            <td><span className="type-badge">{item.type}</span></td>
                                            <td><span className={`status-badge ${item.status}`}>{item.status}</span></td>
                                            <td className="text-right">
                                                <div className="actions-group">
                                                    <Link href={`/admin/content/edit/${item.id}`} className="btn-icon" title="Edit">
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                    <button className="btn-icon delete" onClick={() => deleteContent(item.id)} title="Delete">
                                                        <i className="fas fa-trash-alt"></i>
                                                    </button>
                                                    <a href={item.type === 'post' ? `/blog/${item.slug}` : `/${item.slug}`} target="_blank" className="btn-icon" title="View">
                                                        <i className="fas fa-external-link-alt"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="empty-state">
                                <div className="empty-icon"><i className="fas fa-file-alt"></i></div>
                                <h3>No content yet</h3>
                                <p>Get started by creating your first page or post.</p>
                                <Link href="/admin/content/new" className="btn-primary-outline">Create Content</Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
