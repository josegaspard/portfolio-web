(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/utils/sanitize.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Modal({ isOpen, onClose, modalId }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (isOpen) {
                setActive(true);
                document.body.style.overflow = 'hidden';
            } else {
                setActive(false);
                document.body.style.overflow = 'unset';
            }
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    if (!isOpen || !modalId) return null;
    const getPrefix = (id)=>{
        if (id.startsWith('modal-')) return id.replace('modal-', '');
        return id;
    };
    const prefix = getPrefix(modalId);
    const hasTranslation = (key)=>{
        const value = t(key);
        return value !== key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `modal-root ${active ? 'active' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "modal-close",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fas fa-times"
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                            lineNumber: 46,
                            columnNumber: 67
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                dangerouslySetInnerHTML: {
                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_title`))
                                }
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "modal-subtitle",
                                dangerouslySetInnerHTML: {
                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_subtitle`))
                                }
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-stats",
                                children: [
                                    hasTranslation(`${prefix}_stat_1_label`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal-stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stat-value",
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_stat_1_value`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 55,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stat-label",
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_stat_1_label`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 56,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this),
                                    hasTranslation(`${prefix}_stat_2_label`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal-stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stat-value",
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_stat_2_value`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 61,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stat-label",
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_stat_2_label`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 62,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 60,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal-stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stat-value",
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_stat_3_value`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 66,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "stat-label",
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_stat_3_label`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 67,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 65,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-body",
                        children: [
                            hasTranslation(`${prefix}_challenge_title`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        dangerouslySetInnerHTML: {
                                            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_challenge_title`))
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        dangerouslySetInnerHTML: {
                                            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_challenge_desc`))
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this),
                            hasTranslation(`${prefix}_strategy_title`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        dangerouslySetInnerHTML: {
                                            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_strategy_title`))
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_strategy_1`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 84,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_strategy_2`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 85,
                                                columnNumber: 33
                                            }, this),
                                            hasTranslation(`${prefix}_strategy_3`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_strategy_3`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 87,
                                                columnNumber: 37
                                            }, this),
                                            hasTranslation(`${prefix}_strategy_4`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_strategy_4`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 90,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this),
                            hasTranslation(`${prefix}_results_title`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        dangerouslySetInnerHTML: {
                                            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_results_title`))
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_result_1`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_result_2`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 101,
                                                columnNumber: 33
                                            }, this),
                                            hasTranslation(`${prefix}_result_3`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                dangerouslySetInnerHTML: {
                                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_result_3`))
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                                lineNumber: 103,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 97,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                dangerouslySetInnerHTML: {
                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_tech_title`))
                                }
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tags",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tag",
                                        children: "SEO"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tag",
                                        children: "Web Development"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this),
                            hasTranslation(`${prefix}_button`) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn",
                                dangerouslySetInnerHTML: {
                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"])(t(`${prefix}_button`))
                                }
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_s(Modal, "jD0lUWloHuawXx6JnVeo4M8xFQM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$josegaspard$2d$web$2f$frontend$2d$next$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/.gemini/antigravity/scratch/josegaspard-web/frontend-next/src/components/Modal/Modal.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=2078d_scratch_josegaspard-web_frontend-next_src_components_Modal_Modal_tsx_4b4a838a._.js.map