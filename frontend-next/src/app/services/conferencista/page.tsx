import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Conferencista SEO y Marketing Digital | José Gaspard - Speaker Internacional',
  description: 'José Gaspard — conferencista y speaker internacional de SEO, marketing digital y tecnología. Keynote en Warner Play Latino. Disponible para conferencias, workshops y capacitaciones empresariales.',
  keywords: ['conferencista seo', 'conferencia de marketing', 'conferencia de seo', 'speaker seo', 'keynote speaker marketing digital', 'charlas de seo', 'ponente marketing digital'],
  alternates: { canonical: 'https://josegaspard.dev/services/conferencista/' },
  openGraph: {
    title: 'Conferencista SEO y Marketing Digital | José Gaspard - Speaker Internacional',
    description: 'José Gaspard — conferencista y speaker internacional de SEO, marketing digital y tecnología. Keynote en Warner Play Latino.',
    type: 'website',
    url: 'https://josegaspard.dev/services/conferencista/',
  },
};

const TOPICS = [
  { icon: '🔍', title: 'SEO Técnico y Posicionamiento Web', desc: 'Estrategias avanzadas de optimización técnica, Core Web Vitals, arquitectura de sitios y factores de ranking que realmente impactan el posicionamiento en Google.' },
  { icon: '🤖', title: 'GEO: Generative Engine Optimization', desc: 'Cómo optimizar tu presencia para los motores de búsqueda impulsados por IA. Estrategias para aparecer en respuestas generativas de Google, ChatGPT y Perplexity.' },
  { icon: '💻', title: 'Desarrollo Web de Alto Rendimiento', desc: 'Arquitecturas modernas con Next.js, NestJS y tecnologías que combinan rendimiento, escalabilidad y SEO desde el código fuente.' },
  { icon: '📈', title: 'Estrategias de Crecimiento Digital', desc: 'Frameworks probados para escalar tráfico orgánico, aumentar conversiones y construir una presencia digital sostenible a largo plazo.' },
  { icon: '🔗', title: 'Link Building y Autoridad de Marca', desc: 'Técnicas éticas y efectivas de link building, Digital PR y estrategias de autoridad que posicionan tu marca como referente en tu industria.' },
  { icon: '🧠', title: 'IA aplicada al Marketing Digital', desc: 'Herramientas y workflows con inteligencia artificial para automatizar procesos de marketing, generar contenido optimizado y analizar datos a escala.' },
];

const FORMATS = [
  { icon: '🎤', title: 'Keynote', duration: '45-90 min', desc: 'Para eventos y conferencias. Presentaciones de alto impacto con datos reales, casos de estudio y estrategias accionables que tu audiencia puede implementar de inmediato.' },
  { icon: '🏫', title: 'Workshop', duration: '3-8 horas', desc: 'Capacitación práctica e interactiva. Los participantes trabajan en sus propios proyectos mientras aprenden técnicas avanzadas de SEO y marketing digital.' },
  { icon: '💼', title: 'Consultoría in-house', duration: 'Personalizado', desc: 'Para equipos de marketing y desarrollo. Sesiones adaptadas a las necesidades específicas de tu empresa con plan de acción incluido.' },
];

const ADVANTAGES = [
  { number: '01', title: '+15 años de experiencia real en SEO y desarrollo', desc: 'No solo teoría — estrategias probadas en cientos de proyectos reales con resultados medibles.' },
  { number: '02', title: 'He trabajado con Google, Canva, PayPal', desc: 'Experiencia directa con marcas globales que validan mi conocimiento técnico y estratégico.' },
  { number: '03', title: 'Combino teoría con casos reales y datos', desc: 'Cada presentación incluye ejemplos concretos, métricas verificables y herramientas que la audiencia puede usar.' },
  { number: '04', title: 'Bilingüe: conferencias en español e inglés', desc: 'Experiencia presentando ante audiencias internacionales en ambos idiomas con total fluidez.' },
];

export default function ConferencistaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Servicios', url: 'https://josegaspard.dev/services/' },
        { name: 'Conferencista', url: 'https://josegaspard.dev/services/conferencista/' },
      ]} />
      <ServiceJsonLd
        name="Conferencias de SEO y Marketing Digital"
        description="Conferencista y speaker internacional de SEO, marketing digital y tecnología. Keynote speaker disponible para conferencias, workshops y capacitaciones empresariales."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero" style={{ minHeight: '65vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 850, margin: '0 auto' }}>
            <span className="section-badge">Speaker Internacional</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Conferencista de <span style={{ color: '#3b82f6' }}>SEO</span>, Marketing Digital y Tecnología
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: 720, fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7 }}>
              <strong>Keynote speaker</strong> con experiencia en escenarios internacionales. He compartido mi conocimiento en <strong>SEO técnico</strong>, <strong>GEO</strong>, desarrollo web y estrategias de crecimiento digital ante audiencias de cientos de profesionales.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
              <Image
                src="/img/josegaspard.png"
                alt="José Gaspard - Conferencista SEO y Marketing Digital"
                width={200}
                height={200}
                style={{ borderRadius: '50%', border: '3px solid rgba(59, 130, 246, 0.4)', width: 'clamp(120px, 20vw, 200px)', height: 'clamp(120px, 20vw, 200px)', objectFit: 'cover' }}
                priority
              />
            </div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Invítame a tu Evento
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center">
              <span className="section-badge">Trayectoria</span>
              <h2 className="section-title">Mi Experiencia como <span style={{ color: '#3b82f6' }}>Conferencista</span></h2>
            </div>

            {/* Featured Event Card */}
            <div className="glass-card" style={{
              padding: '2.5rem',
              borderImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6) 1',
              borderWidth: 2,
              borderStyle: 'solid',
              marginBottom: '2.5rem',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <span className="section-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Evento Destacado</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.5rem' }}>
                    Warner Play Latino — Febrero 2026
                  </h3>
                  <p style={{ fontSize: '1.15rem', fontWeight: 600, color: '#3b82f6', marginBottom: '1rem' }}>
                    Keynote Speaker: AI & the Future of SEO (GEO)
                  </p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                    Presenté ante una audiencia de profesionales del marketing digital y la industria del entretenimiento cómo la inteligencia artificial está transformando el SEO. Abordé las estrategias de <strong style={{ color: '#f8fafc' }}>Generative Engine Optimization (GEO)</strong>, el futuro del posicionamiento web en la era de la búsqueda por IA, y cómo las marcas de eSports y entretenimiento pueden adaptarse para mantener su visibilidad orgánica. Una <strong style={{ color: '#f8fafc' }}>conferencia de SEO</strong> que combinó datos reales con visión estratégica.
                  </p>
                </div>
                <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <Image
                    src="/img/warner-keynote.jpg"
                    alt="José Gaspard - Keynote Speaker en Warner Play Latino"
                    width={850}
                    height={450}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 12 }}
                  />
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['GEO', 'AI Search', 'eSports SEO', 'Marketing Digital'].map((tag) => (
                    <span key={tag} style={{
                      background: 'rgba(59, 130, 246, 0.15)',
                      color: '#3b82f6',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 20,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Speaking Experience */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'Google Expert - Workshops SEO para empresas mexicanas (2023)', desc: 'Capacitaciones prácticas en SEO técnico y posicionamiento web para empresas mexicanas como parte del programa Google Expert.' },
                { title: 'Capacitaciones corporativas en SEO y marketing digital', desc: 'Formación especializada para equipos de marketing de empresas de diversos sectores, desde startups hasta corporaciones multinacionales.' },
                { title: 'Mentoring para equipos de marketing y desarrollo', desc: 'Acompañamiento personalizado a equipos internos para desarrollar competencias en SEO, analítica web y estrategia de contenido.' },
              ].map((item) => (
                <div key={item.title} className="glass-card" style={{ padding: '1.5rem 2rem', borderLeft: '3px solid #3b82f6' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics I Cover */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Temáticas</span>
              <h2 className="section-title">Temas de Mis <span style={{ color: '#3b82f6' }}>Conferencias</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>
                Cada <strong>charla de SEO</strong> y marketing digital se adapta a tu audiencia. Estos son los temas que domino como <strong>conferencista SEO</strong> y <strong>ponente de marketing digital</strong>.
              </p>
            </div>
            <div className="grid-3">
              {TOPICS.map((topic) => (
                <div key={topic.title} className="glass-card" style={{ padding: '2rem', borderTop: '3px solid #3b82f6' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{topic.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>{topic.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats Available */}
        <section className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">Formatos</span>
              <h2 className="section-title">Formatos <span style={{ color: '#3b82f6' }}>Disponibles</span></h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                Adapto cada <strong>conferencia de marketing</strong> y SEO al formato que mejor se ajuste a tu evento y audiencia.
              </p>
            </div>
            <div className="grid-3">
              {FORMATS.map((format) => (
                <div key={format.title} className="glass-card" style={{ padding: '2rem', textAlign: 'center', borderTop: '3px solid #3b82f6' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{format.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>{format.title}</h3>
                  <span style={{ color: '#3b82f6', fontWeight: 700, fontSize: '0.95rem', display: 'block', marginBottom: '1rem' }}>{format.duration}</span>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{format.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center">
              <span className="section-badge">Diferencial</span>
              <h2 className="section-title">Por Qué Elegirme como <span style={{ color: '#3b82f6' }}>Speaker</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '1.5rem' }}>
              {ADVANTAGES.map((adv) => (
                <div key={adv.number} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '2px solid #3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#3b82f6',
                  }}>
                    {adv.number}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.5rem' }}>{adv.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section">
          <div className="container" style={{ maxWidth: 750 }}>
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', borderTop: '3px solid #3b82f6' }}>
              <div style={{ fontSize: '3rem', opacity: 0.15, marginBottom: 8 }}>&ldquo;</div>
              <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
                &ldquo;José no solo domina el SEO técnico, sabe transmitirlo con claridad y energía. Su keynote en Warner fue reveladora para todo nuestro equipo.&rdquo;
              </p>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1rem' }}>— Equipo Warner Play Latino</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800 }}>
              ¿Buscas un <span style={{ color: '#3b82f6' }}>Conferencista de SEO</span> para tu Evento?
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 650, margin: '1rem auto 2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Disponible para <strong style={{ color: '#f8fafc' }}>conferencias</strong>, workshops, capacitaciones corporativas y webinars. Formato presencial o virtual.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact/" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#000', fontWeight: 700, border: 'none' }}>
                Solicitar Disponibilidad
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/portafolio/" className="btn btn-secondary btn-lg">Ver mi Portafolio</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
