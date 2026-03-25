import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog de SEO y Desarrollo Web | José Gaspard',
  description: 'Artículos sobre SEO técnico, desarrollo web, marketing digital y estrategias de crecimiento. Cursos de SEO, optimización web y tendencias 2026.',
  keywords: ['blog seo', 'cursos de seo', 'artículos seo', 'marketing digital', 'desarrollo web', 'seo técnico'],
  alternates: { canonical: 'https://josegaspard.dev/blog/' },
};

const BLOG_POSTS = [
  { slug: 'seo-2026', title: 'SEO en 2026: Tendencias y Estrategias que Dominarán', category: 'SEO', date: '2026-01-15', readTime: 8, description: 'Descubre las tendencias SEO más importantes para 2026: GEO, AI Search, Core Web Vitals y estrategias de posicionamiento web.' },
  { slug: 'technical-seo', title: 'Guía Completa de SEO Técnico para Desarrolladores', category: 'SEO Técnico', date: '2025-12-01', readTime: 12, description: 'Todo lo que un desarrollador web necesita saber sobre SEO técnico: Core Web Vitals, schema markup, rendering y más.' },
  { slug: 'nextjs-guide', title: 'Next.js 15: Guía Completa para Desarrolladores', category: 'Desarrollo Web', date: '2025-11-15', readTime: 10, description: 'Guía práctica de Next.js 15 con App Router, Server Components y optimización SEO. Para programadores y desarrolladores backend.' },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Inicio', url: 'https://josegaspard.dev' }, { name: 'Blog', url: 'https://josegaspard.dev/blog/' }]} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="blob blob-indigo" />
          <div className="container hero-content text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            <span className="section-badge">Blog</span>
            <h1><span className="gradient-text">Blog</span></h1>
            <p className="hero-subtitle" style={{ margin: '0 auto' }}>Artículos sobre SEO técnico, desarrollo web y estrategias de crecimiento digital.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="grid-3">
              {BLOG_POSTS.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="glass-card blog-card">
                  <div className="blog-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', padding: 20 }}>{post.category}</div>
                  <div className="blog-body">
                    <div className="blog-category">{post.category}</div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="blog-meta">
                      <span>{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span>{post.readTime} min lectura</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
