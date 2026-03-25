'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { removeToken } from '@/lib/api';

const ADMIN_LINKS = [
  { href: '/admin/dashboard/', label: 'Dashboard' },
  { href: '/admin/content/', label: 'Contenido' },
  { href: '/admin/portfolio/', label: 'Portafolio' },
  { href: '/admin/media/', label: 'Media' },
  { href: '/admin/messages/', label: 'Mensajes' },
  { href: '/admin/analytics/', label: 'Analytics' },
  { href: '/admin/settings/', label: 'Configuración' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { window.location.href = '/login/'; return; }
    setReady(true);
  }, []);

  const handleLogout = () => { removeToken(); window.location.href = '/login/'; };

  if (!ready) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando...</div>;

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div style={{ padding: '16px 24px', marginBottom: 24 }}>
          <Link href="/" style={{ fontSize: '1.3rem', fontWeight: 900 }}>JG<span style={{ color: 'var(--accent-indigo)' }}>.</span> Admin</Link>
        </div>
        <nav>
          {ADMIN_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={pathname.startsWith(link.href.replace(/\/$/, '')) ? 'active' : ''}>
              {link.label}
            </Link>
          ))}
          <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 24px', color: '#ef4444', fontSize: '0.9rem', width: '100%', marginTop: 24 }}>
            Cerrar Sesión
          </button>
        </nav>
      </aside>
      <main className="admin-content">{children}</main>
    </div>
  );
}
