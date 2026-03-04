module.exports=[43210,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i={getOrigin:function(){return s},resolveArray:function(){return a},resolveAsArrayOrUndefined:function(){return n}};for(var r in i)Object.defineProperty(o,r,{enumerable:!0,get:i[r]});function a(e){return Array.isArray(e)?e:[e]}function n(e){if(null!=e)return a(e)}function s(e){let t;if("string"==typeof e)try{t=(e=new URL(e)).origin}catch{}return t}},73552,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i={resolveManifest:function(){return l},resolveRobots:function(){return n},resolveRouteData:function(){return c},resolveSitemap:function(){return s}};for(var r in i)Object.defineProperty(o,r,{enumerable:!0,get:i[r]});let a=e.r(43210);function n(e){let t="";for(let o of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,a.resolveArray)(o.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(o.allow)for(let e of(0,a.resolveArray)(o.allow))t+=`Allow: ${e}
`;if(o.disallow)for(let e of(0,a.resolveArray)(o.disallow))t+=`Disallow: ${e}
`;o.crawlDelay&&(t+=`Crawl-delay: ${o.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,a.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function s(e){let t=e.some(e=>Object.keys(e.alternates??{}).length>0),o=e.some(e=>{var t;return!!(null==(t=e.images)?void 0:t.length)}),i=e.some(e=>{var t;return!!(null==(t=e.videos)?void 0:t.length)}),r="";for(let l of(r+='<?xml version="1.0" encoding="UTF-8"?>\n',r+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',o&&(r+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),i&&(r+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),t?r+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':r+=">\n",e)){var a,n,s;r+="<url>\n",r+=`<loc>${l.url}</loc>
`;let e=null==(a=l.alternates)?void 0:a.languages;if(e&&Object.keys(e).length)for(let t in e)r+=`<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;if(null==(n=l.images)?void 0:n.length)for(let e of l.images)r+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(s=l.videos)?void 0:s.length)for(let e of l.videos)r+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(l.lastModified){let e=l.lastModified instanceof Date?l.lastModified.toISOString():l.lastModified;r+=`<lastmod>${e}</lastmod>
`}l.changeFrequency&&(r+=`<changefreq>${l.changeFrequency}</changefreq>
`),"number"==typeof l.priority&&(r+=`<priority>${l.priority}</priority>
`),r+="</url>\n"}return r+"</urlset>\n"}function l(e){return JSON.stringify(e)}function c(e,t){return"robots"===t?n(e):"sitemap"===t?s(e):"manifest"===t?l(e):""}},2847,e=>{"use strict";var t=e.i(40282),o=e.i(78329),i=e.i(25186),r=e.i(54160),a=e.i(31038),n=e.i(71794),s=e.i(85198),l=e.i(71338),c=e.i(30866),d=e.i(26480),u=e.i(19091),p=e.i(56479),m=e.i(15377),f=e.i(71924),g=e.i(4727),h=e.i(93695);e.i(27453);var v=e.i(65807),y=e.i(93245);let x=[{id:"1",slug:"ecommerce-seo-optimization",title:{es:"Optimización SEO E-commerce - Aumento 400% Tráfico",en:"E-commerce SEO Optimization - 400% Traffic Increase"},description:{es:"Estrategia SEO técnica que multiplicó por 4 el tráfico orgánico de una tienda online en 6 meses.",en:"Technical SEO strategy that quadrupled organic traffic for an online store in 6 months."},longDescription:{es:`Proyecto integral de SEO t\xe9cnico y estrat\xe9gico para un e-commerce de moda en M\xe9xico.
      
## El Desaf\xedo
La tienda ten\xeda problemas de indexaci\xf3n, velocidad de carga lenta (LCP > 4s) y arquitectura de informaci\xf3n deficiente.

## La Soluci\xf3n
1. Reestructuraci\xf3n completa de la arquitectura del sitio
2. Optimizaci\xf3n de Core Web Vitals (LCP < 1.5s)
3. Implementaci\xf3n de schema markup para productos
4. Estrategia de link building con DA 70+

## Resultados
- 400% aumento en tr\xe1fico org\xe1nico
- 250% aumento en conversiones
- Posici\xf3n #1 para 50+ keywords de alta intenci\xf3n`,en:`Comprehensive technical and strategic SEO project for a fashion e-commerce in Mexico.
      
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
- #1 position for 50+ high-intent keywords`},client:"Confidencial",industry:"E-commerce / Moda",year:2024,tags:["SEO Técnico","E-commerce","Core Web Vitals","Link Building"],images:{hero:"/img/portfolio/ecommerce-hero.webp",gallery:["/img/portfolio/ecommerce-1.webp","/img/portfolio/ecommerce-2.webp","/img/portfolio/ecommerce-3.webp"]},results:[{metric:"Tráfico Orgánico",value:"+400%",description:{es:"Aumento en visitas orgánicas en 6 meses",en:"Increase in organic visits in 6 months"}},{metric:"Conversiones",value:"+250%",description:{es:"Mejora en tasa de conversión",en:"Improvement in conversion rate"}},{metric:"Keywords Top 3",value:"50+",description:{es:"Posiciones en el top 3 de Google",en:"Top 3 positions on Google"}}],technologies:["Next.js","WordPress","Schema.org","Ahrefs","SEMrush"],featured:!0,seo:{metaTitle:{es:"Caso de Éxito: SEO E-commerce +400% Tráfico | José Gaspard",en:"Success Case: E-commerce SEO +400% Traffic | José Gaspard"},metaDescription:{es:"Descubre cómo aumenté el tráfico orgánico de un e-commerce en 400% con SEO técnico y estrategia de contenido. Caso de estudio completo.",en:"Discover how I increased an e-commerce organic traffic by 400% with technical SEO and content strategy. Complete case study."},keywords:["seo ecommerce","optimización tienda online","aumento tráfico orgánico","core web vitals"]}},{id:"2",slug:"saas-platform-development",title:{es:"Plataforma SaaS - Desarrollo Full-Stack con Next.js",en:"SaaS Platform - Full-Stack Development with Next.js"},description:{es:"Desarrollo de plataforma SaaS completa con Next.js 15, NestJS y PostgreSQL.",en:"Complete SaaS platform development with Next.js 15, NestJS and PostgreSQL."},longDescription:{es:`Desarrollo full-stack de una plataforma SaaS para gesti\xf3n de proyectos.

## El Desaf\xedo
Crear una plataforma escalable, r\xe1pida y con excelente UX para equipos remotos.

## La Soluci\xf3n
1. Frontend con Next.js 15 y React 19
2. Backend con NestJS y TypeORM
3. Base de datos PostgreSQL optimizada
4. Autenticaci\xf3n JWT + OAuth

## Resultados
- Lighthouse Score: 98/100
- 500+ usuarios activos en 3 meses
- 99.9% uptime`,en:`Full-stack development of a SaaS platform for project management.

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
- 99.9% uptime`},client:"Startup Tech",industry:"SaaS / Tecnología",year:2024,tags:["Next.js","NestJS","PostgreSQL","TypeScript"],images:{hero:"/img/portfolio/saas-hero.webp",gallery:["/img/portfolio/saas-1.webp","/img/portfolio/saas-2.webp"]},results:[{metric:"Performance",value:"98/100",description:{es:"Lighthouse Performance Score",en:"Lighthouse Performance Score"}},{metric:"Usuarios Activos",value:"500+",description:{es:"En los primeros 3 meses",en:"In the first 3 months"}}],technologies:["Next.js 15","NestJS","PostgreSQL","TypeScript","Docker"],url:"https://example.com",featured:!0,seo:{metaTitle:{es:"Desarrollo SaaS con Next.js y NestJS | José Gaspard",en:"SaaS Development with Next.js and NestJS | José Gaspard"},metaDescription:{es:"Caso de éxito: Plataforma SaaS desarrollada con Next.js 15, NestJS y PostgreSQL. Lighthouse 98/100.",en:"Success case: SaaS platform developed with Next.js 15, NestJS and PostgreSQL. Lighthouse 98/100."},keywords:["desarrollo saas","nextjs","nestjs","typescript"]}},{id:"3",slug:"corporate-website-redesign",title:{es:"Rediseño Web Corporativo - SEO + UX Premium",en:"Corporate Website Redesign - SEO + Premium UX"},description:{es:"Rediseño completo de sitio corporativo con enfoque en SEO y experiencia de usuario.",en:"Complete corporate website redesign focused on SEO and user experience."},longDescription:{es:`Redise\xf1o integral de sitio web corporativo para empresa l\xedder en LATAM.

## El Desaf\xedo
Modernizar sitio obsoleto manteniendo posicionamiento SEO existente.

## La Soluci\xf3n
1. Migraci\xf3n a Next.js con SSR
2. Dise\xf1o UX/UI moderno y responsive
3. Optimizaci\xf3n t\xe9cnica SEO
4. Implementaci\xf3n de Analytics avanzado

## Resultados
- 0% p\xe9rdida de tr\xe1fico en migraci\xf3n
- +180% mejora en tiempo de carga
- +95% mejora en mobile experience`,en:`Comprehensive corporate website redesign for leading LATAM company.

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
- +95% improvement in mobile experience`},client:"Empresa Corporativa",industry:"Servicios Profesionales",year:2023,tags:["Rediseño Web","SEO","UX/UI","Next.js"],images:{hero:"/img/portfolio/corporate-hero.webp",gallery:["/img/portfolio/corporate-1.webp"]},results:[{metric:"Velocidad de Carga",value:"+180%",description:{es:"Mejora en tiempo de carga",en:"Loading time improvement"}},{metric:"Mobile Score",value:"95/100",description:{es:"Google Mobile-Friendly Test",en:"Google Mobile-Friendly Test"}}],technologies:["Next.js","TypeScript","Tailwind CSS","Vercel"],featured:!1,seo:{metaTitle:{es:"Rediseño Web Corporativo con Next.js | José Gaspard",en:"Corporate Website Redesign with Next.js | José Gaspard"},metaDescription:{es:"Rediseño web corporativo sin pérdida de tráfico. +180% mejora en velocidad de carga.",en:"Corporate website redesign with zero traffic loss. +180% loading speed improvement."},keywords:["rediseño web","nextjs","seo migration","corporate website"]}}];function w(){let e="https://josegaspard.dev";return[{url:e,lastModified:new Date,changeFrequency:"daily",priority:1},{url:`${e}/portafolio`,lastModified:new Date,changeFrequency:"weekly",priority:.9},{url:`${e}/blog`,lastModified:new Date,changeFrequency:"daily",priority:.8},{url:`${e}/#about`,lastModified:new Date,changeFrequency:"monthly",priority:.7},{url:`${e}/#contact`,lastModified:new Date,changeFrequency:"monthly",priority:.7},...x.map(t=>({url:`${e}/portafolio/${t.slug}`,lastModified:new Date(`${t.year}-12-31`),changeFrequency:"monthly",priority:.8}))]}e.s(["default",()=>w],74947);var S=e.i(73552);async function b(){let e=await w(),t=(0,S.resolveRouteData)(e,"sitemap");return new y.NextResponse(t,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}e.s(["GET",()=>b],73765),e.i(73765),e.i(74947),e.s(["GET",()=>b],32474);var R=e.i(32474);let E=new t.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap--route-entry",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/sitemap--route-entry.js",nextConfigOutput:"",userland:R}),{workAsyncStorage:C,workUnitAsyncStorage:T,serverHooks:O}=E;function A(){return(0,i.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:T})}async function _(e,t,i){E.isDev&&(0,r.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let y="/sitemap.xml/route";y=y.replace(/\/index$/,"")||"/";let x=await E.prepare(e,t,{srcPage:y,multiZoneDraftMode:!1});if(!x)return t.statusCode=400,t.end("Bad Request"),null==i.waitUntil||i.waitUntil.call(i,Promise.resolve()),null;let{buildId:w,params:S,nextConfig:b,parsedUrl:R,isDraftMode:C,prerenderManifest:T,routerServerContext:O,isOnDemandRevalidate:A,revalidateOnlyGenerated:_,resolvedPathname:N,clientReferenceManifest:P,serverActionsManifest:$}=x,j=(0,s.normalizeAppPath)(y),D=!!(T.dynamicRoutes[j]||T.routes[N]),M=async()=>((null==O?void 0:O.render404)?await O.render404(e,t,R,!1):t.end("This page could not be found"),null);if(D&&!C){let e=!!T.routes[N],t=T.dynamicRoutes[j];if(t&&!1===t.fallback&&!e){if(b.experimental.adapterPath)return await M();throw new h.NoFallbackError}}let k=null;!D||E.isDev||C||(k="/index"===(k=N)?"/":k);let q=!0===E.isDev||!D,L=D&&!q;$&&P&&(0,n.setManifestsSingleton)({page:y,clientReferenceManifest:P,serverActionsManifest:$});let U=e.method||"GET",I=(0,a.getTracer)(),F=I.getActiveScopeSpan(),J={params:S,prerenderManifest:T,renderOpts:{experimental:{authInterrupts:!!b.experimental.authInterrupts},cacheComponents:!!b.cacheComponents,supportsDynamicResponse:q,incrementalCache:(0,r.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:b.cacheLife,waitUntil:i.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,o,i,r)=>E.onRequestError(e,t,i,r,O)},sharedContext:{buildId:w}},H=new l.NodeNextRequest(e),z=new l.NodeNextResponse(t),G=c.NextRequestAdapter.fromNodeNextRequest(H,(0,c.signalFromNodeResponse)(t));try{let n=async e=>E.handle(G,J).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let o=I.getRootSpanAttributes();if(!o)return;if(o.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${o.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let i=o.get("next.route");if(i){let t=`${U} ${i}`;e.setAttributes({"next.route":i,"http.route":i,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${y}`)}),s=!!(0,r.getRequestMeta)(e,"minimalMode"),l=async r=>{var a,l;let c=async({previousCacheEntry:o})=>{try{if(!s&&A&&_&&!o)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await n(r);e.fetchMetrics=J.renderOpts.fetchMetrics;let l=J.renderOpts.pendingWaitUntil;l&&i.waitUntil&&(i.waitUntil(l),l=void 0);let c=J.renderOpts.collectedTags;if(!D)return await (0,p.sendResponse)(H,z,a,J.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,m.toNodeOutgoingHttpHeaders)(a.headers);c&&(t[g.NEXT_CACHE_TAGS_HEADER]=c),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let o=void 0!==J.renderOpts.collectedRevalidate&&!(J.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&J.renderOpts.collectedRevalidate,i=void 0===J.renderOpts.collectedExpire||J.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:J.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:o,expire:i}}}}catch(t){throw(null==o?void 0:o.isStale)&&await E.onRequestError(e,t,{routerKind:"App Router",routePath:y,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:L,isOnDemandRevalidate:A})},!1,O),t}},d=await E.handleResponse({req:e,nextConfig:b,cacheKey:k,routeKind:o.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:A,revalidateOnlyGenerated:_,responseGenerator:c,waitUntil:i.waitUntil,isMinimalMode:s});if(!D)return null;if((null==d||null==(a=d.value)?void 0:a.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(l=d.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",A?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let h=(0,m.fromNodeOutgoingHttpHeaders)(d.value.headers);return s&&D||h.delete(g.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||h.get("Cache-Control")||h.set("Cache-Control",(0,f.getCacheControlHeader)(d.cacheControl)),await (0,p.sendResponse)(H,z,new Response(d.value.body,{headers:h,status:d.value.status||200})),null};F?await l(F):await I.withPropagatedContext(e.headers,()=>I.trace(d.BaseServerSpan.handleRequest,{spanName:`${U} ${y}`,kind:a.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof h.NoFallbackError||await E.onRequestError(e,t,{routerKind:"App Router",routePath:j,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:L,isOnDemandRevalidate:A})},!1,O),D)throw t;return await (0,p.sendResponse)(H,z,new Response(null,{status:500})),null}}e.s(["handler",()=>_,"patchFetch",()=>A,"routeModule",()=>E,"serverHooks",()=>O,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>T],2847)}];

//# sourceMappingURL=1ce56_next_dist_de2afb83._.js.map