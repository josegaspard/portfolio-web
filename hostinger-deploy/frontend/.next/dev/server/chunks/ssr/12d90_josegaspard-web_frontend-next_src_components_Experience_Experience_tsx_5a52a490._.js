module.exports = [
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/utils/sanitize.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const experiences = [
    {
        id: 'gestomarketing',
        company: 'GestoMarketing',
        icon: 'fas fa-rocket',
        date: 'July 2024 - Present',
        titleKey: 'gestomarketing_title',
        image: 'https://gestomarketing.com/wp-content/uploads/2021/07/Logo-definitivo-gesto-marketing-png-1200x1200.png',
        descKey: 'gestomarketing_desc',
        modalId: 'modal-gestomarketing'
    },
    {
        id: 'canva',
        company: 'Canva',
        icon: 'fab fa-canva',
        date: 'November 2024 - July 2025',
        titleKey: 'canva_title',
        image: 'https://images.ctfassets.net/kftzwdyauwt9/7lqBnA8Gaz7fvmABCmlQ4x/6ce679925b23e96d410c8b5509480806/Canva.png?w=200&h=200&fit=fill',
        descKey: 'canva_desc',
        modalId: 'modal-canva'
    },
    {
        id: 'google',
        company: 'Google',
        icon: 'fab fa-google',
        date: 'January 2023 - September 2023',
        titleKey: 'google_title',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_\"G\"_logo.svg/1024px-Google_\"G\"_logo.svg.png',
        descKey: 'google_desc',
        modalId: 'modal-google'
    },
    {
        id: 'nebulab',
        company: 'Nebu-lab',
        icon: 'fas fa-flask',
        date: 'July 2023 - July 2024',
        titleKey: 'nebulab_title',
        image: 'https://i.imgur.com/yEWDWnB.png',
        descKey: 'nebulab_desc',
        modalId: 'modal-nebulab'
    },
    {
        id: 'paypal',
        company: 'PayPal',
        icon: 'fab fa-paypal',
        date: 'January 2022 - December 2022',
        titleKey: 'paypal_title',
        image: 'https://cdn-icons-png.flaticon.com/512/825/825488.png',
        descKey: 'paypal_desc',
        modalId: 'modal-paypal'
    },
    {
        id: '3rcore',
        company: '3RCore',
        icon: 'fas fa-chart-line',
        date: 'July 2022 - March 2023',
        titleKey: 'seo_manager',
        image: 'https://i.imgur.com/U8SmfVn.png',
        descKey: 'tricore_desc',
        modalId: 'modal-3rcore'
    },
    {
        id: 'rekrea',
        company: 'Rekrea',
        icon: 'fas fa-tree',
        date: 'October 2020 - March 2023',
        titleKey: 'seo_web_dev_specialist',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT78sbgh4HG3WVSGil00G9IeJqBvOwTV4AOA&s',
        descKey: 'rekrea_desc',
        modalId: 'modal-rekrea'
    },
    {
        id: 'cuartel',
        company: 'Cuartel Media Group',
        icon: 'fas fa-music',
        date: 'April 2019 - March 2023',
        titleKey: 'founder_director',
        image: 'https://i.imgur.com/rKBZSPK.png',
        descKey: 'cuartel_desc',
        modalId: 'modal-cuartel'
    },
    {
        id: 'octonove',
        company: 'Octonove',
        icon: 'fas fa-search',
        date: 'November 2021 - December 2022',
        titleKey: 'seo_specialist',
        image: 'https://i.imgur.com/WP6ZLQj.png',
        descKey: 'octonove_desc',
        modalId: 'modal-octonove'
    },
    {
        id: 'fiverr',
        company: 'Fiverr',
        icon: 'fas fa-globe',
        date: 'January 2020 - Present',
        titleKey: 'web_dev_seo_plugin_dev',
        image: 'https://imgs.search.brave.com/4vfBR2MLWen5QtIVyPbVxpFwp1oc6LAJ3od1BW4YG5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjczOTYw/M3RyYW5zcGFyZW50/LWZpdmVyci1sb2dv/LnBuZw',
        descKey: 'fiverr_desc',
        modalId: 'modal-fiverr'
    },
    {
        id: 'josegaspard',
        company: 'JoseGaspard.dev',
        icon: 'fas fa-user-ninja',
        date: 'January 2019 - Present',
        titleKey: 'josegaspard_dev_title',
        image: '/img/josegaspard.png',
        descKey: 'josegaspard_dev_desc',
        modalId: 'modal-josegaspard'
    }
];
function Experience() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const openModal = (modalId)=>{
        console.log('Open modal:', modalId);
    // We'll implement the actual modal logic later
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section experience-section",
        id: "experience",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title-2line",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "title-line-white",
                            children: "Mi Evolución"
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "title-line-gradient",
                            children: " Profesional"
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                    lineNumber: 144,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl experience-subtitle",
                    dangerouslySetInnerHTML: {
                        __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t('experience_subtitle'))
                    }
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "timeline-premium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "timeline-line"
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, this),
                        experiences.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline-item-premium",
                                "data-aos": i % 2 === 0 ? "fade-right" : "fade-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "timeline-dot-premium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "dot-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                lineNumber: 158,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: exp.image,
                                                alt: exp.company,
                                                className: "company-logo-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                lineNumber: 159,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                        lineNumber: 157,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "timeline-card-premium glass-premium",
                                        onClick: ()=>openModal(exp.modalId),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-header-premium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: exp.image,
                                                        alt: exp.company,
                                                        className: "company-logo-large"
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "header-text",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "company-name-premium",
                                                                children: exp.company
                                                            }, void 0, false, {
                                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "date-badge-premium",
                                                                children: exp.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                lineNumber: 166,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-body-premium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "role-title-premium",
                                                        dangerouslySetInnerHTML: {
                                                            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(exp.titleKey))
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "role-description-premium",
                                                        dangerouslySetInnerHTML: {
                                                            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(exp.descKey))
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                lineNumber: 175,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-footer-premium",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "view-details-link",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-arrow-right"
                                                        }, void 0, false, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 41
                                                        }, this),
                                                        "Ver detalles completos"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                                lineNumber: 181,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, exp.id, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                                lineNumber: 155,
                                columnNumber: 25
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
                    lineNumber: 151,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
            lineNumber: 142,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx",
        lineNumber: 141,
        columnNumber: 9
    }, this);
}
}),
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=12d90_josegaspard-web_frontend-next_src_components_Experience_Experience_tsx_5a52a490._.js.map