'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { contentApi } from '@/lib/api';

const CARD_BG = 'rgba(17,24,39,0.4)';
const PRIMARY = '#3b82f6';
const ACCENT = '#f59e0b';

type FilterTab = 'all' | 'post' | 'page' | 'portfolio';

const TABS: { key: FilterTab; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'post', label: 'Blog Posts' },
  { key: 'page', label: 'Páginas' },
  { key: 'portfolio', label: 'Portfolio' },
];

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  post: { bg: `${PRIMARY}20`, text: PRIMARY },
  page: { bg: '#22c55e20', text: '#22c55e' },
  portfolio: { bg: `${ACCENT}20`, text: ACCENT },
  home: { bg: '#a855f720', text: '#a855f7' },
};

function SkeletonRow() {
  return (
    <tr>
      {Array.from({ length: 6 }).map((_, i) => (
        <td key={i} style={{ padding: '16px 12px' }}>
          <div style={{ width: i === 0 ? '80%' : '50%', height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }} />
        </td>
      ))}
    </tr>
  );
}

export default function ContentPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterTab>('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<number>>(new Set());

  useEffect(() => {
    contentApi.getAll()
      .then(setItems)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = items.filter(item => {
    const matchFilter = filter === 'all' || item.type === filter;
    const matchSearch = !search || item.title?.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este contenido?')) return;
    await contentApi.delete(id);
    setItems(items.filter(i => i.id !== id));
    selected.delete(id);
    setSelected(new Set(selected));
  };

  const handleBulkDelete = async () => {
    if (selected.size === 0) return;
    if (!confirm(`¿Eliminar ${selected.size} elementos?`)) return;
    await Promise.all(Array.from(selected).map(id => contentApi.delete(id)));
    setItems(items.filter(i => !selected.has(i.id)));
    setSelected(new Set());
  };

  const toggleSelect = (id: number) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const toggleAll = () => {
    if (selected.size === filteredItems.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(filteredItems.map(i => i.id)));
    }
  };

  const hasSeo = (item: any) => !!(item.seo?.metaTitle && item.seo?.metaDescription);

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb' }}>Contenido</h1>
        <Link href="/admin/content/new/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px',
          background: PRIMARY, color: '#fff', borderRadius: 8, fontWeight: 600, fontSize: '0.85rem',
          textDecoration: 'none', transition: 'opacity 0.2s',
        }}>
          + Nuevo Contenido
        </Link>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20, background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: 4 }}>
        {TABS.map(tab => (
          <button key={tab.key} onClick={() => setFilter(tab.key)} style={{
            padding: '8px 20px', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600,
            background: filter === tab.key ? PRIMARY : 'transparent',
            color: filter === tab.key ? '#fff' : '#6b7280',
            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search + Bulk Actions */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#6b7280', fontSize: '0.9rem' }}>🔍</span>
          <input
            type="text"
            placeholder="Buscar contenido..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '10px 12px 10px 36px', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f9fafb',
              fontSize: '0.85rem', outline: 'none',
            }}
          />
        </div>
        {selected.size > 0 && (
          <button onClick={handleBulkDelete} style={{
            padding: '10px 20px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 8, color: '#ef4444', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
          }}>
            Eliminar ({selected.size})
          </button>
        )}
      </div>

      {/* Table */}
      <div style={{ background: CARD_BG, borderRadius: 12, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }} className="admin-table">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <th style={{ padding: '14px 12px', textAlign: 'left', width: 40 }}>
                  <input type="checkbox" checked={filteredItems.length > 0 && selected.size === filteredItems.length}
                    onChange={toggleAll}
                    style={{ accentColor: PRIMARY, cursor: 'pointer' }} />
                </th>
                <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Título</th>
                <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tipo</th>
                <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Estado</th>
                <th style={{ padding: '14px 12px', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SEO</th>
                <th style={{ padding: '14px 12px', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vistas</th>
                <th style={{ padding: '14px 12px', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fecha</th>
                <th style={{ padding: '14px 12px', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />) : filteredItems.map((item) => {
                const typeColor = TYPE_COLORS[item.type] || { bg: 'rgba(255,255,255,0.1)', text: '#9ca3af' };
                const isPublished = item.status === 'published';
                const seoOk = hasSeo(item);
                return (
                  <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.15s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                    <td style={{ padding: '14px 12px' }}>
                      <input type="checkbox" checked={selected.has(item.id)} onChange={() => toggleSelect(item.id)}
                        style={{ accentColor: PRIMARY, cursor: 'pointer' }} />
                    </td>
                    <td style={{ padding: '14px 12px', color: '#f9fafb', fontWeight: 600, fontSize: '0.9rem' }}>
                      {item.title}
                    </td>
                    <td style={{ padding: '14px 12px' }}>
                      <span style={{
                        display: 'inline-block', padding: '4px 10px', borderRadius: 6,
                        background: typeColor.bg, color: typeColor.text, fontSize: '0.75rem', fontWeight: 600,
                      }}>
                        {item.type}
                      </span>
                    </td>
                    <td style={{ padding: '14px 12px' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '4px 10px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 600,
                        background: isPublished ? 'rgba(34,197,94,0.15)' : 'rgba(245,158,11,0.15)',
                        color: isPublished ? '#22c55e' : ACCENT,
                      }}>
                        <span style={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: isPublished ? '#22c55e' : ACCENT,
                        }} />
                        {isPublished ? 'Publicado' : 'Borrador'}
                      </span>
                    </td>
                    <td style={{ padding: '14px 12px', textAlign: 'center' }}>
                      {seoOk ? (
                        <span style={{ color: '#22c55e', fontSize: '1.1rem' }}>✓</span>
                      ) : (
                        <span style={{ color: '#ef4444', fontSize: '1.1rem' }}>✗</span>
                      )}
                    </td>
                    <td style={{ padding: '14px 12px', textAlign: 'right', color: '#9ca3af', fontSize: '0.85rem' }}>
                      {item.viewCount || 0}
                    </td>
                    <td style={{ padding: '14px 12px', textAlign: 'right', color: '#6b7280', fontSize: '0.8rem' }}>
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString('es-MX', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}
                    </td>
                    <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                        <Link href={`/admin/content/edit/?id=${item.id}`} style={{
                          padding: '6px 12px', borderRadius: 6, fontSize: '0.8rem', fontWeight: 600,
                          background: 'rgba(255,255,255,0.05)', color: '#d1d5db', textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.15s',
                        }}>
                          Editar
                        </Link>
                        <button onClick={() => handleDelete(item.id)} style={{
                          padding: '6px 12px', borderRadius: 6, fontSize: '0.8rem', fontWeight: 600,
                          background: 'rgba(239,68,68,0.1)', color: '#ef4444', cursor: 'pointer',
                          border: '1px solid rgba(239,68,68,0.2)', transition: 'background 0.15s',
                        }}>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {!loading && filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 24px', color: '#6b7280' }}>
            <div style={{ fontSize: '2rem', marginBottom: 12 }}>📝</div>
            <p style={{ fontSize: '0.9rem', marginBottom: 4 }}>Sin contenido encontrado</p>
            <p style={{ fontSize: '0.8rem' }}>
              {search ? 'Intenta con otra búsqueda' : 'Crea tu primer contenido'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
