'use client';
import { useState } from 'react';
import { contentApi } from '@/lib/api';

export default function NewContentPage() {
  const [form, setForm] = useState({ title: '', slug: '', type: 'page', status: 'draft', blocks: '[]', coverImage: '', author: 'José Gaspard', category: 'SEO', tags: '', readingTime: 5, layout: '1-column', seo: { metaTitle: '', metaDescription: '', keywords: '', ogImage: '', canonical: '', schemaType: 'WebPage', noIndex: false } });
  const [saving, setSaving] = useState(false);

  const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await contentApi.create({ ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) });
      window.location.href = '/admin/content/';
    } catch (err: any) {
      alert('Error: ' + err.message);
    } finally { setSaving(false); }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 32 }}>Nuevo Contenido</h1>
      <form onSubmit={handleSubmit}>
        <div className="admin-card">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>Información General</h2>
          <div className="form-group">
            <label className="form-label">Título</label>
            <input className="form-input" value={form.title} onChange={e => setForm({...form, title: e.target.value, slug: generateSlug(e.target.value)})} required />
          </div>
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Slug</label>
              <input className="form-input" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">Tipo</label>
              <select className="form-select" value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                <option value="page">Página</option><option value="post">Post</option><option value="portfolio">Portafolio</option><option value="home">Home</option>
              </select>
            </div>
          </div>
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Estado</label>
              <select className="form-select" value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                <option value="draft">Borrador</option><option value="published">Publicado</option><option value="archived">Archivado</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Categoría</label>
              <input className="form-input" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Contenido (JSON blocks)</label>
            <textarea className="form-textarea" value={form.blocks} onChange={e => setForm({...form, blocks: e.target.value})} rows={10} />
          </div>
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Tags (separados por coma)</label>
              <input className="form-input" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Tiempo de lectura (min)</label>
              <input className="form-input" type="number" value={form.readingTime} onChange={e => setForm({...form, readingTime: +e.target.value})} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Imagen de Portada (URL)</label>
            <input className="form-input" value={form.coverImage} onChange={e => setForm({...form, coverImage: e.target.value})} />
          </div>
        </div>

        <div className="admin-card">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>SEO</h2>
          <div className="form-group">
            <label className="form-label">Meta Título</label>
            <input className="form-input" value={form.seo.metaTitle} onChange={e => setForm({...form, seo: {...form.seo, metaTitle: e.target.value}})} />
          </div>
          <div className="form-group">
            <label className="form-label">Meta Descripción</label>
            <textarea className="form-textarea" value={form.seo.metaDescription} onChange={e => setForm({...form, seo: {...form.seo, metaDescription: e.target.value}})} rows={3} />
          </div>
          <div className="form-group">
            <label className="form-label">Keywords</label>
            <input className="form-input" value={form.seo.keywords} onChange={e => setForm({...form, seo: {...form.seo, keywords: e.target.value}})} />
          </div>
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">OG Image (URL)</label>
              <input className="form-input" value={form.seo.ogImage} onChange={e => setForm({...form, seo: {...form.seo, ogImage: e.target.value}})} />
            </div>
            <div className="form-group">
              <label className="form-label">Schema Type</label>
              <select className="form-select" value={form.seo.schemaType} onChange={e => setForm({...form, seo: {...form.seo, schemaType: e.target.value}})}>
                <option value="WebPage">WebPage</option><option value="Article">Article</option><option value="Organization">Organization</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-lg" disabled={saving}>{saving ? 'Guardando...' : 'Crear Contenido'}</button>
      </form>
    </div>
  );
}
