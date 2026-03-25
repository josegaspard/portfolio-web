'use client';

import { useState, FormEvent } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const contactInfo = [
  {
    label: 'Email',
    value: 'hola@josegaspard.dev',
    href: 'mailto:hola@josegaspard.dev',
    icon: '@',
  },
  {
    label: 'Teléfono',
    value: '+52 55 1234 5678',
    href: 'tel:+525512345678',
    icon: '#',
  },
  {
    label: 'Ubicación',
    value: 'Ciudad de México, México',
    href: null,
    icon: 'O',
  },
  {
    label: 'Horario',
    value: 'Lun - Vie: 9:00 - 18:00 (CST)',
    href: null,
    icon: '~',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      alert('Error al enviar. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    background: 'rgba(15, 23, 42, 0.8)',
    color: '#f8fafc',
    fontSize: '0.9375rem',
    outline: 'none',
    fontFamily: 'inherit',
  } as const;

  const labelStyle = {
    display: 'block',
    color: '#cbd5e1',
    fontSize: '0.875rem',
    fontWeight: 500 as const,
    marginBottom: '0.5rem',
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            background: 'linear-gradient(to bottom, #030712, #0f172a)',
            padding: '8rem 1.5rem 4rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                background: 'rgba(99, 102, 241, 0.15)',
                color: '#818cf8',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                border: '1px solid rgba(99, 102, 241, 0.3)',
              }}
            >
              Contacto
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                color: '#f8fafc',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Hablemos de Tu Proyecto
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#94a3b8',
                maxWidth: '48rem',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Respuesta garantizada en menos de 24 horas. Agenda una consulta gratuita y
              descubre cómo podemos hacer crecer tu negocio.
            </p>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section style={{ background: '#030712', padding: '5rem 1.5rem' }}>
          <div
            style={{
              maxWidth: '72rem',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))',
              gap: '3rem',
            }}
          >
            {/* Form */}
            <div>
              <h2
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  marginBottom: '2rem',
                }}
              >
                Envía tu mensaje
              </h2>
              {submitted ? (
                <div
                  style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '1rem',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                    }}
                  >
                    &#10003;
                  </div>
                  <h3 style={{ color: '#34d399', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    Mensaje Enviado
                  </h3>
                  <p style={{ color: '#94a3b8' }}>
                    Gracias por contactarme. Te responderé en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 12rem), 1fr))',
                      gap: '1.25rem',
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Nombre *</label>
                      <input
                        type="text"
                        required
                        style={inputStyle}
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email"
                        required
                        style={inputStyle}
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 12rem), 1fr))',
                      gap: '1.25rem',
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Teléfono</label>
                      <input
                        type="tel"
                        style={inputStyle}
                        placeholder="+52 55 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Empresa</label>
                      <input
                        type="text"
                        style={inputStyle}
                        placeholder="Nombre de tu empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Servicio de interés</label>
                    <select
                      style={{ ...inputStyle, appearance: 'auto' as const }}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="seo-tecnico">SEO Técnico</option>
                      <option value="link-building">Link Building</option>
                      <option value="desarrollo-web">Desarrollo Web</option>
                      <option value="seo-desarrollo">SEO + Desarrollo</option>
                      <option value="consultoria">Consultoría Digital</option>
                      <option value="enterprise">Enterprise Growth</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Presupuesto estimado</label>
                    <select
                      style={{ ...inputStyle, appearance: 'auto' as const }}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="500-1000">$500 - $1,000 USD</option>
                      <option value="1000-3000">$1,000 - $3,000 USD</option>
                      <option value="3000-5000">$3,000 - $5,000 USD</option>
                      <option value="5000+">$5,000+ USD</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Mensaje *</label>
                    <textarea
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' as const }}
                      placeholder="Cuéntame sobre tu proyecto, objetivos y plazos..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      background: isSubmitting
                        ? '#475569'
                        : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '1rem',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  marginBottom: '2rem',
                }}
              >
                Información de contacto
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    style={{
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(99, 102, 241, 0.15)',
                      borderRadius: '1rem',
                      padding: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '0.75rem',
                        background: 'rgba(99, 102, 241, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#818cf8',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          color: '#94a3b8',
                          fontSize: '0.8125rem',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          style={{
                            color: '#f8fafc',
                            textDecoration: 'none',
                            fontWeight: 500,
                          }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div style={{ color: '#f8fafc', fontWeight: 500 }}>{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                style={{
                  marginTop: '2rem',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  height: '16rem',
                  background: 'rgba(15, 23, 42, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <div style={{ fontSize: '2rem', color: '#818cf8' }}>CDMX</div>
                <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  Ciudad de México, México
                </div>
                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>
                  Disponible para proyectos remotos a nivel global
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
