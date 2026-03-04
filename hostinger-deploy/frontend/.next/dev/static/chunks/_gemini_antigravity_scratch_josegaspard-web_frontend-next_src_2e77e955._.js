(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Hero() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isClient, setIsClient] = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Hero.useEffect": ()=>{
            setIsClient(true);
        }
    }["Hero.useEffect"], []);
    // Animaciones para las achievement cards
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };
    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };
    const floatVariants = {
        animate: {
            y: [
                0,
                -15,
                0
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    const achievements = [
        {
            icon: "fas fa-rocket",
            label: t('hero_metric_1_label'),
            value: t('hero_metric_1_value'),
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: "fas fa-chart-line",
            label: t('hero_metric_2_label'),
            value: t('hero_metric_2_value'),
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: "fas fa-link",
            label: t('hero_metric_3_label'),
            value: t('hero_metric_3_value'),
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: "fab fa-react",
            label: t('hero_metric_4_label'),
            value: t('hero_metric_4_value'),
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            icon: "fas fa-trophy",
            label: t('hero_metric_5_label'),
            value: t('hero_metric_5_value'),
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            icon: "fas fa-bolt",
            label: t('hero_metric_6_label'),
            value: t('hero_metric_6_value'),
            gradient: "from-red-500 to-pink-500"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero-premium",
        id: "home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-bg-gradient"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-particles"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container hero-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-content-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "hero-eyebrow",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow-icon",
                                        children: "⚡"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('hero_subtitle')
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                className: "hero-headline",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "headline-primary",
                                        children: t('hero_title_line1')
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "headline-secondary",
                                        children: t('hero_title_line2')
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "hero-description",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.6
                                },
                                children: t('hero_description')
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "hero-cta-group",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: "#contact",
                                        className: "btn btn-hero-primary",
                                        whileHover: {
                                            scale: 1.05,
                                            y: -2
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('hero_cta')
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fas fa-arrow-right"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 151,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: "#portfolio",
                                        className: "btn btn-hero-secondary",
                                        whileHover: {
                                            scale: 1.05,
                                            y: -2
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('hero_cta_secondary')
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 159,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fas fa-chart-line"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 160,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "hero-social-proof",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "proof-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "proof-number",
                                                children: "15+"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 172,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "proof-label",
                                                children: t('years_experience')
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "proof-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 175,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "proof-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "proof-number",
                                                children: "200+"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 177,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "proof-label",
                                                children: t('successful_projects')
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 178,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "proof-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 180,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "proof-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "proof-number",
                                                children: "+300%"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 182,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "proof-label",
                                                children: t('hero_roi')
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 183,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 181,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hero-visual-column-modern",
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "achievements-grid-modern",
                                children: achievements.map((achievement, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "achievement-card-modern",
                                        variants: cardVariants,
                                        whileHover: {
                                            scale: 1.05,
                                            y: -5,
                                            transition: {
                                                duration: 0.2
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: `achievement-icon-modern bg-gradient-to-br ${achievement.gradient}`,
                                                animate: {
                                                    rotate: [
                                                        0,
                                                        5,
                                                        0,
                                                        -5,
                                                        0
                                                    ]
                                                },
                                                transition: {
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: index * 0.2
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: achievement.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 208,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "achievement-content-modern",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "achievement-label-modern",
                                                        children: achievement.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "achievement-value-modern",
                                                        children: achievement.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                                lineNumber: 222,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 198,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                lineNumber: 196,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "floating-particles",
                                children: isClient && [
                                    {
                                        left: '15%',
                                        top: '20%'
                                    },
                                    {
                                        left: '85%',
                                        top: '30%'
                                    },
                                    {
                                        left: '25%',
                                        top: '60%'
                                    },
                                    {
                                        left: '75%',
                                        top: '70%'
                                    },
                                    {
                                        left: '45%',
                                        top: '15%'
                                    },
                                    {
                                        left: '55%',
                                        top: '85%'
                                    }
                                ].map((position, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "particle",
                                        animate: {
                                            y: [
                                                0,
                                                -30,
                                                0
                                            ],
                                            x: [
                                                0,
                                                10,
                                                0
                                            ],
                                            opacity: [
                                                0.3,
                                                0.6,
                                                0.3
                                            ]
                                        },
                                        transition: {
                                            duration: 3 + i,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.5
                                        },
                                        style: {
                                            left: position.left,
                                            top: position.top
                                        }
                                    }, i, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                        lineNumber: 240,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                                lineNumber: 231,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "scroll-indicator",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    delay: 1.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('scroll')
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                        lineNumber: 271,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "scroll-arrow",
                        animate: {
                            y: [
                                0,
                                10,
                                0
                            ]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: Infinity
                        }
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                        lineNumber: 272,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
}
_s(Hero, "r2qHKp7o4BfvFBwdjax8UgDDAnE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Marquee/Marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
'use client';
;
;
function Marquee({ items, speed = 20 }) {
    if (!items || items.length === 0) return null;
    // Duplicate items for seamless loop
    const displayItems = [
        ...items,
        ...items,
        ...items
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-96d70d3b23be247d" + " " + "marquee-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animationDuration: `${speed}s`
                },
                className: "jsx-96d70d3b23be247d" + " " + "marquee-content",
                children: displayItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-96d70d3b23be247d" + " " + "marquee-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "jsx-96d70d3b23be247d" + " " + (item.icon || "")
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Marquee/Marquee.tsx",
                                lineNumber: 26,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-96d70d3b23be247d",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Marquee/Marquee.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Marquee/Marquee.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Marquee/Marquee.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "96d70d3b23be247d",
                children: ".marquee-container.jsx-96d70d3b23be247d{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#ffffff05;border-top:1px solid #ffffff0d;border-bottom:1px solid #ffffff0d;width:100%;max-width:100vw;padding:2.5rem 0;position:relative;overflow:hidden}.marquee-content.jsx-96d70d3b23be247d{gap:5rem;width:max-content;animation:linear infinite marquee;display:flex}.marquee-item.jsx-96d70d3b23be247d{color:#ffffff80;white-space:nowrap;text-transform:uppercase;letter-spacing:1px;align-items:center;gap:1.25rem;font-size:1.6rem;font-weight:800;transition:all .3s;display:flex}.marquee-item.jsx-96d70d3b23be247d:hover{color:#a855f7;opacity:1;transform:scale(1.05)}.marquee-item.jsx-96d70d3b23be247d i.jsx-96d70d3b23be247d{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#6366f1 0%,#a855f7 100%);-webkit-background-clip:text;font-size:2.2rem}@keyframes marquee{0%{transform:translate(0)}to{transform:translate(-33.333%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Marquee/Marquee.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = Marquee;
var _c;
__turbopack_context__.k.register(_c, "Marquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$components$2f$Hero$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Hero/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$components$2f$Marquee$2f$Marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Marquee/Marquee.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
'use client';
;
;
;
;
// Lazy loading de componentes below the fold
const About = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/About/About.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/About/About.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "skeleton-section",
            style: {
                minHeight: '600px'
            }
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
            lineNumber: 10,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = About;
const SeoContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/SeoContent/SeoContent.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/SeoContent/SeoContent.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c1 = SeoContent;
const Comparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Comparison/Comparison.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Comparison/Comparison.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c2 = Comparison;
const ComparisonTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c3 = ComparisonTable;
const VisualBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/VisualBoard/VisualBoard.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/VisualBoard/VisualBoard.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c4 = VisualBoard;
const Portfolio = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Portfolio/Portfolio.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Portfolio/Portfolio.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c5 = Portfolio;
const Testimonials = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Testimonials/Testimonials.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Testimonials/Testimonials.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c6 = Testimonials;
const Experience = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Experience/Experience.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c7 = Experience;
const Pricing = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Pricing/Pricing.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Pricing/Pricing.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c8 = Pricing;
const Faq = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Faq/Faq.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Faq/Faq.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c9 = Faq;
const Contact = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Contact/Contact.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Contact/Contact.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c10 = Contact;
const Modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c11 = Modal;
const techSkills = [
    {
        icon: 'fab fa-angular',
        label: 'Angular 19'
    },
    {
        icon: 'fab fa-node-js',
        label: 'Node.js'
    },
    {
        icon: 'fab fa-js',
        label: 'TypeScript'
    },
    {
        icon: 'fab fa-php',
        label: 'Laravel'
    },
    {
        icon: 'fab fa-wordpress',
        label: 'WordPress'
    },
    {
        icon: 'fas fa-search',
        label: 'Technical SEO'
    }
];
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$components$2f$Hero$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$components$2f$Marquee$2f$Marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: techSkills
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(About, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeoContent, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comparison, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComparisonTable, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisualBoard, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Portfolio, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonials, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Experience, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pricing, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Faq, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                isOpen: false,
                onClose: ()=>{},
                modalId: null
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/app/(public)/HomeClient.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c12 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "About");
__turbopack_context__.k.register(_c1, "SeoContent");
__turbopack_context__.k.register(_c2, "Comparison");
__turbopack_context__.k.register(_c3, "ComparisonTable");
__turbopack_context__.k.register(_c4, "VisualBoard");
__turbopack_context__.k.register(_c5, "Portfolio");
__turbopack_context__.k.register(_c6, "Testimonials");
__turbopack_context__.k.register(_c7, "Experience");
__turbopack_context__.k.register(_c8, "Pricing");
__turbopack_context__.k.register(_c9, "Faq");
__turbopack_context__.k.register(_c10, "Contact");
__turbopack_context__.k.register(_c11, "Modal");
__turbopack_context__.k.register(_c12, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_gemini_antigravity_scratch_josegaspard-web_frontend-next_src_2e77e955._.js.map