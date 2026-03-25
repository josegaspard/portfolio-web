'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { contentApi } from '@/lib/api';

export default function ContentPage() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => { contentApi.getAll().then(setItems).catch(() => {}); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este contenido?')) return;
    await contentApi.delete(id);
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Contenido</h1>
        <Link href="/admin/content/new/" className="btn btn-primary btn-sm">+ Nuevo Contenido</Link>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead><tr><th>Título</th><th>Tipo</th><th>Estado</th><th>Vistas</th><th>Acciones</th></tr></thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td><span className="tag">{item.type}</span></td>
                <td>{item.status}</td>
                <td>{item.viewCount || 0}</td>
                <td style={{ display: 'flex', gap: 8 }}>
                  <Link href={`/admin/content/edit/?id=${item.id}`} className="btn btn-ghost btn-sm">Editar</Link>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-ghost btn-sm" style={{ color: '#ef4444' }}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 && <p style={{ textAlign: 'center', padding: 32, color: 'var(--text-muted)' }}>Sin contenido aún. Crea el primero.</p>}
      </div>
    </div>
  );
}
