'use client';
import { useState } from 'react';
import { contentApi } from '@/lib/api';

const CARD_BG = 'rgba(17,24,39,0.4)';
const PRIMARY = '#3b82f6';
const ACCENT = '#f59e0b';

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f9fafb',
  fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#9ca3af',
  marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.03em',
};

const sectionStyle: React.CSSProperties = {
  background: CARD_BG, borderRadius: 12, padding: 28,
  backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 24,
};

function CharCount({ current, recommended, max }: { current: number; recommended?: string; max?: number }) {
  const overMax = max && current > max;
  return (
    <div style={{ fontSize: '0.75rem', color: overMax ? '#ef4444' : '#6b7280', marginTop: 4, textAlign: 'right' }}>
      {current} caracteres{recommended && ` (recomendado: ${recommended})`}
    </div>
  );
}

export default function NewContentPage() {
  const [form, setForm] = useState({
    title: '', slug: '', type: 'page', status: 'draft', blocks: '[]',
    coverImage: '', author: 'José Gaspard', category: 'SEO', tags: '',
    readingTime: 5, layout: '1-column',
    // Portfolio fields
    client: '', shortDescription: '', results: '', technologies: '',
    seo: {
      metaTitle: '', metaDescription: '', keywords: '', ogImage: '',
      canonical: '', schemaType: 'WebPage', noIndex: false,
    },
  });
  const [saving, setSaving] = useState(false);

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload: any = {
        ...form,
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      };
      if (form.type === 'portfolio') {
        payload.client = form.client;
        payload.shortDescription = form.shortDescription;
        payload.results = form.results;
        payload.technologies = form.technologies.split(',').map(t => t.trim()).filter(Boolean);
      }
      await contentApi.create(payload);
      window.location.href = '/admin/content/';
    } catch (err: any) {
      alert('Error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const updateSeo = (field: string, value: any) =>
    setForm({ ...form, seo: { ...form.seo, [field]: value } });

  const seoPreviewTitle = form.seo.metaTitle || form.title || 'Título de la página';
  const seoPreviewUrl = `josegaspard.dev/${form.slug || 'url-de-la-pagina'}`;
  const seoPreviewDesc = form.seo.metaDescription || 'Descripción de la página que aparecerá en los resultados de búsqueda...';

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb' }}>Nuevo Contenido</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Content Section */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>📄</span> Contenido
          </h2>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Título</label>
            <input
              style={inputStyle}
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })}
              placeholder="Título del contenido"
              required
            />
            <CharCount current={form.title.length} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Slug</label>
              <input
                style={inputStyle}
                value={form.slug}
                onChange={e => setForm({ ...form, slug: e.target.value })}
                placeholder="url-slug"
                required
              />
            </div>
            <div>
              <label style={labelStyle}>Tipo</label>
              <select
                style={{ ...inputStyle, cursor: 'pointer' }}
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}
              >
                <option value="page">Página</option>
                <option value="post">Post</option>
                <option value="portfolio">Portafolio</option>
                <option value="home">Home</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>Estado</label>
              <select
                style={{ ...inputStyle, cursor: 'pointer' }}
                value={form.status}
                onChange={e => setForm({ ...form, status: e.target.value })}
              >
                <option value="draft">Borrador</option>
                <option value="published">Publicado</option>
                <option value="archived">Archivado</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Autor</label>
              <input style={inputStyle} value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div style={{ ...sectionStyle, borderLeft: `3px solid ${PRIMARY}` }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>🔍</span> SEO
          </h2>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Meta Título</label>
            <input
              style={{ ...inputStyle, borderColor: form.seo.metaTitle.length > 60 ? '#ef4444' : form.seo.metaTitle.length >= 50 ? '#22c55e' : 'rgba(255,255,255,0.1)' }}
              value={form.seo.metaTitle}
              onChange={e => updateSeo('metaTitle', e.target.value)}
              placeholder="Título optimizado para buscadores"
            />
            <CharCount current={form.seo.metaTitle.length} recommended="50-60" />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Meta Descripción</label>
            <textarea
              style={{ ...inputStyle, minHeight: 80, resize: 'vertical' as const, borderColor: form.seo.metaDescription.length > 160 ? '#ef4444' : form.seo.metaDescription.length >= 150 ? '#22c55e' : 'rgba(255,255,255,0.1)' }}
              value={form.seo.metaDescription}
              onChange={e => updateSeo('metaDescription', e.target.value)}
              placeholder="Descripción que aparecerá en los resultados de búsqueda"
            />
            <CharCount current={form.seo.metaDescription.length} recommended="150-160" />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Keywords (separadas por coma)</label>
            <input
              style={inputStyle}
              value={form.seo.keywords}
              onChange={e => updateSeo('keywords', e.target.value)}
              placeholder="seo, marketing digital, web development"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>OG Image URL</label>
              <input
                style={inputStyle}
                value={form.seo.ogImage}
                onChange={e => updateSeo('ogImage', e.target.value)}
                placeholder="https://..."
              />
              {form.seo.ogImage && (
                <div style={{ marginTop: 8, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={form.seo.ogImage} alt="OG Preview" style={{ width: '100%', height: 120, objectFit: 'cover' }}
                    onError={e => (e.currentTarget.style.display = 'none')} />
                </div>
              )}
            </div>
            <div>
              <label style={labelStyle}>Canonical URL</label>
              <input
                style={inputStyle}
                value={form.seo.canonical}
                onChange={e => updateSeo('canonical', e.target.value)}
                placeholder="https://josegaspard.dev/..."
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Schema Type</label>
              <select
                style={{ ...inputStyle, cursor: 'pointer' }}
                value={form.seo.schemaType}
                onChange={e => updateSeo('schemaType', e.target.value)}
              >
                <option value="WebPage">WebPage</option>
                <option value="Article">Article</option>
                <option value="Organization">Organization</option>
                <option value="BlogPosting">BlogPosting</option>
                <option value="Product">Product</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>noIndex</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
                <button
                  type="button"
                  onClick={() => updateSeo('noIndex', !form.seo.noIndex)}
                  style={{
                    width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
                    background: form.seo.noIndex ? '#ef4444' : 'rgba(255,255,255,0.15)',
                    position: 'relative', transition: 'background 0.2s',
                  }}
                >
                  <span style={{
                    position: 'absolute', top: 2, left: form.seo.noIndex ? 22 : 2,
                    width: 20, height: 20, borderRadius: '50%', background: '#fff',
                    transition: 'left 0.2s',
                  }} />
                </button>
                <span style={{ fontSize: '0.85rem', color: form.seo.noIndex ? '#ef4444' : '#6b7280' }}>
                  {form.seo.noIndex ? 'No indexar' : 'Indexar'}
                </span>
              </div>
            </div>
          </div>

          {/* SEO Preview */}
          <div style={{
            background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: 20,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Vista Previa en Google
            </div>
            <div style={{ fontSize: '1.1rem', color: '#8ab4f8', fontWeight: 500, marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {seoPreviewTitle}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#bdc1c6', marginBottom: 4 }}>
              {seoPreviewUrl}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#9aa0a6', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
              {seoPreviewDesc}
            </div>
          </div>
        </div>

        {/* Content Blocks */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>✍️</span> Bloques de Contenido
          </h2>
          <div>
            <label style={labelStyle}>Contenido (JSON blocks)</label>
            <textarea
              style={{ ...inputStyle, minHeight: 200, fontFamily: 'monospace', fontSize: '0.85rem', resize: 'vertical' as const }}
              value={form.blocks}
              onChange={e => setForm({ ...form, blocks: e.target.value })}
              rows={10}
            />
          </div>
        </div>

        {/* Media Section */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>🖼</span> Media
          </h2>
          <div>
            <label style={labelStyle}>Imagen de Portada (URL)</label>
            <input
              style={inputStyle}
              value={form.coverImage}
              onChange={e => setForm({ ...form, coverImage: e.target.value })}
              placeholder="https://..."
            />
            {form.coverImage && (
              <div style={{ marginTop: 12, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', maxWidth: 400 }}>
                <img src={form.coverImage} alt="Cover Preview" style={{ width: '100%', height: 200, objectFit: 'cover' }}
                  onError={e => (e.currentTarget.style.display = 'none')} />
              </div>
            )}
          </div>
        </div>

        {/* Categorization */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>🏷</span> Categorización
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>Categoría</label>
              <input style={inputStyle} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
            </div>
            <div>
              <label style={labelStyle}>Tags (separados por coma)</label>
              <input style={inputStyle} value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} placeholder="tag1, tag2, tag3" />
            </div>
            <div>
              <label style={labelStyle}>Tiempo de lectura (min)</label>
              <input style={inputStyle} type="number" value={form.readingTime} onChange={e => setForm({ ...form, readingTime: +e.target.value })} />
            </div>
          </div>
        </div>

        {/* Portfolio Section - conditional */}
        {form.type === 'portfolio' && (
          <div style={{ ...sectionStyle, borderLeft: `3px solid ${ACCENT}` }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.2rem' }}>🚀</span> Portfolio
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Cliente</label>
                <input style={inputStyle} value={form.client} onChange={e => setForm({ ...form, client: e.target.value })} placeholder="Nombre del cliente" />
              </div>
              <div>
                <label style={labelStyle}>Tecnologías (separadas por coma)</label>
                <input style={inputStyle} value={form.technologies} onChange={e => setForm({ ...form, technologies: e.target.value })} placeholder="React, Node.js, PostgreSQL" />
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Descripción Corta</label>
              <textarea
                style={{ ...inputStyle, minHeight: 60, resize: 'vertical' as const }}
                value={form.shortDescription}
                onChange={e => setForm({ ...form, shortDescription: e.target.value })}
                placeholder="Breve descripción del proyecto"
              />
            </div>
            <div>
              <label style={labelStyle}>Resultados</label>
              <textarea
                style={{ ...inputStyle, minHeight: 80, resize: 'vertical' as const }}
                value={form.results}
                onChange={e => setForm({ ...form, results: e.target.value })}
                placeholder="Resultados obtenidos"
              />
            </div>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={saving}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px',
            background: saving ? '#6b7280' : PRIMARY, color: '#fff', borderRadius: 10,
            fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: saving ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s', opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? 'Guardando...' : 'Crear Contenido'}
        </button>
      </form>
    </div>
  );
}
