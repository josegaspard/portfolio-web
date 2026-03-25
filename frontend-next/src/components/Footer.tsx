import Link from 'next/link';
import { SITE } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: 12 }}>JG<span style={{ color: 'var(--accent-indigo)' }}>.</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            José Gaspard es un especialista SEO y desarrollador web con más de 15 años de experiencia ayudando a empresas en México, España y LATAM a dominar Google.
          </p>
        </div>
        <div>
          <h4>Secciones</h4>
          <ul className="footer-links">
            <li><Link href="/about/">Sobre Mí</Link></li>
            <li><Link href="/services/">Servicios</Link></li>
            <li><Link href="/portafolio/">Portafolio</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/contact/">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul className="footer-links">
            <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>SEO Técnico y Estratégico</span></li>
            <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Desarrollo Web Profesional</span></li>
            <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Link Building</span></li>
            <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Consultoría Digital</span></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 8 }}>{SITE.email}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 8 }}>{SITE.phone.mx}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 16 }}>{SITE.location}</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://linkedin.com/in/josegaspard" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>LinkedIn</a>
            <a href="https://github.com/josegaspard" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>GitHub</a>
            <a href="https://twitter.com/josegaspard" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} José Gaspard - Experto SEO y Desarrollador Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
