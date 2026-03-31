'use client';
import { useEffect, useState } from 'react';
import { contentApi, settingsApi } from '@/lib/api';

const CARD_BG = 'rgba(17,24,39,0.4)';
const PRIMARY = '#3b82f6';
const ACCENT = '#f59e0b';

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#f9fafb',
  fontSize: '0.9rem', outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#9ca3af',
  marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.03em',
};

const sectionStyle: React.CSSProperties = {
  background: CARD_BG, borderRadius: 12, padding: 28,
  backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 24,
};

function PercentBar({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: '0.85rem', color: '#d1d5db' }}>{label}</span>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color }}>{count}/{total} ({pct}%)</span>
      </div>
      <div style={{ width: '100%', height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 4, background: color, transition: 'width 0.6s ease' }} />
      </div>
    </div>
  );
}

function SkeletonBlock() {
  return (
    <div style={sectionStyle}>
      <div style={{ width: '30%', height: 18, borderRadius: 4, background: 'rgba(255,255,255,0.05)', marginBottom: 20 }} />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} style={{ width: '100%', height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.03)', marginBottom: 12 }} />
      ))}
    </div>
  );
}

export default function SeoPage() {
  const [content, setContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<Record<string, string>>({
    defaultMetaTitleTemplate: '',
    defaultMetaDescription: '',
    googleAnalyticsId: '',
    googleSearchConsoleVerification: '',
    facebookUrl: '',
    twitterHandle: '',
    linkedinUrl: '',
    ogDefaultImage: '',
  });
  const [robotsTxt, setRobotsTxt] = useState('User-agent: *\nAllow: /\n\nSitemap: https://josegaspard.dev/sitemap.xml');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [contentData, settingsData] = await Promise.all([
          contentApi.getAll(),
          settingsApi.getAll(),
        ]);
        setContent(contentData);
        const settingsMap: Record<string, string> = {};
        (settingsData || []).forEach((s: any) => {
          settingsMap[s.key] = s.value;
        });
        setSettings(prev => ({ ...prev, ...settingsMap }));
        if (settingsMap.robotsTxt) setRobotsTxt(settingsMap.robotsTxt);
      } catch {}
      setLoading(false);
    };
    loadData();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const entries = Object.entries(settings);
      for (const [key, value] of entries) {
        if (value) await settingsApi.update(key, value);
      }
      if (robotsTxt) await settingsApi.update('robotsTxt', robotsTxt);
      alert('Configuración SEO guardada');
    } catch {
      alert('Error al guardar');
    } finally {
      setSaving(false);
    }
  };

  const total = content.length;
  const withMetaTitle = content.filter(c => c.seo?.metaTitle).length;
  const withMetaDesc = content.filter(c => c.seo?.metaDescription).length;
  const withKeywords = content.filter(c => c.seo?.keywords).length;
  const withFullSeo = content.filter(c => c.seo?.metaTitle && c.seo?.metaDescription).length;

  const missingMetaTitle = content.filter(c => !c.seo?.metaTitle);
  const missingMetaDesc = content.filter(c => !c.seo?.metaDescription);
  const missingKeywords = content.filter(c => !c.seo?.keywords);

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb', marginBottom: 4 }}>SEO</h1>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Auditoría y configuración SEO global</p>
      </div>

      {loading ? (
        <>
          <SkeletonBlock />
          <SkeletonBlock />
          <SkeletonBlock />
        </>
      ) : (
        <>
          {/* SEO Audit Overview */}
          <div style={sectionStyle}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.2rem' }}>📊</span> Auditoría SEO
            </h2>

            {/* Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
              {[
                { label: 'SEO Completo', value: withFullSeo, color: '#22c55e' },
                { label: 'Sin Meta Título', value: missingMetaTitle.length, color: '#ef4444' },
                { label: 'Sin Meta Desc.', value: missingMetaDesc.length, color: ACCENT },
                { label: 'Sin Keywords', value: missingKeywords.length, color: '#a855f7' },
              ].map((card, i) => (
                <div key={i} style={{
                  padding: '16px 20px', borderRadius: 10, background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${card.color}20`, textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: card.color, marginBottom: 4 }}>{card.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{card.label}</div>
                </div>
              ))}
            </div>

            {/* Progress Bars */}
            <PercentBar label="Contenido con SEO completo" count={withFullSeo} total={total} color="#22c55e" />
            <PercentBar label="Con Meta Título" count={withMetaTitle} total={total} color={PRIMARY} />
            <PercentBar label="Con Meta Descripción" count={withMetaDesc} total={total} color={ACCENT} />
            <PercentBar label="Con Keywords" count={withKeywords} total={total} color="#a855f7" />

            {/* Missing lists */}
            {missingMetaTitle.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ef4444', marginBottom: 12 }}>
                  Páginas sin Meta Título ({missingMetaTitle.length})
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {missingMetaTitle.slice(0, 10).map((c: any) => (
                    <span key={c.id} style={{
                      padding: '4px 12px', borderRadius: 6, fontSize: '0.8rem',
                      background: 'rgba(239,68,68,0.1)', color: '#fca5a5',
                      border: '1px solid rgba(239,68,68,0.2)',
                    }}>
                      {c.title}
                    </span>
                  ))}
                  {missingMetaTitle.length > 10 && (
                    <span style={{ padding: '4px 12px', fontSize: '0.8rem', color: '#6b7280' }}>
                      +{missingMetaTitle.length - 10} más
                    </span>
                  )}
                </div>
              </div>
            )}

            {missingMetaDesc.length > 0 && (
              <div style={{ marginTop: 20 }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: ACCENT, marginBottom: 12 }}>
                  Páginas sin Meta Descripción ({missingMetaDesc.length})
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {missingMetaDesc.slice(0, 10).map((c: any) => (
                    <span key={c.id} style={{
                      padding: '4px 12px', borderRadius: 6, fontSize: '0.8rem',
                      background: `${ACCENT}15`, color: ACCENT,
                      border: `1px solid ${ACCENT}30`,
                    }}>
                      {c.title}
                    </span>
                  ))}
                  {missingMetaDesc.length > 10 && (
                    <span style={{ padding: '4px 12px', fontSize: '0.8rem', color: '#6b7280' }}>
                      +{missingMetaDesc.length - 10} más
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Global SEO Settings */}
          <div style={{ ...sectionStyle, borderLeft: `3px solid ${PRIMARY}` }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.2rem' }}>⚙️</span> Configuración SEO Global
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Template de Meta Título</label>
                <input style={inputStyle} value={settings.defaultMetaTitleTemplate}
                  onChange={e => setSettings({ ...settings, defaultMetaTitleTemplate: e.target.value })}
                  placeholder="%title% | José Gaspard" />
                <div style={{ fontSize: '0.7rem', color: '#6b7280', marginTop: 4 }}>Usa %title% como variable</div>
              </div>
              <div>
                <label style={labelStyle}>Meta Descripción por Defecto</label>
                <input style={inputStyle} value={settings.defaultMetaDescription}
                  onChange={e => setSettings({ ...settings, defaultMetaDescription: e.target.value })}
                  placeholder="Descripción por defecto del sitio" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Google Analytics ID</label>
                <input style={inputStyle} value={settings.googleAnalyticsId}
                  onChange={e => setSettings({ ...settings, googleAnalyticsId: e.target.value })}
                  placeholder="G-XXXXXXXXXX" />
              </div>
              <div>
                <label style={labelStyle}>Google Search Console</label>
                <input style={inputStyle} value={settings.googleSearchConsoleVerification}
                  onChange={e => setSettings({ ...settings, googleSearchConsoleVerification: e.target.value })}
                  placeholder="Código de verificación" />
              </div>
            </div>

            <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#9ca3af', marginBottom: 16, marginTop: 28, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Redes Sociales
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Facebook URL</label>
                <input style={inputStyle} value={settings.facebookUrl}
                  onChange={e => setSettings({ ...settings, facebookUrl: e.target.value })}
                  placeholder="https://facebook.com/..." />
              </div>
              <div>
                <label style={labelStyle}>Twitter Handle</label>
                <input style={inputStyle} value={settings.twitterHandle}
                  onChange={e => setSettings({ ...settings, twitterHandle: e.target.value })}
                  placeholder="@josegaspard" />
              </div>
              <div>
                <label style={labelStyle}>LinkedIn URL</label>
                <input style={inputStyle} value={settings.linkedinUrl}
                  onChange={e => setSettings({ ...settings, linkedinUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/..." />
              </div>
            </div>

            <div>
              <label style={labelStyle}>OG Image por Defecto</label>
              <input style={inputStyle} value={settings.ogDefaultImage}
                onChange={e => setSettings({ ...settings, ogDefaultImage: e.target.value })}
                placeholder="https://josegaspard.dev/og-image.jpg" />
              {settings.ogDefaultImage && (
                <div style={{ marginTop: 8, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', maxWidth: 300 }}>
                  <img src={settings.ogDefaultImage} alt="OG Default" style={{ width: '100%', height: 100, objectFit: 'cover' }}
                    onError={e => (e.currentTarget.style.display = 'none')} />
                </div>
              )}
            </div>
          </div>

          {/* Sitemap & Robots */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            {/* Sitemap */}
            <div style={sectionStyle}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '1.2rem' }}>🗺</span> Sitemap
              </h2>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px',
                  background: `${PRIMARY}15`, border: `1px solid ${PRIMARY}30`, borderRadius: 8,
                  color: PRIMARY, fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                Ver sitemap.xml
              </a>
              <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: 12 }}>
                El sitemap se genera automáticamente con el contenido publicado.
              </p>
            </div>

            {/* Robots.txt */}
            <div style={sectionStyle}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '1.2rem' }}>🤖</span> Robots.txt
              </h2>
              <textarea
                value={robotsTxt}
                onChange={e => setRobotsTxt(e.target.value)}
                style={{
                  ...inputStyle, minHeight: 120, fontFamily: 'monospace', fontSize: '0.85rem',
                  resize: 'vertical' as const,
                }}
              />
            </div>
          </div>

          {/* Save */}
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px',
              background: saving ? '#6b7280' : PRIMARY, color: '#fff', borderRadius: 10,
              fontWeight: 700, fontSize: '0.95rem', border: 'none',
              cursor: saving ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? 'Guardando...' : 'Guardar Configuración SEO'}
          </button>
        </>
      )}
    </div>
  );
}
