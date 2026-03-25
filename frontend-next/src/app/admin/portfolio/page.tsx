'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { contentApi } from '@/lib/api';

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => { contentApi.getPortfolio().then(setItems).catch(() => {}); }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Portafolio</h1>
        <Link href="/admin/content/new/" className="btn btn-primary btn-sm">+ Nuevo Proyecto</Link>
      </div>
      <div className="grid-3">
        {items.map((item) => (
          <div key={item.id} className="admin-card">
            <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
            <span className="tag" style={{ marginBottom: 12, display: 'inline-block' }}>{item.status}</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 16 }}>{item.portfolioData?.shortDescription || 'Sin descripción'}</p>
            <Link href={`/admin/content/edit/?id=${item.id}`} className="btn btn-ghost btn-sm">Editar</Link>
          </div>
        ))}
      </div>
      {items.length === 0 && <div className="admin-card" style={{ textAlign: 'center', padding: 40 }}><p style={{ color: 'var(--text-muted)' }}>No hay proyectos de portafolio. Crea uno desde Contenido con tipo &quot;Portafolio&quot;.</p></div>}
    </div>
  );
}
