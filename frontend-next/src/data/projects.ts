export interface Project {
    id: string;
    slug: string;
    title: {
        es: string;
        en: string;
    };
    description: {
        es: string;
        en: string;
    };
    longDescription: {
        es: string;
        en: string;
    };
    client: string;
    industry: string;
    year: number;
    tags: string[];
    images: {
        hero: string;
        gallery: string[];
    };
    results: {
        metric: string;
        value: string;
        description: {
            es: string;
            en: string;
        };
    }[];
    technologies: string[];
    url?: string;
    featured: boolean;
    seo: {
        metaTitle: {
            es: string;
            en: string;
        };
        metaDescription: {
            es: string;
            en: string;
        };
        keywords: string[];
    };
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'ecommerce-seo-optimization',
        title: {
            es: 'Optimización SEO E-commerce - Aumento 400% Tráfico',
            en: 'E-commerce SEO Optimization - 400% Traffic Increase'
        },
        description: {
            es: 'Estrategia SEO técnica que multiplicó por 4 el tráfico orgánico de una tienda online en 6 meses.',
            en: 'Technical SEO strategy that quadrupled organic traffic for an online store in 6 months.'
        },
        longDescription: {
            es: `Proyecto integral de SEO técnico y estratégico para un e-commerce de moda en México.
      
## El Desafío
La tienda tenía problemas de indexación, velocidad de carga lenta (LCP > 4s) y arquitectura de información deficiente.

## La Solución
1. Reestructuración completa de la arquitectura del sitio
2. Optimización de Core Web Vitals (LCP < 1.5s)
3. Implementación de schema markup para productos
4. Estrategia de link building con DA 70+

## Resultados
- 400% aumento en tráfico orgánico
- 250% aumento en conversiones
- Posición #1 para 50+ keywords de alta intención`,
            en: `Comprehensive technical and strategic SEO project for a fashion e-commerce in Mexico.
      
## The Challenge
The store had indexation issues, slow loading speed (LCP > 4s), and poor information architecture.

## The Solution
1. Complete site architecture restructuring
2. Core Web Vitals optimization (LCP < 1.5s)
3. Product schema markup implementation
4. Link building strategy with DA 70+

## Results
- 400% increase in organic traffic
- 250% increase in conversions
- #1 position for 50+ high-intent keywords`
        },
        client: 'Confidencial',
        industry: 'E-commerce / Moda',
        year: 2024,
        tags: ['SEO Técnico', 'E-commerce', 'Core Web Vitals', 'Link Building'],
        images: {
            hero: '/img/portfolio/ecommerce-hero.webp',
            gallery: [
                '/img/portfolio/ecommerce-1.webp',
                '/img/portfolio/ecommerce-2.webp',
                '/img/portfolio/ecommerce-3.webp',
            ]
        },
        results: [
            {
                metric: 'Tráfico Orgánico',
                value: '+400%',
                description: {
                    es: 'Aumento en visitas orgánicas en 6 meses',
                    en: 'Increase in organic visits in 6 months'
                }
            },
            {
                metric: 'Conversiones',
                value: '+250%',
                description: {
                    es: 'Mejora en tasa de conversión',
                    en: 'Improvement in conversion rate'
                }
            },
            {
                metric: 'Keywords Top 3',
                value: '50+',
                description: {
                    es: 'Posiciones en el top 3 de Google',
                    en: 'Top 3 positions on Google'
                }
            }
        ],
        technologies: ['Next.js', 'WordPress', 'Schema.org', 'Ahrefs', 'SEMrush'],
        featured: true,
        seo: {
            metaTitle: {
                es: 'Caso de Éxito: SEO E-commerce +400% Tráfico | José Gaspard',
                en: 'Success Case: E-commerce SEO +400% Traffic | José Gaspard'
            },
            metaDescription: {
                es: 'Descubre cómo aumenté el tráfico orgánico de un e-commerce en 400% con SEO técnico y estrategia de contenido. Caso de estudio completo.',
                en: 'Discover how I increased an e-commerce organic traffic by 400% with technical SEO and content strategy. Complete case study.'
            },
            keywords: ['seo ecommerce', 'optimización tienda online', 'aumento tráfico orgánico', 'core web vitals']
        }
    },
    {
        id: '2',
        slug: 'saas-platform-development',
        title: {
            es: 'Plataforma SaaS - Desarrollo Full-Stack con Next.js',
            en: 'SaaS Platform - Full-Stack Development with Next.js'
        },
        description: {
            es: 'Desarrollo de plataforma SaaS completa con Next.js 15, NestJS y PostgreSQL.',
            en: 'Complete SaaS platform development with Next.js 15, NestJS and PostgreSQL.'
        },
        longDescription: {
            es: `Desarrollo full-stack de una plataforma SaaS para gestión de proyectos.

## El Desafío
Crear una plataforma escalable, rápida y con excelente UX para equipos remotos.

## La Solución
1. Frontend con Next.js 15 y React 19
2. Backend con NestJS y TypeORM
3. Base de datos PostgreSQL optimizada
4. Autenticación JWT + OAuth

## Resultados
- Lighthouse Score: 98/100
- 500+ usuarios activos en 3 meses
- 99.9% uptime`,
            en: `Full-stack development of a SaaS platform for project management.

## The Challenge
Create a scalable, fast platform with excellent UX for remote teams.

## The Solution
1. Frontend with Next.js 15 and React 19
2. Backend with NestJS and TypeORM
3. Optimized PostgreSQL database
4. JWT + OAuth authentication

## Results
- Lighthouse Score: 98/100
- 500+ active users in 3 months
- 99.9% uptime`
        },
        client: 'Startup Tech',
        industry: 'SaaS / Tecnología',
        year: 2024,
        tags: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
        images: {
            hero: '/img/portfolio/saas-hero.webp',
            gallery: [
                '/img/portfolio/saas-1.webp',
                '/img/portfolio/saas-2.webp',
            ]
        },
        results: [
            {
                metric: 'Performance',
                value: '98/100',
                description: {
                    es: 'Lighthouse Performance Score',
                    en: 'Lighthouse Performance Score'
                }
            },
            {
                metric: 'Usuarios Activos',
                value: '500+',
                description: {
                    es: 'En los primeros 3 meses',
                    en: 'In the first 3 months'
                }
            }
        ],
        technologies: ['Next.js 15', 'NestJS', 'PostgreSQL', 'TypeScript', 'Docker'],
        url: 'https://example.com',
        featured: true,
        seo: {
            metaTitle: {
                es: 'Desarrollo SaaS con Next.js y NestJS | José Gaspard',
                en: 'SaaS Development with Next.js and NestJS | José Gaspard'
            },
            metaDescription: {
                es: 'Caso de éxito: Plataforma SaaS desarrollada con Next.js 15, NestJS y PostgreSQL. Lighthouse 98/100.',
                en: 'Success case: SaaS platform developed with Next.js 15, NestJS and PostgreSQL. Lighthouse 98/100.'
            },
            keywords: ['desarrollo saas', 'nextjs', 'nestjs', 'typescript']
        }
    },
    {
        id: '3',
        slug: 'corporate-website-redesign',
        title: {
            es: 'Rediseño Web Corporativo - SEO + UX Premium',
            en: 'Corporate Website Redesign - SEO + Premium UX'
        },
        description: {
            es: 'Rediseño completo de sitio corporativo con enfoque en SEO y experiencia de usuario.',
            en: 'Complete corporate website redesign focused on SEO and user experience.'
        },
        longDescription: {
            es: `Rediseño integral de sitio web corporativo para empresa líder en LATAM.

## El Desafío
Modernizar sitio obsoleto manteniendo posicionamiento SEO existente.

## La Solución
1. Migración a Next.js con SSR
2. Diseño UX/UI moderno y responsive
3. Optimización técnica SEO
4. Implementación de Analytics avanzado

## Resultados
- 0% pérdida de tráfico en migración
- +180% mejora en tiempo de carga
- +95% mejora en mobile experience`,
            en: `Comprehensive corporate website redesign for leading LATAM company.

## The Challenge
Modernize obsolete site while maintaining existing SEO rankings.

## The Solution
1. Migration to Next.js with SSR
2. Modern and responsive UX/UI design
3. Technical SEO optimization
4. Advanced Analytics implementation

## Results
- 0% traffic loss in migration
- +180% improvement in loading time
- +95% improvement in mobile experience`
        },
        client: 'Empresa Corporativa',
        industry: 'Servicios Profesionales',
        year: 2023,
        tags: ['Rediseño Web', 'SEO', 'UX/UI', 'Next.js'],
        images: {
            hero: '/img/portfolio/corporate-hero.webp',
            gallery: [
                '/img/portfolio/corporate-1.webp',
            ]
        },
        results: [
            {
                metric: 'Velocidad de Carga',
                value: '+180%',
                description: {
                    es: 'Mejora en tiempo de carga',
                    en: 'Loading time improvement'
                }
            },
            {
                metric: 'Mobile Score',
                value: '95/100',
                description: {
                    es: 'Google Mobile-Friendly Test',
                    en: 'Google Mobile-Friendly Test'
                }
            }
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        featured: false,
        seo: {
            metaTitle: {
                es: 'Rediseño Web Corporativo con Next.js | José Gaspard',
                en: 'Corporate Website Redesign with Next.js | José Gaspard'
            },
            metaDescription: {
                es: 'Rediseño web corporativo sin pérdida de tráfico. +180% mejora en velocidad de carga.',
                en: 'Corporate website redesign with zero traffic loss. +180% loading speed improvement.'
            },
            keywords: ['rediseño web', 'nextjs', 'seo migration', 'corporate website']
        }
    }
];
