'use client';

import React, { useState } from 'react';
import './NewsletterForm.css';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/newsletter/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'blog_sidebar' }),
            });

            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="newsletter-card glass-premium">
            <div className="newsletter-icon">
                <i className="fas fa-paper-plane"></i>
            </div>
            <h4>Estrategias SEO en tu Email</h4>
            <p>Únete a +5,000 profesionales. Recibe consejos técnicos y hacks de crecimiento semanalmente.</p>

            <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading' || status === 'success'}
                />
                <button
                    type="submit"
                    className={`btn btn-primary ${status}`}
                    disabled={status === 'loading' || status === 'success'}
                >
                    {status === 'loading' ? 'Enviando...' : status === 'success' ? '¡Suscrito!' : 'Suscribirme'}
                </button>
            </form>
            {status === 'error' && <p className="error-msg">Ocurrió un error. Intenta de nuevo.</p>}
            <p className="privacy-hint">Sin spam. Solo valor real.</p>
        </div>
    );
}
