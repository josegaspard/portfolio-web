'use client';
import { useEffect, useState } from 'react';
import { analyticsApi } from '@/lib/api';

export default function AnalyticsPage() {
  const [stats, setStats] = useState<any>(null);
  useEffect(() => { analyticsApi.getStats().then(setStats).catch(() => {}); }, []);

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 32 }}>Analytics</h1>
      {stats ? (
        <>
          <div className="grid-4" style={{ marginBottom: 32 }}>
            {[
              { label: 'Vistas Totales', value: stats.totalViews },
              { label: 'Visitantes Únicos', value: stats.uniqueVisitors },
              { label: 'WhatsApp Clicks', value: stats.whatsappClicks },
              { label: 'Bounce Rate', value: `${stats.bounceRate}%` },
            ].map((s, i) => (
              <div key={i} className="admin-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-indigo)' }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="admin-card">
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>Páginas Más Visitadas</h2>
            <table className="admin-table">
              <thead><tr><th>URL</th><th>Vistas</th></tr></thead>
              <tbody>{stats.topPages?.map((p: any, i: number) => <tr key={i}><td>{p.url}</td><td>{p.views}</td></tr>)}</tbody>
            </table>
          </div>
        </>
      ) : <p style={{ color: 'var(--text-muted)' }}>Cargando analytics...</p>}
    </div>
  );
}
