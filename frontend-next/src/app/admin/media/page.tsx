'use client';
import { useEffect, useState } from 'react';
import { mediaApi } from '@/lib/api';

export default function MediaPage() {
  const [items, setItems] = useState<any[]>([]);
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  useEffect(() => { mediaApi.getAll().then(setItems).catch(() => {}); }, []);

  const handleAdd = async () => {
    if (!url) return;
    const media = await mediaApi.create({ url, filename: name || url.split('/').pop(), type: 'image' });
    setItems([media, ...items]);
    setUrl(''); setName('');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar?')) return;
    await mediaApi.delete(id);
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 32 }}>Media</h1>
      <div className="admin-card" style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>Agregar Media (URL)</h2>
        <div style={{ display: 'flex', gap: 12 }}>
          <input className="form-input" placeholder="URL de la imagen" value={url} onChange={e => setUrl(e.target.value)} style={{ flex: 1 }} />
          <input className="form-input" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} style={{ width: 200 }} />
          <button onClick={handleAdd} className="btn btn-primary btn-sm">Agregar</button>
        </div>
      </div>
      <div className="grid-4">
        {items.map((item) => (
          <div key={item.id} className="admin-card" style={{ textAlign: 'center' }}>
            <div style={{ height: 120, background: 'var(--bg-tertiary)', borderRadius: 8, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              {item.url ? <img src={item.url} alt={item.filename} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} /> : <span style={{ color: 'var(--text-muted)' }}>Sin preview</span>}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 8 }}>{item.filename}</p>
            <button onClick={() => handleDelete(item.id)} style={{ color: '#ef4444', fontSize: '0.8rem' }}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
