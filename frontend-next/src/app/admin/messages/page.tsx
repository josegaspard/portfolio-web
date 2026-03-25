'use client';
import { useEffect, useState } from 'react';
import { contactApi, emailApi } from '@/lib/api';

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [reply, setReply] = useState('');

  useEffect(() => { contactApi.getAll().then(setMessages).catch(() => {}); }, []);

  const handleReply = async () => {
    if (!selected || !reply) return;
    await emailApi.sendReply(selected.id, reply);
    setReply('');
    alert('Respuesta enviada');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar?')) return;
    await contactApi.delete(id);
    setMessages(messages.filter(m => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 32 }}>Mensajes de Contacto</h1>
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <div className="admin-card" style={{ maxHeight: 600, overflow: 'auto' }}>
          {messages.map(m => (
            <div key={m.id} onClick={() => { setSelected(m); contactApi.markAsRead(m.id); }} style={{ padding: 16, borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', background: selected?.id === m.id ? 'var(--bg-card-hover)' : 'transparent' }}>
              <div style={{ fontWeight: m.read ? 400 : 700, marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.email}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 4 }}>{m.message?.substring(0, 80)}...</div>
              <button onClick={(e) => { e.stopPropagation(); handleDelete(m.id); }} style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: 8 }}>Eliminar</button>
            </div>
          ))}
          {messages.length === 0 && <p style={{ padding: 32, textAlign: 'center', color: 'var(--text-muted)' }}>Sin mensajes</p>}
        </div>
        <div className="admin-card">
          {selected ? (
            <>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{selected.name}</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16 }}>{selected.email} · {selected.service} · {new Date(selected.createdAt).toLocaleDateString('es-MX')}</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{selected.message}</p>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 8 }}>Responder</h3>
              <textarea className="form-textarea" value={reply} onChange={e => setReply(e.target.value)} placeholder="Escribe tu respuesta..." />
              <button onClick={handleReply} className="btn btn-primary btn-sm" style={{ marginTop: 12 }}>Enviar Respuesta</button>
            </>
          ) : <p style={{ textAlign: 'center', padding: 32, color: 'var(--text-muted)' }}>Selecciona un mensaje</p>}
        </div>
      </div>
    </div>
  );
}
