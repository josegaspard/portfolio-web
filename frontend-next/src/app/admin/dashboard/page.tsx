'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { dashboardApi } from '@/lib/api';

const CARD_BG = 'rgba(17,24,39,0.4)';
const PRIMARY = '#3b82f6';
const ACCENT = '#f59e0b';
const DARK_BG = '#030712';

const statIcons: Record<string, { icon: string; color: string }> = {
  totalVisitors: { icon: '👁', color: PRIMARY },
  organicTraffic: { icon: '🌱', color: '#22c55e' },
  whatsappClicks: { icon: '💬', color: '#25d366' },
  totalPosts: { icon: '📝', color: ACCENT },
  performanceScore: { icon: '⚡', color: '#a855f7' },
  totalSubscribers: { icon: '📧', color: '#ec4899' },
  seoHealth: { icon: '🔍', color: PRIMARY },
  pendingComments: { icon: '💭', color: '#f97316' },
};

function SkeletonCard() {
  return (
    <div style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.05)', marginBottom: 16 }} />
      <div style={{ width: '60%', height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.05)', marginBottom: 8 }} />
      <div style={{ width: '80%', height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.03)' }} />
    </div>
  );
}

function SeoHealthBar({ value }: { value: number }) {
  const color = value > 80 ? '#22c55e' : value >= 50 ? ACCENT : '#ef4444';
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#9ca3af', marginBottom: 4 }}>
        <span>SEO Health</span>
        <span style={{ color, fontWeight: 700 }}>{value}%</span>
      </div>
      <div style={{ width: '100%', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }}>
        <div style={{ width: `${value}%`, height: '100%', borderRadius: 3, background: color, transition: 'width 0.6s ease' }} />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    dashboardApi.getStats()
      .then(setStats)
      .catch(() => setError('Error al cargar estadísticas'))
      .finally(() => setLoading(false));
  }, []);

  const row1 = [
    { key: 'totalVisitors', label: 'Visitantes Totales', value: stats?.overview?.totalVisitors || 0 },
    { key: 'organicTraffic', label: 'Tráfico Orgánico', value: `${stats?.overview?.organicTraffic || 0}%` },
    { key: 'whatsappClicks', label: 'WhatsApp Clicks', value: stats?.overview?.whatsappClicks || 0 },
    { key: 'totalPosts', label: 'Posts Totales', value: stats?.overview?.totalPosts || 0 },
  ];

  const row2 = [
    { key: 'performanceScore', label: 'Score Rendimiento', value: stats?.overview?.performanceScore || 0 },
    { key: 'totalSubscribers', label: 'Suscriptores', value: stats?.overview?.totalSubscribers || 0 },
    { key: 'seoHealth', label: 'Salud SEO', value: `${stats?.overview?.seoHealth || 0}%` },
    { key: 'pendingComments', label: 'Comentarios Pendientes', value: stats?.overview?.pendingComments || 0 },
  ];

  const seoHealthValue = stats?.overview?.seoHealth || 0;

  const quickActions = [
    { label: 'Nuevo Blog Post', href: '/admin/content/new/', icon: '✏️', color: PRIMARY },
    { label: 'Nuevo Proyecto', href: '/admin/portfolio/', icon: '🚀', color: ACCENT },
    { label: 'Ver Mensajes', href: '/admin/messages/', icon: '📩', color: '#22c55e' },
    { label: 'Ver Analytics', href: '/admin/analytics/', icon: '📊', color: '#a855f7' },
  ];

  const activityIcons: Record<string, string> = {
    content: '📄',
    comment: '💬',
    contact: '📧',
    analytics: '📊',
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb', marginBottom: 4 }}>
          Bienvenido, Admin
        </h1>
        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
          {new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {error && (
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 8, padding: '12px 16px', marginBottom: 24, color: '#ef4444', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      {/* Stats Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
        {loading ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />) : row1.map((s) => {
          const meta = statIcons[s.key];
          return (
            <div key={s.key} style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.borderColor = `${meta.color}33`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 12, width: 40, height: 40, borderRadius: 10, background: `${meta.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {meta.icon}
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb', marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* Stats Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
        {loading ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />) : row2.map((s) => {
          const meta = statIcons[s.key];
          return (
            <div key={s.key} style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.borderColor = `${meta.color}33`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 12, width: 40, height: 40, borderRadius: 10, background: `${meta.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {meta.icon}
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb', marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{s.label}</div>
              {s.key === 'seoHealth' && <SeoHealthBar value={seoHealthValue} />}
            </div>
          );
        })}
      </div>

      {/* Recent Activity + Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        {/* Recent Activity */}
        <div style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20 }}>Actividad Reciente</h2>
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ width: '70%', height: 12, borderRadius: 4, background: 'rgba(255,255,255,0.05)', marginBottom: 6 }} />
                  <div style={{ width: '40%', height: 10, borderRadius: 4, background: 'rgba(255,255,255,0.03)' }} />
                </div>
              </div>
            ))
          ) : stats?.recentActivity?.length ? (
            stats.recentActivity.slice(0, 8).map((a: any) => (
              <div key={a.id} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${PRIMARY}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', flexShrink: 0 }}>
                  {activityIcons[a.type] || '📌'}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.85rem', color: '#d1d5db', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.text}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 2 }}>
                    {new Date(a.timestamp).toLocaleDateString('es-MX', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: '#6b7280', fontSize: '0.85rem', textAlign: 'center', padding: 24 }}>Sin actividad reciente</p>
          )}
        </div>

        {/* Quick Actions */}
        <div style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20 }}>Acciones Rápidas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {quickActions.map((action) => (
              <Link key={action.href} href={action.href} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: '24px 16px', borderRadius: 10,
                background: `${action.color}08`, border: `1px solid ${action.color}20`,
                color: '#d1d5db', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${action.color}15`; (e.currentTarget as HTMLElement).style.borderColor = `${action.color}40`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${action.color}08`; (e.currentTarget as HTMLElement).style.borderColor = `${action.color}20`; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                <span style={{ fontSize: '1.5rem' }}>{action.icon}</span>
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
