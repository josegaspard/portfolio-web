'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 0' : '16px 0',
        background: scrolled
          ? 'rgba(3,7,18,0.75)'
          : 'rgba(3,7,18,0.4)',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontSize: '1.4rem', fontWeight: 900, color: '#fff',
            textDecoration: 'none', transition: 'transform 0.3s ease',
          }}>
            JG<span style={{ color: '#3b82f6' }}>.</span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{
            display: 'flex', alignItems: 'center', gap: 8,
          }} className="nav-desktop">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '6px 14px', borderRadius: 8,
                  fontSize: '0.88rem', fontWeight: 500,
                  color: isActive(link.href) ? '#3b82f6' : '#9ca3af',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  background: isActive(link.href) ? 'rgba(59,130,246,0.08)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact/" style={{
              marginLeft: 8,
              padding: '8px 20px', borderRadius: 10,
              background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
              color: '#fff', fontWeight: 700, fontSize: '0.85rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(245,158,11,0.25)',
              transition: 'all 0.3s ease',
            }}>
              Hablemos
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, position: 'relative', zIndex: 1001,
              width: 36, height: 36, alignItems: 'center', justifyContent: 'center',
            }}
          >
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#e5e7eb', borderRadius: 2,
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#e5e7eb', borderRadius: 2,
              transition: 'all 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#e5e7eb', borderRadius: 2,
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed', inset: 0, zIndex: 998,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '85%', maxWidth: 360, zIndex: 999,
        background: 'rgba(3,7,18,0.95)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderLeft: '1px solid rgba(255,255,255,0.06)',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex', flexDirection: 'column',
        padding: '80px 32px 32px',
        overflowY: 'auto',
      }}>
        {/* Close button */}
        <button
          onClick={closeMenu}
          aria-label="Cerrar menú"
          style={{
            position: 'absolute', top: 20, right: 20,
            width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10, cursor: 'pointer',
            color: '#9ca3af', fontSize: '1.2rem',
            transition: 'all 0.3s ease',
          }}
        >
          ✕
        </button>

        {/* Nav links */}
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            style={{
              padding: '14px 0',
              fontSize: '1.1rem', fontWeight: 600,
              color: isActive(link.href) ? '#3b82f6' : '#d1d5db',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${menuOpen ? i * 0.06 : 0}s`,
            }}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile CTA */}
        <Link
          href="/contact/"
          onClick={closeMenu}
          style={{
            marginTop: 24, padding: '14px 24px',
            borderRadius: 12, textAlign: 'center',
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
            color: '#fff', fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(245,158,11,0.25)',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
            transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${menuOpen ? NAV_LINKS.length * 0.06 : 0}s`,
          }}
        >
          Hablemos
        </Link>
      </div>

      {/* Responsive styles */}
      <style>{`
        .nav-desktop {
          display: flex !important;
        }
        .nav-hamburger {
          display: none !important;
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
