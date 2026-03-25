'use client';

import { useState, FormEvent } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import Link from 'next/link';

const contactInfo = [
  {
    label: 'Email Principal',
    value: 'hola@josegaspard.dev',
    href: 'mailto:hola@josegaspard.dev',
    icon: '@',
  },
  {
    label: 'Email Secundario',
    value: 'josegaspardhernani@gmail.com',
    href: 'mailto:josegaspardhernani@gmail.com',
    icon: '@',
  },
  {
    label: 'Teléfono México',
    value: '+52 553 121 2956',
    href: 'tel:+525531212956',
    icon: '#',
  },
  {
    label: 'Teléfono Perú',
    value: '+51 927 650 573',
    href: 'tel:+51927650573',
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

const TRUST_SIGNALS = [
  { title: 'Respuesta en menos de 24h', description: 'Garantizamos respuesta a tu mensaje en menos de un día hábil.' },
  { title: 'Sin compromiso', description: 'La consulta inicial es completamente gratuita y sin obligación.' },
  { title: '100% confidencial', description: 'Tu información y proyecto se manejan con total discreción.' },
];

const CONTACT_FAQ = [
  {
    question: '¿Cómo funciona la consulta SEO gratuita?',
    answer: 'Agendamos una videollamada de 30 minutos donde analizamos tu sitio web, identificamos oportunidades de mejora rápida y discutimos tus objetivos. Al finalizar, recibes un resumen con recomendaciones prioritarias sin costo.',
  },
  {
    question: '¿Qué información necesito preparar antes de la consulta?',
    answer: 'Idealmente, ten a la mano la URL de tu sitio web, acceso a Google Search Console (si lo tienes), y una idea clara de tus objetivos de negocio. Si no tienes todo esto, no te preocupes, trabajamos con lo que tengas disponible.',
  },
  {
    question: '¿Trabajan con empresas fuera de México?',
    answer: 'Sí, trabajamos con clientes en todo LATAM, España y Estados Unidos. Las consultas y reuniones se realizan por videollamada, lo que nos permite colaborar eficientemente sin importar la ubicación geográfica.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
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
    border: '1px solid rgba(59, 130, 246, 0.2)',
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
      {/* BreadcrumbJsonLd and Metadata are handled via metadata export in layout or a server wrapper */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://josegaspard.dev' },
              { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://josegaspard.dev/contact/' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contacto - José Gaspard',
            description: 'Agenda tu consulta SEO gratuita. Consultor SEO y desarrollador web en Ciudad de México.',
            url: 'https://josegaspard.dev/contact/',
            mainEntity: {
              '@type': 'Person',
              name: 'José Gaspard',
              email: 'hola@josegaspard.dev',
              telephone: '+525531212956',
              address: { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressCountry: 'MX' },
            },
          }),
        }}
      />
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
                background: 'rgba(59, 130, 246, 0.15)',
                color: '#3b82f6',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              Contacto
            </span>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: '#f8fafc',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Contacto - Agenda tu <span style={{ color: '#3b82f6' }}>Consulta SEO</span> Gratuita
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: '#94a3b8',
                maxWidth: '48rem',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Respuesta garantizada en menos de 24 horas. Agenda una consulta gratuita y
              descubre cómo podemos hacer crecer tu negocio con estrategias de SEO y desarrollo web profesional.
            </p>
          </div>
        </section>

        {/* Trust Signals */}
        <section style={{ background: '#030712', padding: '3rem 1.5rem 0' }}>
          <div style={{
            maxWidth: '72rem',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1.5rem',
          }}>
            {TRUST_SIGNALS.map((signal) => (
              <div
                key={signal.title}
                style={{
                  background: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#3b82f6', marginBottom: '0.5rem' }}>
                  {signal.title}
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>{signal.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form + Info */}
        <section style={{ background: '#030712', padding: '4rem 1.5rem 5rem' }}>
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
                  <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#34d399' }}>&#10003;</div>
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
                  <div>
                    <label style={labelStyle}>Empresa (opcional)</label>
                    <input
                      type="text"
                      style={inputStyle}
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Servicio de interés *</label>
                    <select
                      required
                      style={{ ...inputStyle, appearance: 'auto' as const }}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="seo-tecnico">SEO Técnico</option>
                      <option value="link-building">Link Building</option>
                      <option value="desarrollo-web">Desarrollo Web</option>
                      <option value="seo-desarrollo">SEO + Desarrollo</option>
                      <option value="consultoria">Consultoría SEO</option>
                      <option value="enterprise">Enterprise Growth</option>
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
                        : '#f59e0b',
                      color: isSubmitting ? '#fff' : '#000',
                      fontWeight: 700,
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    style={{
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(59, 130, 246, 0.15)',
                      borderRadius: '1rem',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        borderRadius: '0.75rem',
                        background: 'rgba(59, 130, 246, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3b82f6',
                        fontWeight: 700,
                        fontSize: '1rem',
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
                          marginBottom: '0.125rem',
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

              {/* Google Maps Embed */}
              <div
                style={{
                  marginTop: '1.5rem',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  height: '16rem',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.94095038!2d-99.2649839!3d19.3910036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación - Ciudad de México"
                />
              </div>
              <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>
                Disponible para proyectos remotos a nivel global
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ background: 'var(--bg-secondary, #0f172a)', padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '9999px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: '#3b82f6',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                }}
              >
                FAQ
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#f8fafc' }}>
                Preguntas sobre la <span style={{ color: '#3b82f6' }}>Consulta</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {CONTACT_FAQ.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                    borderRadius: '1rem',
                    padding: '1.5rem 2rem',
                  }}
                >
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          style={{
            background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
            padding: '4rem 1.5rem',
            textAlign: 'center',
            borderTop: '2px solid rgba(59, 130, 246, 0.3)',
          }}
        >
          <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
              Prefiero hablar por <span style={{ color: '#3b82f6' }}>WhatsApp</span>?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              También puedes contactarme directamente por WhatsApp para una respuesta más rápida.
            </p>
            <Link
              href="https://wa.me/5215531212956?text=Hola%2C%20me%20gustaría%20más%20información%20sobre%20tus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ background: '#25d366', color: '#fff', fontWeight: 700, border: 'none', padding: '1rem 2.5rem' }}
            >
              Enviar WhatsApp
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
