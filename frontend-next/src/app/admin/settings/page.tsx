'use client';
import { useEffect, useState } from 'react';
import { settingsApi } from '@/lib/api';

export default function SettingsPage() {
  const [settings, setSettings] = useState<any[]>([]);
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');

  useEffect(() => { settingsApi.getAll().then(setSettings).catch(() => {}); }, []);

  const handleSave = async (key: string, value: string) => {
    await settingsApi.update(key, value);
    alert('Guardado');
  };

  const handleAdd = async () => {
    if (!newKey) return;
    await settingsApi.update(newKey, newValue);
    setSettings([...settings, { key: newKey, value: newValue }]);
    setNewKey(''); setNewValue('');
  };

  const handleClearCache = async () => {
    await settingsApi.clearCache();
    alert('Cache limpiado');
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 32 }}>Configuración</h1>
      <div className="admin-card" style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>Settings</h2>
        {settings.map((s: any) => (
          <div key={s.key} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'center' }}>
            <span style={{ width: 200, fontSize: '0.9rem', fontWeight: 600 }}>{s.key}</span>
            <input className="form-input" defaultValue={s.value} onBlur={e => handleSave(s.key, e.target.value)} style={{ flex: 1 }} />
          </div>
        ))}
        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          <input className="form-input" placeholder="Nueva clave" value={newKey} onChange={e => setNewKey(e.target.value)} style={{ width: 200 }} />
          <input className="form-input" placeholder="Valor" value={newValue} onChange={e => setNewValue(e.target.value)} style={{ flex: 1 }} />
          <button onClick={handleAdd} className="btn btn-primary btn-sm">Agregar</button>
        </div>
      </div>
      <div className="admin-card">
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>Sistema</h2>
        <button onClick={handleClearCache} className="btn btn-secondary">Limpiar Cache</button>
      </div>
    </div>
  );
}
