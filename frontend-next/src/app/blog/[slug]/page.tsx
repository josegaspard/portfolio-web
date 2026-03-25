import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

const POSTS: Record<string, { title: string; description: string; date: string; readTime: number; category: string; content: string }> = {
  'seo-2026': {
    title: 'SEO en 2026: Tendencias y Estrategias que Dominarán',
    description: 'Descubre las tendencias SEO más importantes para 2026: GEO, AI Search, Core Web Vitals y posicionamiento web.',
    date: '2026-01-15', readTime: 8, category: 'SEO',
    content: `<h2>El SEO está evolucionando más rápido que nunca</h2><p>2026 marca un punto de inflexión en el mundo del SEO. La llegada de la Generative Engine Optimization (GEO), la integración de IA en los motores de búsqueda y los cambios en el comportamiento del usuario están redefiniendo cómo las empresas deben abordar su estrategia de posicionamiento web.</p><h2>GEO: La nueva frontera del SEO</h2><p>GEO (Generative Engine Optimization) es la evolución natural del SEO tradicional. Con motores como Google SGE y las respuestas generadas por IA, optimizar para estos sistemas requiere un enfoque diferente: contenido estructurado, autoridad verificable y datos que los modelos de IA puedan procesar eficientemente.</p><h2>Core Web Vitals siguen siendo fundamentales</h2><p>Google continúa priorizando la experiencia del usuario. Los Core Web Vitals — LCP, INP y CLS — siguen siendo factores de ranking esenciales. Las empresas que invierten en optimización técnica obtienen una ventaja competitiva significativa en los resultados de búsqueda.</p><h2>Estrategia recomendada para 2026</h2><p>La clave está en combinar SEO técnico sólido con contenido de alta calidad y una estrategia de link building enfocada en autoridad real. Como consultor SEO, recomiendo un enfoque integral que combine desarrollo web optimizado con estrategia de contenido.</p>`,
  },
  'technical-seo': {
    title: 'Guía Completa de SEO Técnico para Desarrolladores',
    description: 'Todo sobre SEO técnico: Core Web Vitals, schema markup, rendering, indexación y optimización de rendimiento.',
    date: '2025-12-01', readTime: 12, category: 'SEO Técnico',
    content: `<h2>¿Qué es el SEO Técnico?</h2><p>El SEO técnico es la base sobre la cual se construye cualquier estrategia de posicionamiento web exitosa. Como desarrollador web y especialista SEO, puedo afirmar que la mayoría de los problemas de ranking tienen origen técnico.</p><h2>Core Web Vitals: La guía definitiva</h2><p>Los Core Web Vitals son métricas que Google utiliza para evaluar la experiencia del usuario. LCP (Largest Contentful Paint) debe ser menor a 2.5s, INP (Interaction to Next Paint) menor a 200ms, y CLS (Cumulative Layout Shift) menor a 0.1.</p><h2>Schema Markup y datos estructurados</h2><p>Los datos estructurados (JSON-LD) permiten a Google entender mejor el contenido de tu página. Implementar schemas como Organization, Person, FAQPage y Article mejora significativamente la visibilidad en los resultados de búsqueda.</p><h2>Rendering y JavaScript SEO</h2><p>Si usas frameworks como Next.js o Angular, el rendering es crucial. El SSR (Server-Side Rendering) garantiza que Google pueda indexar tu contenido inmediatamente, mientras que el CSR (Client-Side Rendering) puede causar problemas de indexación.</p>`,
  },
  'nextjs-guide': {
    title: 'Next.js 15: Guía Completa para Desarrolladores',
    description: 'Guía práctica de Next.js 15 con App Router, Server Components y optimización SEO para programadores.',
    date: '2025-11-15', readTime: 10, category: 'Desarrollo Web',
    content: `<h2>¿Por qué Next.js 15?</h2><p>Next.js 15 es el framework ideal para desarrolladores web que necesitan rendimiento, SEO y experiencia de desarrollo moderna. Como programador full-stack, lo uso en todos mis proyectos profesionales.</p><h2>App Router y Server Components</h2><p>El App Router de Next.js 15 revoluciona la forma en que construimos aplicaciones web. Los Server Components permiten renderizar en el servidor sin enviar JavaScript innecesario al cliente, mejorando los Core Web Vitals dramáticamente.</p><h2>SEO con Next.js 15</h2><p>Next.js 15 ofrece herramientas nativas para SEO: metadata API para meta tags, generateStaticParams para páginas estáticas, sitemap.ts para sitemaps dinámicos, y robots.ts para control de indexación. Todo optimizado para posicionamiento web.</p><h2>Deployment y rendimiento</h2><p>Con la opción output: 'export', puedes generar un sitio completamente estático que se despliega en cualquier hosting. Combinado con NestJS como backend, tienes una arquitectura full-stack moderna y escalable.</p>`,
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: 'Artículo no encontrado' };
  return {
    title: post.title,
    description: post.description,
    keywords: [post.category.toLowerCase(), 'seo', 'desarrollo web', 'marketing digital'],
    alternates: { canonical: `https://josegaspard.dev/blog/${slug}/` },
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return <div>Artículo no encontrado</div>;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: 'https://josegaspard.dev' },
        { name: 'Blog', url: 'https://josegaspard.dev/blog/' },
        { name: post.title, url: `https://josegaspard.dev/blog/${slug}/` },
      ]} />
      <ArticleJsonLd title={post.title} description={post.description} datePublished={post.date} url={`https://josegaspard.dev/blog/${slug}/`} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '45vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content" style={{ maxWidth: 800, margin: '0 auto' }}>
            <Link href="/blog/" style={{ color: 'var(--accent-indigo)', fontSize: '0.9rem', marginBottom: 16, display: 'inline-block' }}>← Volver al Blog</Link>
            <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>{post.category}</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>{post.title}</h1>
            <div style={{ display: 'flex', gap: 24, color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 16 }}>
              <span>José Gaspard</span>
              <span>{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>{post.readTime} min lectura</span>
            </div>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 40 }}>
          <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <article
              style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div style={{ marginTop: 60, padding: '32px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: 12 }}>¿Necesitas ayuda con SEO?</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>Agenda una consulta gratuita y analicemos tu proyecto.</p>
              <Link href="/contact/" className="btn btn-primary">Contactar</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
