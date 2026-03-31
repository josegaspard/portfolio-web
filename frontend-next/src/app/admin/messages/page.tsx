'use client';
import { useEffect, useState } from 'react';
import { contactApi, emailApi } from '@/lib/api';

const CARD_BG = 'rgba(17,24,39,0.4)';
const PRIMARY = '#3b82f6';
const ACCENT = '#f59e0b';

function SkeletonMessage() {
  return (
    <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ flex: 1 }}>
          <div style={{ width: '50%', height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.05)', marginBottom: 6 }} />
          <div style={{ width: '70%', height: 10, borderRadius: 4, background: 'rgba(255,255,255,0.03)' }} />
        </div>
      </div>
    </div>
  );
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [reply, setReply] = useState('');
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contactApi.getAll()
      .then(setMessages)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSelect = (m: any) => {
    setSelected(m);
    setReply('');
    if (!m.read) {
      contactApi.markAsRead(m.id).then(() => {
        setMessages(prev => prev.map(msg => msg.id === m.id ? { ...msg, read: true } : msg));
      });
    }
  };

  const handleReply = async () => {
    if (!selected || !reply.trim()) return;
    setSending(true);
    try {
      await emailApi.sendReply(selected.id, reply);
      setReply('');
      alert('Respuesta enviada');
    } catch {
      alert('Error al enviar respuesta');
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este mensaje?')) return;
    await contactApi.delete(id);
    setMessages(messages.filter(m => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const unreadCount = messages.filter(m => !m.read).length;

  const getInitials = (name: string) => {
    const parts = (name || '').split(' ');
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
      : (name || '?').substring(0, 2).toUpperCase();
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f9fafb', marginBottom: 4 }}>Mensajes</h1>
          <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
            {messages.length} mensajes totales{unreadCount > 0 && ` · ${unreadCount} sin leer`}
          </p>
        </div>
      </div>

      {/* Split View */}
      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 24, alignItems: 'start', minHeight: 600 }}>
        {/* Message List */}
        <div style={{
          background: CARD_BG, borderRadius: 12, backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', maxHeight: 700, display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#9ca3af' }}>
              Bandeja de entrada
              {unreadCount > 0 && (
                <span style={{
                  marginLeft: 8, padding: '2px 8px', borderRadius: 10, fontSize: '0.7rem',
                  fontWeight: 700, background: `${PRIMARY}20`, color: PRIMARY,
                }}>
                  {unreadCount}
                </span>
              )}
            </span>
          </div>
          <div style={{ overflow: 'auto', flex: 1 }}>
            {loading ? Array.from({ length: 5 }).map((_, i) => <SkeletonMessage key={i} />) : messages.length > 0 ? messages.map(m => {
              const isActive = selected?.id === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => handleSelect(m)}
                  style={{
                    padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)',
                    cursor: 'pointer', transition: 'background 0.15s',
                    background: isActive ? `${PRIMARY}15` : 'transparent',
                    borderLeft: isActive ? `3px solid ${PRIMARY}` : '3px solid transparent',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    {/* Unread dot + Avatar */}
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: `${PRIMARY}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.8rem', fontWeight: 700, color: PRIMARY,
                      }}>
                        {getInitials(m.name)}
                      </div>
                      {!m.read && (
                        <div style={{
                          position: 'absolute', top: 0, right: 0,
                          width: 10, height: 10, borderRadius: '50%',
                          background: PRIMARY, border: '2px solid #030712',
                        }} />
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                        <span style={{ fontWeight: m.read ? 500 : 700, color: m.read ? '#d1d5db' : '#f9fafb', fontSize: '0.9rem' }}>
                          {m.name}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: '#6b7280', flexShrink: 0 }}>
                          {m.createdAt ? new Date(m.createdAt).toLocaleDateString('es-MX', { month: 'short', day: 'numeric' }) : ''}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: 4 }}>{m.email}</div>
                      {m.service && (
                        <span style={{
                          display: 'inline-block', padding: '2px 8px', borderRadius: 4,
                          fontSize: '0.7rem', fontWeight: 600,
                          background: `${ACCENT}15`, color: ACCENT, marginBottom: 4,
                        }}>
                          {m.service}
                        </span>
                      )}
                      <div style={{ fontSize: '0.8rem', color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {m.message?.substring(0, 80)}...
                      </div>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <div style={{ padding: 48, textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>📭</div>
                <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Sin mensajes</p>
              </div>
            )}
          </div>
        </div>

        {/* Detail View */}
        <div style={{
          background: CARD_BG, borderRadius: 12, backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.05)', minHeight: 500,
        }}>
          {selected ? (
            <div style={{ padding: 28 }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: `${PRIMARY}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', fontWeight: 700, color: PRIMARY,
                  }}>
                    {getInitials(selected.name)}
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f9fafb', marginBottom: 4 }}>{selected.name}</h2>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                      {selected.email}
                      {selected.service && <span> · {selected.service}</span>}
                      {selected.createdAt && <span> · {new Date(selected.createdAt).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={() => handleDelete(selected.id)}
                    style={{
                      padding: '8px 16px', borderRadius: 8, fontSize: '0.8rem', fontWeight: 600,
                      background: 'rgba(239,68,68,0.1)', color: '#ef4444', cursor: 'pointer',
                      border: '1px solid rgba(239,68,68,0.2)', transition: 'background 0.15s',
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>

              {/* Message Body */}
              <div style={{
                padding: 20, background: 'rgba(255,255,255,0.02)', borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.05)', marginBottom: 28,
              }}>
                <p style={{ color: '#d1d5db', lineHeight: 1.8, fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
                  {selected.message}
                </p>
              </div>

              {/* Reply */}
              <div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f9fafb', marginBottom: 12 }}>Responder</h3>
                <textarea
                  value={reply}
                  onChange={e => setReply(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  style={{
                    width: '100%', minHeight: 120, padding: '14px 16px',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10, color: '#f9fafb', fontSize: '0.9rem', resize: 'vertical' as const,
                    outline: 'none', lineHeight: 1.6,
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
                  <button
                    onClick={handleReply}
                    disabled={sending || !reply.trim()}
                    style={{
                      padding: '10px 24px', borderRadius: 8, fontWeight: 600, fontSize: '0.85rem',
                      background: !reply.trim() ? '#374151' : PRIMARY,
                      color: !reply.trim() ? '#6b7280' : '#fff',
                      border: 'none', cursor: !reply.trim() ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s', opacity: sending ? 0.7 : 1,
                    }}
                  >
                    {sending ? 'Enviando...' : 'Enviar Respuesta'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 500, color: '#6b7280' }}>
              <div style={{ fontSize: '3rem', marginBottom: 16, opacity: 0.5 }}>📨</div>
              <p style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 4 }}>Ningún mensaje seleccionado</p>
              <p style={{ fontSize: '0.85rem' }}>Selecciona un mensaje de la lista para ver los detalles</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
