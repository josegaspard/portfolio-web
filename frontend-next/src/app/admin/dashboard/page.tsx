'use client';
import { useEffect, useState } from 'react';
import { dashboardApi } from '@/lib/api';

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    dashboardApi.getStats().then(setStats).catch(() => setError('Error al cargar stats'));
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 32 }}>Dashboard</h1>
      {error && <p style={{ color: '#ef4444' }}>{error}</p>}
      {stats ? (
        <>
          <div className="grid-4" style={{ marginBottom: 32 }}>
            {[
              { label: 'Visitantes Totales', value: stats.overview?.totalVisitors || 0 },
              { label: 'Tráfico Orgánico', value: `${stats.overview?.organicTraffic || 0}%` },
              { label: 'WhatsApp Clicks', value: stats.overview?.whatsappClicks || 0 },
              { label: 'Posts Publicados', value: stats.overview?.totalPosts || 0 },
              { label: 'Score Rendimiento', value: stats.overview?.performanceScore || 0 },
              { label: 'Suscriptores', value: stats.overview?.totalSubscribers || 0 },
              { label: 'Salud SEO', value: `${stats.overview?.seoHealth || 0}%` },
              { label: 'Comentarios Pendientes', value: stats.overview?.pendingComments || 0 },
            ].map((s, i) => (
              <div key={i} className="admin-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-indigo)' }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="admin-card">
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>Actividad Reciente</h2>
            {stats.recentActivity?.length ? stats.recentActivity.map((a: any) => (
              <div key={a.id} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-subtle)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {a.text} — <span style={{ color: 'var(--text-muted)' }}>{new Date(a.timestamp).toLocaleDateString('es-MX')}</span>
              </div>
            )) : <p style={{ color: 'var(--text-muted)' }}>Sin actividad reciente</p>}
          </div>
        </>
      ) : !error && <p style={{ color: 'var(--text-muted)' }}>Cargando...</p>}
    </div>
  );
}
