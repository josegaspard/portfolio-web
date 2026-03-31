/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuración para GitHub Pages (Web 100% Estática)
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio-web' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-web/' : '',

    // Optimización de imágenes apagada para exportación estática
    images: {
        unoptimized: true,
    },

    // React Strict Mode
    reactStrictMode: true,

    // Turbopack config (Next.js 16+)
    turbopack: {},

    // Experimental features
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
