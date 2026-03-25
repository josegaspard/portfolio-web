import type { Metadata } from 'next';
import Image from 'next/image';
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
    description: `Caso de éxito: ${project.description} Resultados reales de optimización SEO y desarrollo web profesional en México.`,
    keywords: [...project.tags, 'caso de éxito seo', 'portafolio desarrollo web', 'José Gaspard', 'optimización seo', 'posicionamiento web'],
    alternates: { canonical: `https://josegaspard.dev/portafolio/${project.slug}/` },
    openGraph: {
      title: `${project.title} | Portafolio José Gaspard`,
      description: project.description,
      type: 'article',
      images: [{ url: `https://josegaspard.dev${project.image}`, width: 1200, height: 630 }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return <div>Proyecto no encontrado</div>;
  const details = PROJECT_DETAILS[slug];
  const relatedProjects = PORTFOLIO_PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Portafolio', url: 'https://josegaspard.dev/portafolio/' },
        { name: project.title, url: `https://josegaspard.dev/portafolio/${slug}/` },
      ]} />
      {/* CreativeWork JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            author: { '@type': 'Person', name: 'José Gaspard', url: 'https://josegaspard.dev' },
            dateCreated: `${project.year}`,
            genre: project.industry,
            keywords: project.tags.join(', '),
            url: `https://josegaspard.dev/portafolio/${slug}/`,
            image: `https://josegaspard.dev${project.image}`,
          }),
        }}
      />
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
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: 12, fontWeight: 800 }}>{project.title}</h1>
            <p style={{ fontSize: '1.3rem', fontWeight: 600, color: '#3b82f6', marginBottom: 20 }}>{project.subtitle}</p>
            <p className="hero-subtitle" style={{ marginBottom: 20, maxWidth: 700 }}>{project.description}</p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>Cliente: {project.client}</span>
              <span>{project.year}</span>
              <span>{project.industry}</span>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}>
              <Image
                src={project.image}
                alt={`${project.title} - Caso de éxito de optimización SEO y desarrollo web por José Gaspard`}
                width={900}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Resultados</span>
              <h2 className="section-title">Métricas de <span style={{ color: '#3b82f6' }}>Impacto</span></h2>
            </div>
            <div className="grid-4">
              {project.results.map((r, i) => (
                <div key={i} className="glass-card stat-card" style={{ borderTop: '3px solid #3b82f6' }}>
                  <div className="stat-value" style={{ color: '#3b82f6' }}>{r.metric}</div>
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
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '3rem',
                alignItems: 'start',
              }}>
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

        {/* Inline CTA Banner */}
        <section style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
          padding: '3.5rem 1.5rem',
          textAlign: 'center',
          borderTop: '2px solid rgba(59, 130, 246, 0.3)',
          borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
        }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '0.75rem' }}>
              ¿Necesitas resultados similares para tu negocio?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Agenda una consulta gratuita y diseñemos una estrategia de SEO y desarrollo web personalizada para tu empresa.
            </p>
            <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: '#f59e0b', color: '#000', fontWeight: 700, border: 'none', padding: '0.875rem 2.25rem', fontSize: '1rem' }}>
              Agendar Consulta Gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* Process */}
        {details && (
          <section className="section">
            <div className="container">
              <div className="section-header text-center">
                <span className="section-badge">Proceso</span>
                <h2 className="section-title">Metodología <span style={{ color: '#3b82f6' }}>Aplicada</span></h2>
              </div>
              <div style={{ maxWidth: 700, margin: '0 auto' }}>
                <div className="timeline">
                  {details.process.map((step, i) => (
                    <div key={i} className="timeline-item" style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      marginBottom: '1.25rem',
                    }}>
                      <div style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: 'rgba(59, 130, 246, 0.15)',
                        border: '2px solid #3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#3b82f6',
                        flexShrink: 0,
                      }}>
                        {i + 1}
                      </div>
                      <div>
                        <div className="timeline-company" style={{ fontSize: '1rem', fontWeight: 600 }}>Paso {i + 1}</div>
                        <div className="timeline-desc" style={{ color: 'var(--text-secondary)' }}>{step}</div>
                      </div>
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
                <h2 className="section-title">Stack <span style={{ color: '#3b82f6' }}>Utilizado</span></h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                {details.technologies.map((t) => (
                  <span key={t} className="skill-badge" style={{ borderColor: 'rgba(59, 130, 246, 0.3)' }}>{t}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {details?.testimonial && (
          <section className="section">
            <div className="container" style={{ maxWidth: 800 }}>
              <div className="glass-card testimonial-card" style={{ textAlign: 'center', padding: 48, borderTop: '3px solid #3b82f6' }}>
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

        {/* Related Projects */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Más Proyectos</span>
              <h2 className="section-title">Proyectos <span style={{ color: '#3b82f6' }}>Relacionados</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 550, margin: '0 auto', lineHeight: 1.7 }}>
                Explora más casos de éxito de optimización SEO y desarrollo web profesional.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '2rem',
              maxWidth: 800,
              margin: '0 auto',
            }}>
              {relatedProjects.map((rp) => (
                <Link key={rp.slug} href={`/portafolio/${rp.slug}/`} style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                    <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
                      <Image
                        src={rp.image}
                        alt={`${rp.title} - Caso de éxito SEO y desarrollo web`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                        {rp.tags.map((t) => (
                          <span key={t} style={{
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: '#3b82f6',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                          }}>{t}</span>
                        ))}
                      </div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: 8 }}>{rp.title}</h3>
                      <p style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.95rem', marginBottom: 8 }}>{rp.subtitle}</p>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{rp.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800 }}>
              ¿Quieres Resultados <span style={{ color: '#3b82f6' }}>Similares</span>?
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 600, margin: '1rem auto 2rem', lineHeight: 1.7 }}>
              Cada proyecto es único. Contacta conmigo para una consulta gratuita y diseñemos una estrategia personalizada de SEO y desarrollo web para tu negocio.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: '#f59e0b', color: '#000', fontWeight: 700, border: 'none' }}>
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
