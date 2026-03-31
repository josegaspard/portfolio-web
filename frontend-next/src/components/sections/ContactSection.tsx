'use client';
import { useState } from 'react';
import { SITE } from '@/lib/constants';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://josegaspard.dev/api';
      const res = await fetch(`${API_URL}/contact-messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Contacto</span>
          <h2 className="section-title">Hablemos de Tu <span className="gradient-text">Proyecto</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>¿Listo para transformar tu presencia digital? Escríbeme y respondo en menos de 24 horas.</p>
        </div>
        <div className="grid-2" style={{ alignItems: 'start' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nombre Completo *</label>
              <input className="form-input" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Profesional *</label>
              <input className="form-input" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Empresa</label>
              <input className="form-input" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Nombre de tu empresa" />
            </div>
            <div className="form-group">
              <label className="form-label">Servicio de Interés *</label>
              <select className="form-select" required value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                <option value="">Seleccionar servicio</option>
                <option value="auditoria-seo">Auditoría SEO</option>
                <option value="seo-desarrollo">SEO + Desarrollo Web</option>
                <option value="enterprise">Enterprise Growth</option>
                <option value="conferencia">Conferencia / Keynote</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Mensaje *</label>
              <textarea className="form-textarea" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Cuéntame sobre tu proyecto..." />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
            </button>
            {status === 'error' && <p style={{ color: '#ef4444', marginTop: 12, fontSize: '0.9rem' }}>Error al enviar. Intenta de nuevo o escribe a {SITE.email}</p>}
          </form>
          <div style={{ paddingLeft: 40 }}>
            <div className="contact-info-item">
              <div className="contact-icon">✉</div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Email</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{SITE.email}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{SITE.emailSecondary}</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📱</div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Teléfono</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{SITE.phone.mx} (México)</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{SITE.phone.pe} (Perú)</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Ubicación</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{SITE.location}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Especialista en mercados LATAM</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">🕐</div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Disponibilidad</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Lunes a Viernes: 9:00 AM - 6:00 PM</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Respuesta en menos de 24 horas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
