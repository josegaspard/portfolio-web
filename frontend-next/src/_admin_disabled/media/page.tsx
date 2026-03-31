'use client';

import React, { useState, useEffect } from 'react';
import { logger } from '@/utils/logger';
import '../admin-forms.css';

export default function MediaManager() {
    const [mediaItems, setMediaItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        async function fetchMedia() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/media`);
                if (res.ok) {
                    const data = await res.json();
                    setMediaItems(data);
                }
            } catch (error) {
                logger.error('Failed to fetch media', error, 'MediaManager.fetchMedia');
            } finally {
                setLoading(false);
            }
        }
        fetchMedia();
    }, []);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            // Convert file to base64 for simple storage
            const reader = new FileReader();
            reader.onload = async (event) => {
                const base64 = event.target?.result as string;
                const token = localStorage.getItem('access_token');

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/media`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        filename: file.name,
                        url: base64,
                        mimetype: file.type,
                        size: file.size
                    })
                });

                if (res.ok) {
                    const newMedia = await res.json();
                    setMediaItems([newMedia, ...mediaItems]);
                    alert('Archivo subido correctamente');
                } else {
                    alert('Error al subir el archivo');
                }
            };
            reader.readAsDataURL(file);
        } catch (error) {
            logger.error('Failed to upload file', error, 'MediaManager.handleUpload');
            alert('Error al subir el archivo');
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm('¿Eliminar este archivo?')) {
            try {
                const token = localStorage.getItem('access_token');
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/media/${id}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    setMediaItems(mediaItems.filter(item => item.id !== id));
                }
            } catch (error) {
                logger.error('Failed to delete media', error, 'MediaManager.handleDelete');
            }
        }
    };

    return (
        <div className="admin-media-manager">
            <div className="page-header">
                <div>
                    <h2>Gestor de Medios</h2>
                    <p className="subtitle">Administra tus imágenes y archivos</p>
                </div>
                <button className="btn-primary" onClick={() => fileInputRef.current?.click()}>
                    <i className="fas fa-upload"></i> Subir Archivo
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    style={{ display: 'none' }}
                />
            </div>

            <div className="content-card">
                {loading ? (
                    <p>Cargando medios...</p>
                ) : mediaItems.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon"><i className="fas fa-images"></i></div>
                        <h3>No hay archivos aún</h3>
                        <p>Comienza subiendo imágenes para tus artículos y páginas.</p>
                    </div>
                ) : (
                    <div className="media-grid">
                        {mediaItems.map(item => (
                            <div key={item.id} className="media-item card">
                                <img src={item.url} alt={item.filename} />
                                <div className="media-info">
                                    <span>{item.filename}</span>
                                    <button onClick={() => handleDelete(item.id)} className="btn-delete-sm">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
