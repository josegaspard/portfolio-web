import { SKILLS } from '@/lib/constants';

export function SkillsSection() {
  const categories = [
    { label: 'Frontend & Frameworks', items: SKILLS.frontend },
    { label: 'Backend & Server', items: SKILLS.backend },
    { label: 'SEO & Marketing', items: SKILLS.seo },
    { label: 'Herramientas', items: SKILLS.tools },
    { label: 'CMS', items: SKILLS.cms },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Stack Tecnológico</span>
          <h2 className="section-title">Herramientas &amp; <span className="gradient-text">Tecnologías</span></h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>{cat.label}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {cat.items.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
