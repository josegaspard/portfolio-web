import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/JsonLd';
import { CommentsSection, NewsletterWidget } from '@/components/BlogClientWidgets';
import { SITE } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

/* ------------------------------------------------------------------ */
/*  BLOG POSTS DATA                                                    */
/* ------------------------------------------------------------------ */

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  keywords: string[];
  headings: { id: string; text: string }[];
  content: string;
}

const POSTS: Record<string, BlogPost> = {
  'seo-2026': {
    title: 'SEO en 2026: Tendencias y Estrategias que Dominarán',
    description:
      'Descubre las tendencias SEO más importantes para 2026: GEO, AI Search, Core Web Vitals, E-E-A-T y estrategias de posicionamiento web para dominar los resultados de búsqueda.',
    date: '2026-01-15',
    readTime: 12,
    category: 'SEO',
    tags: ['SEO', 'GEO', 'Core Web Vitals', 'Link Building', 'IA', 'Posicionamiento Web'],
    keywords: ['servicio de seo', 'optimización seo', 'posicionamiento web', 'agencia seo'],
    headings: [
      { id: 'la-era-de-geo', text: 'La Era de GEO' },
      { id: 'core-web-vitals-en-2026', text: 'Core Web Vitals en 2026' },
      { id: 'eeat-y-autoridad', text: 'E-E-A-T y Autoridad' },
      { id: 'link-building-estrategico', text: 'Link Building Estratégico' },
      { id: 'seo-programatico-con-ia', text: 'SEO Programático con IA' },
      { id: 'conclusion', text: 'Conclusión' },
    ],
    content: `
      <h2 id="la-era-de-geo">La Era de GEO</h2>
      <p>El 2026 marca un antes y un después en la historia del <strong>servicio de SEO</strong>. La Generative Engine Optimization (GEO) ha dejado de ser una predicción para convertirse en una realidad que toda <strong>agencia SEO</strong> debe dominar. Google SGE, Bing Copilot y las respuestas generadas por inteligencia artificial están transformando la forma en que los usuarios interactúan con los motores de búsqueda.</p>
      <p>El concepto de GEO implica optimizar tu contenido no solo para los algoritmos de ranking tradicionales, sino también para los modelos de lenguaje que generan respuestas directas. Esto requiere un enfoque diferente: contenido estructurado con datos verificables, citas con fuentes autoritativas, y una arquitectura de información que facilite la extracción de datos por parte de los LLMs.</p>
      <p>Las empresas que invierten en <strong>optimización SEO</strong> orientada a GEO están viendo un incremento del 40-60% en su visibilidad en las respuestas generativas. La clave está en proporcionar contenido que los modelos de IA consideren confiable, actualizado y relevante para la intención del usuario.</p>

      <h2 id="core-web-vitals-en-2026">Core Web Vitals en 2026</h2>
      <p>Google ha refinado sus métricas de experiencia de usuario en 2026. Los Core Web Vitals ahora incluyen INP (Interaction to Next Paint) como métrica principal, reemplazando definitivamente a FID. Las empresas que buscan un <strong>servicio de SEO</strong> profesional deben priorizar estas métricas técnicas.</p>
      <p>El Largest Contentful Paint (LCP) debe mantenerse por debajo de 2.5 segundos, el INP por debajo de 200 milisegundos, y el Cumulative Layout Shift (CLS) por debajo de 0.1. Estos umbrales no son opcionales: los sitios que no los cumplen pierden posiciones de forma progresiva.</p>
      <p>La adopción de frameworks como Next.js 15 con Server Components ha facilitado enormemente la optimización de Core Web Vitals. El renderizado en servidor reduce el JavaScript enviado al cliente, mejorando dramáticamente el INP y el LCP. Cada <strong>agencia SEO</strong> moderna debe integrar el desarrollo web como parte central de su servicio.</p>
      <p>Herramientas como Lighthouse CI, Web Vitals Extension y CrUX Dashboard son esenciales para monitorear estas métricas en tiempo real y detectar regresiones antes de que afecten al ranking.</p>

      <h2 id="eeat-y-autoridad">E-E-A-T y Autoridad</h2>
      <p>Experience, Expertise, Authoritativeness y Trustworthiness (E-E-A-T) se han convertido en el pilar fundamental del <strong>posicionamiento web</strong> en 2026. Google ahora evalúa la experiencia real del autor mediante análisis de su presencia digital, publicaciones académicas y menciones en medios reconocidos.</p>
      <p>Para sectores YMYL (Your Money, Your Life), como finanzas y salud, los requisitos de E-E-A-T son aún más estrictos. Los autores deben demostrar credenciales verificables, y el contenido debe incluir referencias a estudios y datos actualizados.</p>
      <p>Construir autoridad en 2026 requiere una estrategia multicanal: publicaciones en medios de prestigio, participación en conferencias del sector, colaboraciones con otros expertos y una presencia consistente en redes profesionales. Un <strong>servicio de SEO</strong> integral debe incluir la gestión de la reputación del autor como componente esencial.</p>

      <h2 id="link-building-estrategico">Link Building Estratégico</h2>
      <p>El link building en 2026 ha evolucionado significativamente. Ya no se trata de cantidad sino de calidad y relevancia contextual. Las estrategias de <strong>optimización SEO</strong> exitosas se centran en obtener enlaces de dominios con alta autoridad temática y relevancia geográfica.</p>
      <p>Las técnicas más efectivas incluyen Digital PR con datos originales, estudios de investigación propios, herramientas gratuitas que generan enlaces naturales y colaboraciones estratégicas con líderes de opinión. La clave es crear activos enlazables que aporten valor real.</p>
      <p>El análisis de brechas de enlaces (link gap analysis) permite identificar oportunidades donde los competidores tienen backlinks que tú no. Herramientas como Ahrefs y SEMrush siguen siendo fundamentales para esta labor, pero ahora complementadas con IA para predecir qué enlaces tendrán mayor impacto en el ranking.</p>
      <p>Como <strong>agencia SEO</strong> especializada en link building, recomendamos un enfoque de calidad sobre cantidad: 10 enlaces de dominios DR70+ valen más que 100 enlaces de directorios genéricos.</p>

      <h2 id="seo-programatico-con-ia">SEO Programático con IA</h2>
      <p>El SEO programático potenciado por inteligencia artificial es la tendencia más disruptiva de 2026. La capacidad de generar miles de páginas optimizadas de forma automatizada, con contenido único y valor real para el usuario, está revolucionando el <strong>posicionamiento web</strong>.</p>
      <p>Las herramientas de IA permiten analizar patrones de búsqueda a escala, identificar clusters temáticos y generar estructuras de contenido que cubren exhaustivamente un tema. Sin embargo, la supervisión humana sigue siendo esencial para garantizar la calidad y evitar penalizaciones por contenido de baja calidad.</p>
      <p>La automatización también se aplica al SEO técnico: auditorías automatizadas, detección de errores en tiempo real, generación de schemas dinámicos y optimización de imágenes con IA. Todo esto permite que un <strong>servicio de SEO</strong> sea más eficiente y escalable.</p>

      <h2 id="conclusion">Conclusión</h2>
      <p>El SEO en 2026 exige una combinación de expertise técnico, estrategia de contenido y adaptación a las nuevas tecnologías de IA. Las empresas que buscan una <strong>agencia SEO</strong> deben priorizar partners que dominen tanto el desarrollo web como la estrategia de crecimiento orgánico.</p>
      <p>La clave del éxito en <strong>optimización SEO</strong> este año es la integración: GEO + SEO técnico + contenido de calidad + link building estratégico + automatización inteligente. No se trata de elegir una u otra, sino de combinarlas en una estrategia cohesiva que genere resultados medibles y sostenibles.</p>
    `,
  },

  'technical-seo': {
    title: 'Guía Completa de SEO Técnico para Desarrolladores',
    description:
      'Todo sobre SEO técnico: Core Web Vitals, schema markup, rendering, arquitectura de URLs, JavaScript SEO y herramientas esenciales para desarrolladores web.',
    date: '2025-12-01',
    readTime: 15,
    category: 'SEO Técnico',
    tags: ['SEO Técnico', 'Core Web Vitals', 'Schema Markup', 'JavaScript SEO', 'Desarrollo Web'],
    keywords: ['seo técnico', 'desarrollador web', 'programador', 'desarrollo web'],
    headings: [
      { id: 'que-es-el-seo-tecnico', text: '¿Qué es el SEO Técnico?' },
      { id: 'core-web-vitals', text: 'Core Web Vitals' },
      { id: 'schema-markup', text: 'Schema Markup' },
      { id: 'arquitectura-de-urls', text: 'Arquitectura de URLs' },
      { id: 'rendering-y-javascript', text: 'Rendering y JavaScript' },
      { id: 'herramientas-esenciales', text: 'Herramientas Esenciales' },
      { id: 'checklist-final', text: 'Checklist Final' },
    ],
    content: `
      <h2 id="que-es-el-seo-tecnico">¿Qué es el SEO Técnico?</h2>
      <p>El <strong>SEO técnico</strong> es la disciplina que se encarga de optimizar la infraestructura de un sitio web para que los motores de búsqueda puedan rastrear, indexar y renderizar el contenido de forma eficiente. Como <strong>desarrollador web</strong> y especialista SEO con más de 15 años de experiencia, puedo afirmar que la mayoría de los problemas de ranking tienen un origen técnico.</p>
      <p>A diferencia del SEO de contenido o el link building, el SEO técnico se enfoca en elementos como la velocidad de carga, la arquitectura del sitio, el renderizado de JavaScript, los datos estructurados y la experiencia del usuario. Es la base invisible sobre la que se construye cualquier estrategia de posicionamiento exitosa.</p>
      <p>Un <strong>programador</strong> que entiende SEO técnico tiene una ventaja competitiva enorme: puede implementar optimizaciones directamente en el código, sin depender de plugins o herramientas de terceros que añaden overhead innecesario.</p>

      <h2 id="core-web-vitals">Core Web Vitals</h2>
      <p>Los Core Web Vitals son métricas que Google utiliza para evaluar la experiencia del usuario en tu sitio. Para cualquier <strong>desarrollador web</strong>, dominar estas métricas es imprescindible en 2026.</p>
      <p><strong>LCP (Largest Contentful Paint)</strong> mide el tiempo que tarda el elemento más grande visible en renderizarse. Debe ser inferior a 2.5 segundos. Las causas más comunes de un LCP lento son: imágenes sin optimizar, CSS que bloquea el renderizado, tiempos de respuesta del servidor elevados y carga de JavaScript excesiva.</p>
      <p><strong>INP (Interaction to Next Paint)</strong> reemplazó a FID y mide la latencia de todas las interacciones del usuario durante la visita. El umbral recomendado es inferior a 200ms. Optimizar INP requiere reducir el trabajo del hilo principal, dividir tareas largas con <code>requestIdleCallback</code> y usar Web Workers para operaciones pesadas.</p>
      <p><strong>CLS (Cumulative Layout Shift)</strong> mide la estabilidad visual de la página. Debe mantenerse por debajo de 0.1. Las causas principales son: imágenes sin dimensiones definidas, anuncios dinámicos, fuentes web que causan FOIT/FOUT y contenido inyectado dinámicamente.</p>
      <p>Como <strong>programador</strong> especializado en <strong>desarrollo web</strong>, recomiendo implementar un pipeline de CI/CD que incluya pruebas de Core Web Vitals automáticas con Lighthouse CI para detectar regresiones antes de cada deploy.</p>

      <h2 id="schema-markup">Schema Markup</h2>
      <p>Los datos estructurados (Schema Markup) permiten a Google y otros motores entender el contexto y significado de tu contenido. Implementar JSON-LD correctamente es una de las tareas más rentables en <strong>SEO técnico</strong>.</p>
      <p>Los schemas más importantes para un sitio web profesional incluyen: <code>Organization</code>, <code>Person</code>, <code>WebSite</code>, <code>Article</code>, <code>BreadcrumbList</code>, <code>FAQPage</code> y <code>ProfessionalService</code>. Cada uno proporciona información específica que Google utiliza para generar rich snippets en los resultados de búsqueda.</p>
      <p>La implementación en Next.js es especialmente elegante: puedes crear componentes reutilizables que inyectan el JSON-LD en el <code>&lt;head&gt;</code> de cada página. Esto mantiene el código limpio y facilita el mantenimiento. Todo buen <strong>desarrollador web</strong> debería incluir schemas como parte estándar de su flujo de trabajo.</p>
      <p>Utiliza Google Rich Results Test y Schema Validator para verificar que tu implementación es correcta y completa. Un error en el markup puede invalidar todo el schema y perder la oportunidad de aparecer con rich snippets.</p>

      <h2 id="arquitectura-de-urls">Arquitectura de URLs</h2>
      <p>La arquitectura de URLs es un pilar del <strong>SEO técnico</strong> que muchos <strong>programadores</strong> subestiman. Una estructura de URLs bien diseñada facilita el rastreo por parte de los bots, mejora la distribución del PageRank interno y proporciona señales semánticas sobre la jerarquía del contenido.</p>
      <p>Las mejores prácticas incluyen: URLs descriptivas y cortas (máximo 3-4 niveles de profundidad), uso de guiones para separar palabras, eliminación de parámetros innecesarios, implementación de trailing slashes consistentes y redirecciones 301 correctas para URLs legacy.</p>
      <p>En Next.js 15, el App Router facilita la creación de una arquitectura de URLs limpia mediante carpetas y archivos que mapean directamente a rutas. Esto es una ventaja enorme para el <strong>desarrollo web</strong> orientado a SEO.</p>

      <h2 id="rendering-y-javascript">Rendering y JavaScript</h2>
      <p>El rendering es probablemente el tema más crítico para un <strong>desarrollador web</strong> que trabaja en <strong>SEO técnico</strong>. La elección entre SSR (Server-Side Rendering), SSG (Static Site Generation), ISR (Incremental Static Regeneration) y CSR (Client-Side Rendering) tiene implicaciones directas en la indexación.</p>
      <p>Google puede renderizar JavaScript, pero con limitaciones: utiliza una versión de Chromium con recursos limitados, procesa el JavaScript en una segunda ola de indexación (que puede tardar días o semanas) y tiene un presupuesto de rastreo finito por dominio.</p>
      <p>La recomendación para cualquier <strong>programador</strong> es clara: utiliza SSR o SSG siempre que sea posible. Next.js 15 con Server Components ofrece lo mejor de ambos mundos: renderizado en servidor para el contenido crítico y client components solo para la interactividad.</p>
      <p>Herramientas como Google Search Console (Inspección de URL), Mobile-Friendly Test y la caché de Google permiten verificar cómo Googlebot ve tu página renderizada y detectar problemas de indexación relacionados con JavaScript.</p>

      <h2 id="herramientas-esenciales">Herramientas Esenciales</h2>
      <p>Todo <strong>programador</strong> y <strong>desarrollador web</strong> que trabaje en SEO técnico necesita dominar un conjunto de herramientas especializadas:</p>
      <p><strong>Google Search Console:</strong> La herramienta gratuita más poderosa para monitorear la salud técnica de tu sitio. Informes de indexación, Core Web Vitals, errores de rastreo y rendimiento de búsqueda.</p>
      <p><strong>Screaming Frog:</strong> El estándar de la industria para auditorías técnicas. Permite rastrear hasta 500 URLs gratis e identificar errores 404, cadenas de redirecciones, meta tags duplicados y mucho más.</p>
      <p><strong>Lighthouse:</strong> Integrado en Chrome DevTools, proporciona auditorías de rendimiento, accesibilidad, SEO y mejores prácticas. Esencial para el flujo de <strong>desarrollo web</strong>.</p>
      <p><strong>Ahrefs / SEMrush:</strong> Para análisis de backlinks, auditorías de sitio a escala y monitoreo de keywords. Complementan las herramientas gratuitas de Google con datos propietarios invaluables.</p>

      <h2 id="checklist-final">Checklist Final</h2>
      <p>Para garantizar que tu sitio cumple con los estándares de <strong>SEO técnico</strong> en 2026, verifica estos puntos esenciales:</p>
      <p>1. Core Web Vitals en verde (LCP &lt; 2.5s, INP &lt; 200ms, CLS &lt; 0.1)<br/>
      2. HTTPS implementado correctamente con certificado válido<br/>
      3. Sitemap XML actualizado y enviado a Search Console<br/>
      4. Robots.txt configurado correctamente<br/>
      5. Schema Markup validado sin errores<br/>
      6. URLs canónicas implementadas en todas las páginas<br/>
      7. Redirecciones 301 para URLs legacy<br/>
      8. Imágenes optimizadas con formatos modernos (WebP, AVIF)<br/>
      9. Mobile-first design responsive<br/>
      10. SSR o SSG para contenido indexable</p>
      <p>Como <strong>desarrollador web</strong> especializado en SEO, recomiendo ejecutar esta checklist antes de cada lanzamiento y periódicamente para sitios en producción.</p>
    `,
  },

  'nextjs-guide': {
    title: 'Next.js 15: Guía Completa para Desarrolladores',
    description:
      'Guía práctica de Next.js 15 con App Router, Server Components, optimización SEO, API Routes con NestJS y estrategias de deployment para programadores profesionales.',
    date: '2025-11-15',
    readTime: 14,
    category: 'Desarrollo Web',
    tags: ['Next.js', 'React', 'Server Components', 'App Router', 'NestJS', 'TypeScript'],
    keywords: ['desarrollador web', 'programador', 'desarrollo web profesional', 'desarrollador backend'],
    headings: [
      { id: 'por-que-nextjs', text: '¿Por Qué Next.js?' },
      { id: 'app-router', text: 'App Router' },
      { id: 'server-components', text: 'Server Components' },
      { id: 'seo-con-nextjs', text: 'SEO con Next.js' },
      { id: 'api-routes-con-nestjs', text: 'API Routes con NestJS' },
      { id: 'deployment', text: 'Deployment' },
      { id: 'conclusion-nextjs', text: 'Conclusión' },
    ],
    content: `
      <h2 id="por-que-nextjs">¿Por Qué Next.js?</h2>
      <p>Next.js 15 se ha consolidado como el framework de referencia para cualquier <strong>desarrollador web</strong> que busque rendimiento, SEO y una experiencia de desarrollo moderna. Como <strong>programador</strong> full-stack que ha construido más de 200 sitios web profesionales, puedo afirmar que Next.js ofrece la mejor combinación de productividad y rendimiento del ecosistema React.</p>
      <p>Las ventajas principales incluyen: Server Components nativos que eliminan JavaScript innecesario del cliente, un sistema de rutas basado en archivos intuitivo, optimización automática de imágenes y fuentes, middleware para lógica de edge, y una API de metadata que simplifica enormemente el SEO.</p>
      <p>Para el <strong>desarrollo web profesional</strong>, Next.js 15 resuelve problemas que antes requerían configuraciones complejas: code splitting automático, prefetching inteligente de rutas, streaming de HTML y Suspense boundaries para loading states granulares.</p>

      <h2 id="app-router">App Router</h2>
      <p>El App Router de Next.js 15 representa un cambio de paradigma en cómo un <strong>programador</strong> estructura sus aplicaciones web. A diferencia del Pages Router, utiliza un sistema de carpetas donde cada carpeta es una ruta y archivos especiales (<code>page.tsx</code>, <code>layout.tsx</code>, <code>loading.tsx</code>, <code>error.tsx</code>) controlan el comportamiento de cada segmento.</p>
      <p>Los layouts anidados permiten compartir UI entre rutas sin re-renderizar componentes innecesarios. Esto mejora el rendimiento percibido y reduce la cantidad de JavaScript que el navegador necesita procesar en cada navegación.</p>
      <p>Las rutas dinámicas con <code>[slug]</code> y <code>generateStaticParams</code> permiten generar páginas estáticas en build time mientras se mantiene la flexibilidad de contenido dinámico. Esto es esencial para cualquier estrategia de <strong>desarrollo web profesional</strong> orientada a SEO.</p>
      <p>Route Groups con <code>(nombre)</code> permiten organizar rutas sin afectar la URL, y Parallel Routes con <code>@slot</code> habilitan layouts complejos como dashboards. Un <strong>desarrollador web</strong> que domina estas features puede construir aplicaciones sofisticadas con código limpio y mantenible.</p>

      <h2 id="server-components">Server Components</h2>
      <p>Los React Server Components (RSC) son la innovación más significativa de Next.js 15. Por defecto, todos los componentes en el App Router son Server Components, lo que significa que se renderizan en el servidor y envían HTML puro al cliente sin JavaScript adicional.</p>
      <p>Esto tiene implicaciones enormes para el rendimiento: un <strong>desarrollador backend</strong> puede crear componentes que acceden directamente a bases de datos, APIs internas y el sistema de archivos sin exponer estas operaciones al cliente. El bundle de JavaScript se reduce drásticamente, mejorando los Core Web Vitals.</p>
      <p>Los Client Components (marcados con <code>&apos;use client&apos;</code>) se reservan exclusivamente para interactividad: formularios, estados, efectos y event handlers. La regla de oro para cualquier <strong>programador</strong> es: usa Server Components por defecto y Client Components solo cuando necesites interactividad del navegador.</p>
      <p>El patrón de composición recomendado es pasar Server Components como children de Client Components, manteniendo así la menor cantidad posible de código en el cliente mientras se preserva la interactividad necesaria.</p>

      <h2 id="seo-con-nextjs">SEO con Next.js</h2>
      <p>Next.js 15 ofrece las herramientas más completas del ecosistema para SEO, convirtiendo al <strong>desarrollador web</strong> en un aliado directo del equipo de marketing. La Metadata API permite definir meta tags de forma estática o dinámica con <code>generateMetadata</code>.</p>
      <p>Las funcionalidades SEO nativas incluyen: <code>sitemap.ts</code> para generar sitemaps XML dinámicos, <code>robots.ts</code> para controlar la indexación, <code>opengraph-image.tsx</code> para generar imágenes OG dinámicas con JSX, y headers HTTP optimizados para caché y seguridad.</p>
      <p><code>generateStaticParams</code> permite pre-renderizar páginas dinámicas en build time, garantizando que los bots de búsqueda reciban HTML completo instantáneamente. Combinado con ISR (Incremental Static Regeneration), puedes mantener contenido fresco sin sacrificar rendimiento.</p>
      <p>Para un <strong>desarrollo web profesional</strong> orientado a SEO, Next.js 15 es imbatible: SSR garantiza indexación inmediata, los Server Components reducen el JavaScript del cliente (mejorando Core Web Vitals), y la Metadata API simplifica la gestión de SEO on-page.</p>

      <h2 id="api-routes-con-nestjs">API Routes con NestJS</h2>
      <p>Si bien Next.js incluye Route Handlers para APIs simples, un <strong>desarrollador backend</strong> profesional necesita una solución más robusta para aplicaciones complejas. NestJS es el complemento perfecto: un framework de Node.js con arquitectura modular, inyección de dependencias y decoradores que hacen el código más limpio y testeable.</p>
      <p>La arquitectura recomendada para <strong>desarrollo web profesional</strong> es: Next.js como frontend (SSR/SSG + Client Components) comunicándose con un backend NestJS que maneja la lógica de negocio, autenticación, base de datos y APIs externas.</p>
      <p>NestJS ofrece: módulos para organización del código, guards para autenticación/autorización, pipes para validación, interceptors para transformación de datos, y soporte nativo para WebSockets, GraphQL y microservicios. Como <strong>programador</strong> full-stack, esta combinación me permite entregar aplicaciones enterprise-grade.</p>
      <p>La comunicación entre Next.js y NestJS se realiza típicamente via REST o GraphQL. Con Server Components, las llamadas al backend ocurren en el servidor, eliminando problemas de CORS y reduciendo la latencia para el usuario final.</p>

      <h2 id="deployment">Deployment</h2>
      <p>Next.js 15 ofrece múltiples estrategias de deployment que un <strong>desarrollador web</strong> debe conocer. La opción <code>output: &apos;export&apos;</code> genera un sitio completamente estático que se despliega en cualquier hosting, CDN o servicio de archivos estáticos.</p>
      <p>Para aplicaciones que requieren SSR, Vercel es la plataforma nativa con soporte optimizado para todas las features de Next.js. Alternativas como AWS Amplify, Cloudflare Pages, Netlify y Docker con Node.js ofrecen flexibilidad adicional.</p>
      <p>La configuración de CI/CD es fundamental para el <strong>desarrollo web profesional</strong>: tests automatizados, auditorías de Lighthouse, preview deployments para cada PR y rollbacks automáticos en caso de errores. GitHub Actions combinado con la CLI de tu plataforma de hosting preferida crea un pipeline robusto.</p>
      <p>Para el backend NestJS, Docker es el estándar: contenedores reproducibles que se despliegan en AWS ECS, Google Cloud Run, o cualquier servicio de contenedores. Un <strong>desarrollador backend</strong> moderno debe dominar la containerización como parte esencial de su toolkit.</p>

      <h2 id="conclusion-nextjs">Conclusión</h2>
      <p>Next.js 15 combinado con NestJS representa la stack más completa y profesional para <strong>desarrollo web</strong> en 2026. Server Components, App Router, Metadata API y optimización automática convierten a Next.js en la elección obvia para cualquier <strong>programador</strong> que priorice rendimiento y SEO.</p>
      <p>Como <strong>desarrollador web</strong> y <strong>desarrollador backend</strong> con experiencia en proyectos de todas las escalas, recomiendo esta stack a cualquier equipo que busque construir aplicaciones modernas, rápidas y optimizadas para motores de búsqueda. La inversión en aprender estas tecnologías se traduce directamente en mejores resultados para tus clientes y usuarios.</p>
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: 'Artículo no encontrado' };
  return {
    title: `${post.title} | Blog José Gaspard`,
    description: post.description,
    keywords: [...post.keywords, post.category.toLowerCase(), 'blog seo'],
    alternates: { canonical: `${SITE.url}/blog/${slug}/` },
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Artículo no encontrado</h1>
            <Link href="/blog/" className="btn btn-primary" style={{ marginTop: 24, display: 'inline-block' }}>Volver al Blog</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedSlugs = Object.keys(POSTS).filter((s) => s !== slug);
  const formattedDate = new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', url: SITE.url },
        { name: 'Blog', url: `${SITE.url}/blog/` },
        { name: post.title, url: `${SITE.url}/blog/${slug}/` },
      ]} />
      <ArticleJsonLd title={post.title} description={post.description} datePublished={post.date} image={`${SITE.url}/img/og-default.jpg`} url={`${SITE.url}/blog/${slug}/`} />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero" style={{ minHeight: '40vh', paddingBottom: 0 }}>
          <div className="blob blob-1" />
          <div className="container hero-content" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: '0.85rem', marginBottom: 20, color: 'var(--text-muted)' }}>
              <Link href="/" style={{ color: 'var(--text-muted)' }}>Inicio</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/blog/" style={{ color: 'var(--text-muted)' }}>Blog</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'var(--text-secondary)' }}>{post.title}</span>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
              <span className="tag" style={{ background: '#3b82f6', color: '#fff', padding: '4px 14px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 600 }}>{post.category}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{formattedDate}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{post.readTime} min lectura</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: 24 }}>{post.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Image src="/img/josegaspard.png" alt="José Gaspard" width={56} height={56} style={{ borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <strong style={{ fontSize: '1rem' }}>José Gaspard</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Arquitecto SEO & Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="section" style={{ paddingTop: 40 }}>
          <div className="container" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="blog-layout">
              {/* Article */}
              <div>
                <article style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Inline CTA */}
                <div className="cta-banner" style={{ margin: '48px 0' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 4 }}>¿Necesitas ayuda con {post.category}?</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Agenda una consulta gratuita y analicemos tu proyecto.</p>
                  </div>
                  <Link href="/contact/" className="btn btn-primary btn-sm" style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#fff', border: 'none', fontWeight: 700, whiteSpace: 'nowrap' }}>Contactar</Link>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '32px 0' }}>
                  {post.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* Author Bio */}
                <div className="glass-card" style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                  <Image src="/img/josegaspard.png" alt="José Gaspard" width={80} height={80} style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <strong style={{ fontSize: '1.05rem' }}>José Gaspard</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '4px 0 8px' }}>Consultor SEO & Desarrollador Full-Stack · +15 años de experiencia</p>
                    <Link href="/about/" style={{ color: '#3b82f6', fontSize: '0.85rem', fontWeight: 600 }}>Ver perfil completo →</Link>
                  </div>
                </div>

                {/* Comments */}
                <CommentsSection slug={slug} />
              </div>

              {/* Sidebar */}
              <aside className="blog-sidebar">
                {/* Table of Contents */}
                <div className="sidebar-widget">
                  <h4>Tabla de Contenidos</h4>
                  <ul className="toc-list">
                    {post.headings.map((h) => (
                      <li key={h.id}><a href={`#${h.id}`}>{h.text}</a></li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <NewsletterWidget />

                {/* Related Posts */}
                <div className="sidebar-widget">
                  <h4>Artículos Relacionados</h4>
                  {relatedSlugs.map((rs) => {
                    const rp = POSTS[rs];
                    return (
                      <Link key={rs} href={`/blog/${rs}/`} style={{ display: 'block', marginBottom: 16, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                        <strong style={{ color: 'var(--text)', display: 'block', marginBottom: 2 }}>{rp.title}</strong>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{rp.readTime} min · {rp.category}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Services CTA */}
                <div className="sidebar-widget" style={{ borderTop: '3px solid #3b82f6' }}>
                  <h4>¿Necesitas SEO profesional?</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 16 }}>Mejora tu posicionamiento web con un consultor SEO con +15 años de experiencia.</p>
                  <Link href="/services/" className="btn btn-primary btn-sm" style={{ width: '100%', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#fff', border: 'none', fontWeight: 700 }}>Ver Servicios</Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
