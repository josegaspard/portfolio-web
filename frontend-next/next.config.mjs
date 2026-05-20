/** @type {import('next').NextConfig} */
// Si se hace deploy a GitHub Pages (DEPLOY_TARGET=github-pages), aplicar basePath.
// Si se hace deploy a josegaspard.dev (Hostinger u otro) NO aplicar basePath.
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig = {
    // Exportación estática (compatible con GH Pages, Vercel static, Hostinger static)
    output: 'export',
    trailingSlash: true,
    basePath: isGitHubPages ? '/portfolio-web' : '',
    assetPrefix: isGitHubPages ? '/portfolio-web/' : '',

    // Optimización de imágenes apagada para exportación estática
    images: {
        unoptimized: true,
    },

    reactStrictMode: true,

    turbopack: {},

    experimental: {
        optimizeCss: true,
        optimizePackageImports: [
            'framer-motion',
            '@fortawesome/react-fontawesome',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-brands-svg-icons',
        ],
    },
};

export default nextConfig;
