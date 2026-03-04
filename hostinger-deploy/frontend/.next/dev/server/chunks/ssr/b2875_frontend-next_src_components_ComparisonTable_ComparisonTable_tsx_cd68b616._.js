module.exports = [
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparisonTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function ComparisonTable() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const metrics = [
        {
            nameKey: 'metric_seo_knowledge',
            icon: 'fas fa-cogs',
            seo: 5,
            dev: 1
        },
        {
            nameKey: 'metric_dev_skills',
            icon: 'fas fa-laptop-code',
            seo: 1,
            dev: 5
        },
        {
            nameKey: 'metric_performance',
            icon: 'fas fa-tachometer-alt',
            seo: 2,
            dev: 4
        },
        {
            nameKey: 'metric_architecture',
            icon: 'fas fa-sitemap',
            seo: 3,
            dev: 2
        },
        {
            nameKey: 'metric_fast_implementation',
            icon: 'fas fa-rocket',
            seo: 2,
            dev: 3
        },
        {
            nameKey: 'metric_business_vision',
            icon: 'fas fa-chart-line',
            seo: 4,
            dev: 2
        },
        {
            nameKey: 'metric_problem_solving',
            icon: 'fas fa-puzzle-piece',
            seo: 2,
            dev: 3
        },
        {
            nameKey: 'metric_scalability',
            icon: 'fas fa-expand-arrows-alt',
            seo: 2,
            dev: 4
        }
    ];
    const benefits = [
        {
            icon: 'fas fa-bolt',
            titleKey: 'benefit_speed_title',
            descKey: 'benefit_speed_desc'
        },
        {
            icon: 'fas fa-dollar-sign',
            titleKey: 'benefit_cost_title',
            descKey: 'benefit_cost_desc'
        },
        {
            icon: 'fas fa-brain',
            titleKey: 'benefit_vision_title',
            descKey: 'benefit_vision_desc'
        },
        {
            icon: 'fas fa-shield-alt',
            titleKey: 'benefit_independence_title',
            descKey: 'benefit_independence_desc'
        }
    ];
    const getStars = (rating)=>{
        const stars = [];
        for(let i = 1; i <= 5; i++){
            stars.push(i <= rating ? 'fas fa-star' : 'far fa-star');
        }
        return stars;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section comparison-table-section",
        id: "comparison",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title-2line",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "title-line-white",
                            children: t('why_hire_me_line1')
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "title-line-gradient",
                            children: t('why_hire_me_line2')
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-center text-gray-400 max-width-700 mx-auto mb-16",
                    children: t('why_hire_me_subtitle')
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "comparison-table-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "comparison-table",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-cell metric-label",
                                        children: t('table_capability')
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-cell",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "profile-badge solo-seo",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-search"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('table_solo_seo')
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-cell",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "profile-badge solo-dev",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-code"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('table_solo_dev')
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 74,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-cell featured",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "profile-badge hybrid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-bolt"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('table_hybrid')
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "elite-badge",
                                                    children: t('table_you')
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 80,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            metrics.map((metric, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "table-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "metric-cell",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: metric.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t(metric.nameKey)
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 91,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "value-cell",
                                            "data-label": t('table_solo_seo'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `rating rating-${metric.seo}`,
                                                children: getStars(metric.seo).map((star, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: star
                                                    }, idx, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                lineNumber: 96,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 95,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "value-cell",
                                            "data-label": t('table_solo_dev'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `rating rating-${metric.dev}`,
                                                children: getStars(metric.dev).map((star, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: star
                                                    }, idx, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                lineNumber: 103,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "value-cell featured",
                                            "data-label": t('table_hybrid'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rating rating-5",
                                                children: getStars(5).map((star, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: star
                                                    }, idx, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                                lineNumber: 110,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 109,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-footer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-cell",
                                        children: t('table_final_result')
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-cell",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "result-badge partial",
                                            children: t('table_result_seo')
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 123,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-cell",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "result-badge partial",
                                            children: t('table_result_dev')
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 126,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-cell featured",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "result-badge elite",
                                            children: t('table_result_hybrid')
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                            lineNumber: 129,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "benefits-grid",
                    children: benefits.map((benefit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "benefit-card glass-premium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "benefit-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: benefit.icon
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                        lineNumber: 140,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                    lineNumber: 139,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: t(benefit.titleKey)
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: t(benefit.descKey)
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                                    lineNumber: 143,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                            lineNumber: 138,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
}),
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/ComparisonTable/ComparisonTable.tsx [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=b2875_frontend-next_src_components_ComparisonTable_ComparisonTable_tsx_cd68b616._.js.map