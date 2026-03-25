'use client';
import { useState, useEffect } from 'react';
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

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Link href="/" className="logo" style={{ transition: 'transform 0.3s ease' }}>
            JG<span>.</span>
          </Link>
          <nav className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact/" className="btn btn-primary btn-sm" style={{ marginLeft: 8 }}>
              Hablemos
            </Link>
          </nav>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            style={{ position: 'relative', zIndex: 1001 }}
          >
            <span style={{
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              width: menuOpen ? 22 : 24,
            }} />
            <span style={{
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'translateX(-10px)' : 'none',
            }} />
            <span style={{
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              width: menuOpen ? 22 : 20,
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${menuOpen ? i * 0.08 : 0}s`,
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact/"
          onClick={() => setMenuOpen(false)}
          className="btn btn-primary"
          style={{
            marginTop: 16,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${menuOpen ? NAV_LINKS.length * 0.08 : 0}s`,
          }}
        >
          Hablemos
        </Link>
      </div>
    </>
  );
}
