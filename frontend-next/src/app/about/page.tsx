import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { ACHIEVEMENTS, EDUCATION, SKILLS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre José Gaspard | Experto SEO & Desarrollador Web en México',
  description: 'Conoce a José Gaspard: +15 años de experiencia en SEO técnico, link building y desarrollo web. Ha trabajado con Google, Canva, PayPal. Programador y consultor SEO en Ciudad de México.',
  keywords: ['sobre josé gaspard', 'consultor seo méxico', 'programador web', 'desarrollador backend', 'experto seo', 'desarrollador web'],
  alternates: { canonical: 'https://josegaspard.dev/about/' },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Inicio', url: 'https://josegaspard.dev' }, { name: 'Sobre Mí', url: 'https://josegaspard.dev/about/' }]} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content">
            <span className="section-badge">Sobre Mí</span>
            <h1>José Gaspard <span className="gradient-text">Hernani</span></h1>
            <p className="hero-subtitle">Arquitecto SEO &amp; Desarrollador Full-Stack con +15 años transformando búsquedas en ingresos para empresas en México y LATAM.</p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 className="section-title mb-8">Mi <span className="gradient-text">Historia</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              Soy un especialista SEO con resultados comprobados en México y LATAM, transformando estrategias digitales en éxitos medibles. Mi experiencia abarca SEO técnico avanzado, estrategias de Link Building de alta calidad y marketing de contenidos estratégico.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              Como programador y desarrollador web full-stack, combino conocimiento técnico profundo con visión estratégica de negocio. He trabajado con empresas como Google, Canva y PayPal, y he fundado múltiples empresas tecnológicas en LATAM.
            </p>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: 48, marginBottom: 20 }}>Logros Destacados</h3>
            <div className="achievement-list" style={{ marginBottom: 48 }}>
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="achievement-item"><span className="achievement-check">✓</span><span>{a}</span></div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Formación Académica</h3>
            <div className="timeline" style={{ marginBottom: 48 }}>
              {EDUCATION.map((e, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-company">{e.title}</div>
                  <div className="timeline-role">{e.institution}</div>
                  <div className="timeline-period">{e.year}</div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Tecnologías</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
              {[...SKILLS.frontend, ...SKILLS.backend, ...SKILLS.seo, ...SKILLS.tools].map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg">Trabajemos Juntos</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
