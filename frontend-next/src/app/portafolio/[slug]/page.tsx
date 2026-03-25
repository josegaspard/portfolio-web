import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import Link from 'next/link';

const PROJECT_DETAILS: Record<string, {
  challenge: string;
  solution: string;
  process: string[];
  technologies: string[];
  testimonial?: { quote: string; author: string; role: string };
}> = {
  'ecommerce-seo-optimization': {
    challenge: 'La tienda online tenía un tráfico orgánico estancado durante 2 años. Core Web Vitals en rojo, arquitectura de URLs desordenada, contenido duplicado masivo y zero schema markup. La competencia dominaba todas las keywords transaccionales del nicho de moda.',
    solution: 'Implementé una estrategia de SEO técnico integral: migración a Next.js con SSR para rendering perfecto, reestructuración completa de la arquitectura de URLs con redirects 301, implementación de schema markup (Product, BreadcrumbList, FAQ), optimización de Core Web Vitals hasta 98/100, y una campaña de link building enfocada en medios de moda con DA 60+.',
    process: ['Auditoría técnica completa (Screaming Frog + Ahrefs)', 'Migración de arquitectura de URLs', 'Optimización de Core Web Vitals', 'Implementación de Schema Markup', 'Estrategia de contenido SEO', 'Campaña de Link Building', 'Monitoreo y optimización continua'],
    technologies: ['Next.js', 'Technical SEO', 'Schema Markup', 'Ahrefs', 'Screaming Frog', 'Google Search Console', 'Core Web Vitals'],
    testimonial: { quote: 'Los resultados superaron todas nuestras expectativas. En 6 meses pasamos de 5K a 25K visitas orgánicas mensuales.', author: 'Director de E-commerce', role: 'Tienda de Moda Online' },
  },
  'saas-platform-development': {
    challenge: 'La startup necesitaba una plataforma SaaS robusta, escalable y segura. El MVP anterior estaba construido con WordPress y no soportaba la carga de usuarios ni ofrecía la experiencia de usuario necesaria para competir en el mercado.',
    solution: 'Desarrollé la plataforma completa desde cero con Next.js 15 como frontend (App Router, Server Components) y NestJS como backend API. Base de datos PostgreSQL con Redis para caché. Docker para deployment. Arquitectura de microservicios con autenticación JWT, rate limiting, y dashboard de analytics en tiempo real.',
    process: ['Análisis de requerimientos y arquitectura', 'Diseño de base de datos y API', 'Desarrollo frontend con Next.js 15', 'Desarrollo backend con NestJS', 'Integración de pagos y autenticación', 'Testing y QA completo', 'Deploy con Docker + CI/CD'],
    technologies: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'TypeScript', 'JWT', 'GitHub Actions'],
    testimonial: { quote: 'José no solo entregó código, entregó una plataforma que escala. Pasamos de 0 a 10K usuarios sin un solo problema técnico.', author: 'CTO', role: 'Startup Tecnológica' },
  },
  'corporate-website-redesign': {
    challenge: 'El sitio corporativo tenía un diseño obsoleto de 2018, tiempo de carga de +8 segundos, zero optimización SEO, y un bounce rate del 85%. La empresa perdía leads constantemente frente a competidores con mejor presencia digital.',
    solution: 'Rediseño completo con enfoque mobile-first y SEO desde el código. Implementé Next.js con static generation, optimización de imágenes WebP/AVIF, lazy loading inteligente, schema markup para LocalBusiness y Service, y una estrategia de contenido enfocada en keywords de servicio con alto intent comercial.',
    process: ['Auditoría UX/UI y SEO del sitio actual', 'Investigación de keywords y competencia', 'Diseño de wireframes y prototipos', 'Desarrollo con Next.js (SSG)', 'Implementación SEO técnico completo', 'Migración con redirects 301', 'Optimización post-lanzamiento'],
    technologies: ['Next.js', 'TypeScript', 'SEO Técnico', 'Schema Markup', 'Figma', 'Google Analytics 4', 'Search Console'],
    testimonial: { quote: 'El rediseño transformó nuestra presencia digital. Los leads orgánicos se triplicaron en el primer trimestre.', author: 'Director General', role: 'Empresa de Servicios Profesionales' },
  },
};

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: `${project.title} - ${project.subtitle} | José Gaspard`,
    description: `Caso de éxito: ${project.description} Resultados reales de optimización SEO y desarrollo web profesional.`,
    keywords: [...project.tags, 'caso de éxito seo', 'portafolio desarrollo web', 'José Gaspard'],
    alternates: { canonical: `https://josegaspard.dev/portafolio/${project.slug}/` },
    openGraph: {
      title: `${project.title} | Portafolio José Gaspard`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return <div>Proyecto no encontrado</div>;
  const details = PROJECT_DETAILS[slug];

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Portafolio', url: 'https://josegaspard.dev/portafolio/' },
        { name: project.title, url: `https://josegaspard.dev/portafolio/${slug}/` },
      ]} />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero" style={{ minHeight: '55vh' }}>
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="container hero-content">
            <Link href="/portafolio/" className="btn btn-ghost btn-sm" style={{ marginBottom: 20 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Volver al Portafolio
            </Link>
            <div className="project-tags" style={{ marginBottom: 20 }}>
              {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: 12 }}>{project.title}</h1>
            <p style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--indigo)', marginBottom: 20 }}>{project.subtitle}</p>
            <p className="hero-subtitle" style={{ marginBottom: 20 }}>{project.description}</p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>📋 Cliente: {project.client}</span>
              <span>📅 {project.year}</span>
              <span>🏢 {project.industry}</span>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Resultados</span>
              <h2 className="section-title">Métricas de <span className="gradient-text">Impacto</span></h2>
            </div>
            <div className="grid-4">
              {project.results.map((r, i) => (
                <div key={i} className="glass-card stat-card">
                  <div className="stat-value">{r.metric}</div>
                  <div className="stat-label">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        {details && (
          <section className="section section-alt">
            <div className="container">
              <div className="grid-2" style={{ gap: 56, alignItems: 'start' }}>
                <div>
                  <span className="section-badge" style={{ background: 'rgba(239, 68, 68, 0.08)', borderColor: 'rgba(239, 68, 68, 0.25)', color: '#ef4444' }}>Desafío</span>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 16, marginTop: 12 }}>El Problema</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>{details.challenge}</p>
                </div>
                <div>
                  <span className="section-badge">Solución</span>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 16, marginTop: 12 }}>Mi Enfoque</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>{details.solution}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {details && (
          <section className="section">
            <div className="container">
              <div className="section-header text-center">
                <span className="section-badge">Proceso</span>
                <h2 className="section-title">Metodología <span className="gradient-text">Aplicada</span></h2>
              </div>
              <div style={{ maxWidth: 700, margin: '0 auto' }}>
                <div className="timeline">
                  {details.process.map((step, i) => (
                    <div key={i} className="timeline-item">
                      <div className="timeline-company" style={{ fontSize: '1rem' }}>Paso {i + 1}</div>
                      <div className="timeline-desc">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        {details && (
          <section className="section section-alt">
            <div className="container">
              <div className="section-header text-center">
                <span className="section-badge">Tecnologías</span>
                <h2 className="section-title">Stack <span className="gradient-text">Utilizado</span></h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                {details.technologies.map((t) => (
                  <span key={t} className="skill-badge">{t}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {details?.testimonial && (
          <section className="section">
            <div className="container" style={{ maxWidth: 800 }}>
              <div className="glass-card testimonial-card" style={{ textAlign: 'center', padding: 48 }}>
                <div style={{ fontSize: '3rem', opacity: 0.15, marginBottom: 16 }}>&ldquo;</div>
                <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, borderLeft: 'none', paddingLeft: 0 }}>
                  &ldquo;{details.testimonial.quote}&rdquo;
                </p>
                <div className="testimonial-author">{details.testimonial.author}</div>
                <div className="testimonial-position">{details.testimonial.role}</div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="cta-section">
          <div className="container" style={{ position: 'relative' }}>
            <h2>¿Quieres Resultados <span className="gradient-text">Similares</span>?</h2>
            <p>Cada proyecto es único. Contacta conmigo para una consulta gratuita y diseñemos una estrategia para tu negocio.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg">
                Agendar Consulta
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portafolio/" className="btn btn-secondary btn-lg">Ver Más Proyectos</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
