'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Faq() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        { q: t('faq_q1'), a: t('faq_a1') },
        { q: t('faq_q2'), a: t('faq_a2') },
        { q: t('faq_q3'), a: t('faq_a3') },
        { q: t('faq_q4'), a: t('faq_a4') },
        { q: t('faq_q5'), a: t('faq_a5') },
        { q: t('faq_q6'), a: t('faq_a6') },
        { q: t('faq_q7'), a: t('faq_a7') },
        { q: t('faq_q8'), a: t('faq_a8') },
        { q: t('faq_q9'), a: t('faq_a9') },
        { q: t('faq_q10'), a: t('faq_a10') },
        { q: t('faq_q11'), a: t('faq_a11') },
        { q: t('faq_q12'), a: t('faq_a12') }
    ];

    const toggle = (i: number) => {
        setActiveIndex(activeIndex === i ? null : i);
    };

    return (
        <section className="section py-xxl" id="faq">
            <div className="container max-width-800 mx-auto">
                <div className="section-header text-center mb-20">
                    <h2 className="section-title-2line">
                        <span className="title-line-white">{t('faq_title')}</span>
                    </h2>
                    <p className="text-xl text-gray-400">{t('faq_subtitle')}</p>
                </div>

                <div className="faq-list">
                    {faqs.map((item, i) => (
                        <div key={i}
                            className={`faq-item glass-premium mb-6 ${activeIndex === i ? 'active' : ''}`}
                            onClick={() => toggle(i)}>
                            <div className="faq-question">
                                <span>{item.q}</span>
                                <i className={`fas ${activeIndex === i ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                            {activeIndex === i && (
                                <div className="faq-answer">
                                    <p>{item.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .faq-item {
                    padding: 1.5rem 2rem;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .faq-item:hover {
                    border-color: #6366f1;
                    background: rgba(255, 255, 255, 0.04);
                }
                .faq-question {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: white;
                }
                .faq-question i {
                    font-size: 1rem;
                    color: #6366f1;
                }
                .faq-answer {
                    margin-top: 1.5rem;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.8;
                    animation: fadeIn 0.4s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
