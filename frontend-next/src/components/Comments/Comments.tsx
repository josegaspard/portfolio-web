'use client';

import React, { useState, useEffect } from 'react';
import { logger } from '@/utils/logger';
import './Comments.css';

interface Comment {
    id: number;
    authorName: string;
    content: string;
    createdAt: string;
}

export default function Comments({ postId }: { postId: number }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        loadComments();
    }, [postId]);

    const loadComments = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/comments/post/${postId}`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setComments(data);
            } else {
                logger.error('Expected an array of comments, but received unexpected data', data, 'Comments.loadComments');
                setComments([]);
            }
        } catch (error) {
            logger.error('Failed to load comments', error, 'Comments.loadComments');
            setComments([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/comments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    post: { id: postId },
                    authorName: name,
                    authorEmail: email,
                    content
                }),
            });

            if (res.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setContent('');
                // Note: Comments usually require approval, so we don't necessarily reload immediately
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="comments-section">
            <h3 className="section-title">Comunidad ({comments.length})</h3>

            <div className="comment-form-container glass-premium">
                <h4>Deja un comentario</h4>
                <p>Tu dirección de correo no será publicada.</p>
                <form onSubmit={handleSubmit} className="comment-form">
                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="Nombre *"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Escribe tu comentario aquí..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows={5}
                    ></textarea>
                    <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Enviando...' : 'Publicar Comentario'}
                    </button>
                    {status === 'success' && <p className="success-msg">Tu comentario ha sido enviado y está pendiente de moderación.</p>}
                </form>
            </div>

            <div className="comments-list">
                {Array.isArray(comments) && comments.map((comment) => (
                    <div key={comment.id} className="comment-item glass-premium">
                        <div className="comment-header">
                            <span className="comment-author">{comment.authorName}</span>
                            <span className="comment-date">
                                {new Date(comment.createdAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        </div>
                        <div className="comment-body">
                            {comment.content}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
