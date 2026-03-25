import Link from 'next/link';
import { SITE } from '@/lib/constants';

export function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.06))',
        borderTop: '1px solid rgba(59,130,246,0.12)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        padding: '48px 0',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800,
              color: '#f1f5f9', marginBottom: 6,
            }}>
              ¿Listo para transformar tu negocio?
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              Agenda una consulta gratuita y descubre cómo mejorar tu presencia digital.
            </p>
          </div>
          <Link href="/contact/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 12,
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
            color: '#fff', fontWeight: 700, fontSize: '0.95rem',
            textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(245,158,11,0.25)',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}>
            Agendar consulta gratuita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer" style={{ padding: '56px 0 0' }}>
        <div className="container footer-grid">
          {/* Brand column */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: 12 }}>
              JG<span style={{ color: '#3b82f6' }}>.</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: 16 }}>
              José Gaspard es consultor SEO y desarrollador web full-stack con más de 15 años
              de experiencia. Especializado en posicionamiento web, SEO técnico, link building
              y desarrollo de sitios de alto rendimiento para empresas en México, España y LATAM.
            </p>
            {/* Social - Sígueme */}
            <div>
              <p style={{
                fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase',
                letterSpacing: '0.08em', fontWeight: 600, marginBottom: 10,
              }}>
                Sígueme
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="https://linkedin.com/in/josegaspard" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#9ca3af', fontSize: '0.8rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}>in</a>
                <a href="https://github.com/josegaspard" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#9ca3af', fontSize: '0.8rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}>GH</a>
                <a href="https://twitter.com/josegaspard" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#9ca3af', fontSize: '0.8rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}>X</a>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 style={{ color: '#e5e7eb', fontSize: '0.9rem', fontWeight: 700, marginBottom: 16 }}>Secciones</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><Link href="/about/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Sobre Mí</Link></li>
              <li><Link href="/services/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Servicios</Link></li>
              <li><Link href="/portafolio/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Portafolio</Link></li>
              <li><Link href="/blog/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Blog</Link></li>
              <li><Link href="/contact/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#e5e7eb', fontSize: '0.9rem', fontWeight: 700, marginBottom: 16 }}>Servicios</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><Link href="/services/seo/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>SEO Profesional</Link></li>
              <li><Link href="/services/desarrollo-web/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Desarrollo Web</Link></li>
              <li><Link href="/services/desarrollo-aplicaciones/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Desarrollo de Apps</Link></li>
              <li><Link href="/services/sem/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Campañas SEM</Link></li>
              <li><Link href="/services/conferencista/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Conferencista</Link></li>
              <li><Link href="/services/asesor-seo/" style={{ color: '#9ca3af', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.3s' }}>Asesor SEO</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#e5e7eb', fontSize: '0.9rem', fontWeight: 700, marginBottom: 16 }}>Contacto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ color: '#9ca3af', fontSize: '0.88rem', margin: 0 }}>{SITE.email}</p>
              <p style={{ color: '#9ca3af', fontSize: '0.88rem', margin: 0 }}>{SITE.phone.mx}</p>
              <p style={{ color: '#9ca3af', fontSize: '0.88rem', margin: 0 }}>{SITE.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          marginTop: 48, padding: '20px 0',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          textAlign: 'center',
        }}>
          <p style={{ color: '#4b5563', fontSize: '0.82rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} José Gaspard &mdash; Consultor SEO y Desarrollador Web en México. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
