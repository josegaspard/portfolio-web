'use client';
import { useState } from 'react';

export function CommentsSection({ slug }: { slug: string }) {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://josegaspard.dev/api';
      await fetch(`${apiUrl}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, slug }),
      });
      setStatus('sent');
      setForm({ name: '', email: '', comment: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section style={{ marginTop: 64 }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Comentarios</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 24 }}>
        Los comentarios son moderados antes de publicarse.
      </p>
      {status === 'sent' ? (
        <div className="glass-card" style={{ padding: 24, textAlign: 'center' }}>
          <p style={{ color: '#10b981' }}>¡Comentario enviado! Será visible tras aprobación.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Nombre *</label>
              <input className="form-input" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Email *</label>
              <input className="form-input" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Comentario *</label>
            <textarea className="form-textarea" required value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} placeholder="Escribe tu comentario..." rows={4} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : 'Publicar Comentario'}
          </button>
          {status === 'error' && <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: 8 }}>Error al enviar.</p>}
        </form>
      )}
    </section>
  );
}

export function NewsletterWidget() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setEmail('');
  };

  return (
    <div className="sidebar-widget">
      <h4>Suscríbete al Newsletter</h4>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 16 }}>
        Recibe tendencias de SEO y desarrollo web en tu bandeja.
      </p>
      {sent ? (
        <p style={{ color: '#10b981', fontSize: '0.9rem' }}>¡Gracias por suscribirte!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <input type="email" placeholder="tu@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" style={{ padding: '10px 14px', fontSize: '0.9rem' }} />
          <button type="submit" className="btn btn-primary btn-sm" style={{ background: '#f59e0b', color: '#000', fontWeight: 700, border: 'none' }}>Suscribirme</button>
        </form>
      )}
    </div>
  );
}
