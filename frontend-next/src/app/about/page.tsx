import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, PersonJsonLd } from '@/components/seo/JsonLd';
import { ACHIEVEMENTS, EDUCATION, SKILLS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre José Gaspard | Consultor SEO y Desarrollador Web en Ciudad de México',
  description: 'Conoce a José Gaspard: +15 años de experiencia en SEO técnico, link building y desarrollo web. Ha trabajado con Google, Canva, PayPal. Consultor SEO y programador web en Ciudad de México.',
  keywords: ['sobre josé gaspard', 'consultor seo méxico', 'programador web', 'desarrollador backend', 'experto seo', 'desarrollador web', 'consultor seo ciudad de méxico', 'especialista seo'],
  alternates: { canonical: 'https://josegaspard.dev/about/' },
  openGraph: {
    title: 'José Gaspard - Consultor SEO y Desarrollador Web en Ciudad de México',
    description: 'Arquitecto SEO & Desarrollador Full-Stack con +15 años transformando búsquedas en ingresos.',
    type: 'profile',
    url: 'https://josegaspard.dev/about/',
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Inicio', url: 'https://josegaspard.dev' }, { name: 'Sobre Mí', url: 'https://josegaspard.dev/about/' }]} />
      <PersonJsonLd />
      <Header />
      <main>
        {/* Hero with Profile Photo */}
        <section className="hero" style={{ minHeight: '65vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #3b82f6',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
              }}>
                <Image
                  src="/img/josegaspard.png"
                  alt="José Gaspard - Consultor SEO y Desarrollador Web en Ciudad de México"
                  width={200}
                  height={200}
                  priority
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div style={{ maxWidth: 600 }}>
              <span className="section-badge">Sobre Mí</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
                José Gaspard - <span style={{ color: '#3b82f6' }}>Consultor SEO</span> y Desarrollador Web en Ciudad de México
              </h1>
              <p className="hero-subtitle" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7 }}>
                Arquitecto SEO &amp; Desarrollador Full-Stack con +15 años transformando búsquedas en ingresos para empresas en México y LATAM.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24 }}>
                <Link href="/contact/" className="btn btn-primary" style={{ background: '#f59e0b', color: '#000', fontWeight: 700, border: 'none' }}>
                  Contactar
                </Link>
                <Link href="/services/" className="btn btn-secondary">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 className="section-title" style={{ marginBottom: 32 }}>Mi <span style={{ color: '#3b82f6' }}>Historia</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              Soy un <strong>consultor SEO</strong> y desarrollador web con resultados comprobados en México y LATAM. Con más de 15 años de experiencia, he transformado estrategias digitales en éxitos medibles para empresas de todos los tamaños. Mi especialización abarca SEO técnico avanzado, estrategias de Link Building de alta calidad, marketing de contenidos estratégico y desarrollo web profesional con tecnologías modernas como Next.js y NestJS.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              Como programador y desarrollador web full-stack, combino conocimiento técnico profundo con visión estratégica de negocio. He tenido el privilegio de colaborar con empresas como <strong>Google</strong>, <strong>Canva</strong> y <strong>PayPal</strong>, y he fundado múltiples empresas tecnológicas en LATAM. Esta experiencia única me permite ofrecer un servicio integral que muy pocos consultores SEO pueden brindar: optimización técnica implementada directamente en el código.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              Desde mi base en <strong>Ciudad de México</strong>, trabajo con clientes en todo el mundo hispanohablante, ayudándoles a dominar los resultados de búsqueda en sus mercados objetivo. Mi enfoque combina ingeniería de software de alto nivel con las últimas técnicas de posicionamiento web para entregar resultados que superan expectativas.
            </p>
          </div>
        </section>

        {/* Mi Filosofía */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center">
              <span className="section-badge">Valores</span>
              <h2 className="section-title">Mi <span style={{ color: '#3b82f6' }}>Filosofía</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
              <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #3b82f6' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>Resultados sobre promesas</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Creo en métricas concretas y datos reales. Cada estrategia SEO que implemento está respaldada por análisis profundo y orientada a generar un impacto medible en tu negocio.</p>
              </div>
              <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #3b82f6' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>Código limpio, SEO perfecto</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>El verdadero SEO técnico nace en el código. Mi ventaja competitiva es poder implementar directamente las optimizaciones sin intermediarios, eliminando fricciones y acelerando resultados.</p>
              </div>
              <div className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #3b82f6' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>Transparencia total</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Cada decisión se comunica, cada métrica se comparte. Trabajo como una extensión de tu equipo, con reportes claros y comunicación constante en cada etapa del proceso.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center">
              <span className="section-badge">Trayectoria</span>
              <h2 className="section-title">Logros <span style={{ color: '#3b82f6' }}>Destacados</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="achievement-item glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: '#3b82f6', fontWeight: 700, fontSize: '1.25rem', flexShrink: 0 }}>&#10003;</span>
                  <span style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <div className="section-header text-center">
              <span className="section-badge">Educación</span>
              <h2 className="section-title">Formación <span style={{ color: '#3b82f6' }}>Académica</span></h2>
            </div>
            <div className="timeline">
              {EDUCATION.map((e, i) => (
                <div key={i} className="timeline-item glass-card" style={{ padding: '1.5rem 2rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <div className="timeline-company" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc' }}>{e.title}</div>
                      <div className="timeline-role" style={{ color: 'var(--text-secondary)' }}>{e.institution}</div>
                    </div>
                    <span style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.9rem', flexShrink: 0 }}>{e.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center">
              <span className="section-badge">Habilidades</span>
              <h2 className="section-title">Tecnologías y <span style={{ color: '#3b82f6' }}>Herramientas</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem' }}>
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div key={category} className="glass-card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                    {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : category === 'seo' ? 'SEO' : category === 'tools' ? 'Herramientas' : 'CMS'}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {skills.map((s) => (
                      <span key={s} className="skill-badge">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
          padding: '5rem 1.5rem',
          textAlign: 'center',
          borderTop: '2px solid rgba(59, 130, 246, 0.3)',
          borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
        }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
              ¿Quieres trabajar conmigo?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Estoy disponible para proyectos de consultoría SEO, desarrollo web y estrategias de crecimiento digital. Agenda una consulta gratuita y hablemos sobre cómo puedo ayudarte.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: '#f59e0b', color: '#000', fontWeight: 700, border: 'none', padding: '1rem 2.5rem' }}>
                Agendar Consulta Gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portafolio/" className="btn btn-secondary btn-lg">Ver Mi Portafolio</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
