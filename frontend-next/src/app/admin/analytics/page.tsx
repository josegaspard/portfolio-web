'use client';
import { useEffect, useState } from 'react';
import { analyticsApi } from '@/lib/api';

const CARD_BG = 'rgba(17,24,39,0.4)';
const PRIMARY = '#3b82f6';
const ACCENT = '#f59e0b';

function SkeletonCard() {
  return (
    <div style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ width: '40%', height: 12, borderRadius: 4, background: 'rgba(255,255,255,0.05)', marginBottom: 12 }} />
      <div style={{ width: '60%', height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.05)' }} />
    </div>
  );
}

function SkeletonTable() {
  return (
    <div style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ width: '30%', height: 16, borderRadius: 4, background: 'rgba(255,255,255,0.05)', marginBottom: 20 }} />
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          <div style={{ flex: 2, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.04)' }} />
          <div style={{ flex: 1, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.03)' }} />
        </div>
      ))}
    </div>
  );
}

export default function AnalyticsPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    analyticsApi.getStats()
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const topCards = [
    { label: 'Vistas Totales', value: stats?.totalViews || 0, icon: '👁', color: PRIMARY },
    { label: 'Visitantes Únicos', value: stats?.uniqueVisitors || 0, icon: '👤', color: '#22c55e' },
    { label: 'Duración Promedio', value: stats?.avgSessionDuration ? `${Math.round(stats.avgSessionDuration)}s` : '0s', icon: '⏱', color: ACCENT },
    { label: 'Bounce Rate', value: `${stats?.bounceRate || 0}%`, icon: '↩️', color: '#ef4444' },
  ];

  const maxPageViews = stats?.topPages?.reduce((max: number, p: any) => Math.max(max, p.views || 0), 0) || 1;

  // Generate last 7 days chart data
  const chartData = (() => {
    if (!stats?.dailyVisits) return [];
    const days = stats.dailyVisits.slice(-7);
    const maxVisits = days.reduce((max: number, d: any) => Math.max(max, d.visits || 0), 1);
    return days.map((d: any) => ({
      label: new Date(d.date).toLocaleDateString('es-MX', { weekday: 'short' }),
      value: d.visits || 0,
      height: ((d.visits || 0) / maxVisits) * 100,
    }));
  })();

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb', marginBottom: 4 }}>Analytics</h1>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Datos actualizados al {new Date().toLocaleDateString('es-MX', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Top Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
        {loading ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />) : topCards.map((card, i) => (
          <div key={i} style={{
            background: CARD_BG, borderRadius: 12, padding: 24,
            backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)',
            transition: 'transform 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.borderColor = `${card.color}33`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: `${card.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                {card.icon}
              </div>
              <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{card.label}</span>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb' }}>{card.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        {/* Top Pages */}
        {loading ? <SkeletonTable /> : (
          <div style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20 }}>Páginas Más Visitadas</h2>
            {stats?.topPages?.length ? stats.topPages.map((p: any, i: number) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: '0.85rem', color: '#d1d5db', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, marginRight: 12 }}>{p.url}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: PRIMARY, flexShrink: 0 }}>{p.views}</span>
                </div>
                <div style={{ width: '100%', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.05)' }}>
                  <div style={{
                    width: `${(p.views / maxPageViews) * 100}%`, height: '100%', borderRadius: 3,
                    background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY}aa)`, transition: 'width 0.6s ease',
                  }} />
                </div>
              </div>
            )) : <p style={{ color: '#6b7280', fontSize: '0.85rem', textAlign: 'center', padding: 24 }}>Sin datos disponibles</p>}
          </div>
        )}

        {/* Visits by Day Chart */}
        {loading ? <SkeletonTable /> : (
          <div style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20 }}>Visitas por Día</h2>
            {chartData.length > 0 ? (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 180, paddingTop: 20 }}>
                {chartData.map((d: any, i: number) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 600 }}>{d.value}</span>
                    <div style={{
                      width: '100%', maxWidth: 48, borderRadius: '6px 6px 0 0',
                      height: `${Math.max(d.height, 4)}%`,
                      background: `linear-gradient(180deg, ${ACCENT}, ${ACCENT}88)`,
                      transition: 'height 0.6s ease',
                      minHeight: 4,
                    }} />
                    <span style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'capitalize' }}>{d.label}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#6b7280', fontSize: '0.85rem', textAlign: 'center', padding: 24 }}>Sin datos de visitas diarias</p>
            )}
          </div>
        )}
      </div>

      {/* Top Clicks */}
      {loading ? <SkeletonTable /> : (
        <div style={{ background: CARD_BG, borderRadius: 12, padding: 24, backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 20 }}>Top Clicks</h2>
          {stats?.topClicks?.length ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 12 }}>
              {stats.topClicks.map((c: any, i: number) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                  background: 'rgba(255,255,255,0.03)', borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, background: `${ACCENT}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 800, color: ACCENT,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', color: '#d1d5db', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.element || c.url}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{c.clicks} clicks</div>
                  </div>
                </div>
              ))}
            </div>
          ) : <p style={{ color: '#6b7280', fontSize: '0.85rem', textAlign: 'center', padding: 24 }}>Sin datos de clicks</p>}
        </div>
      )}
    </div>
  );
}
