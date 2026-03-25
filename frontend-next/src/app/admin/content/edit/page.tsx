'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { contentApi } from '@/lib/api';

export default function EditContentPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [form, setForm] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) contentApi.getById(+id).then(data => setForm({ ...data, tags: (data.tags || []).join(', ') })).catch(() => {});
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !form) return;
    setSaving(true);
    try {
      await contentApi.update(+id, { ...form, tags: form.tags.split(',').map((t: string) => t.trim()).filter(Boolean) });
      window.location.href = '/admin/content/';
    } catch (err: any) { alert('Error: ' + err.message); }
    finally { setSaving(false); }
  };

  if (!form) return <p style={{ color: 'var(--text-muted)' }}>Cargando...</p>;

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 32 }}>Editar: {form.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="admin-card">
          <div className="form-group"><label className="form-label">Título</label><input className="form-input" value={form.title || ''} onChange={e => setForm({...form, title: e.target.value})} required /></div>
          <div className="form-group"><label className="form-label">Slug</label><input className="form-input" value={form.slug || ''} onChange={e => setForm({...form, slug: e.target.value})} required /></div>
          <div className="grid-2">
            <div className="form-group"><label className="form-label">Tipo</label><select className="form-select" value={form.type || 'page'} onChange={e => setForm({...form, type: e.target.value})}><option value="page">Página</option><option value="post">Post</option><option value="portfolio">Portafolio</option></select></div>
            <div className="form-group"><label className="form-label">Estado</label><select className="form-select" value={form.status || 'draft'} onChange={e => setForm({...form, status: e.target.value})}><option value="draft">Borrador</option><option value="published">Publicado</option></select></div>
          </div>
          <div className="form-group"><label className="form-label">Contenido (JSON blocks)</label><textarea className="form-textarea" value={form.blocks || '[]'} onChange={e => setForm({...form, blocks: e.target.value})} rows={10} /></div>
          <div className="form-group"><label className="form-label">Tags</label><input className="form-input" value={form.tags || ''} onChange={e => setForm({...form, tags: e.target.value})} /></div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg" disabled={saving}>{saving ? 'Guardando...' : 'Guardar Cambios'}</button>
      </form>
    </div>
  );
}
