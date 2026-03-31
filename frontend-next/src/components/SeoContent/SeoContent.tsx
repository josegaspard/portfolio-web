'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './SeoContent.css';

export default function SeoContent() {
    const { t } = useLanguage();

    return (
        <section id="seo-strategy" className="section py-xxl">
            <div className="container">
                <div className="section-header text-center mb-20">
                    <h2 className="section-title-2line">
                        <span className="title-line-white">Los Pilares de mi</span>
                        <span className="title-line-gradient"> Ingeniería SEO</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-width-700 mx-auto">{t('seo_section_subtitle')}</p>
                </div>

                <div className="seo-pillars-grid">
                    <div className="pillar-card glass-premium">
                        <div className="pillar-number">01</div>
                        <div className="pillar-icon"><i className="fas fa-server"></i></div>
                        <h3 className="pillar-title">{t('seo_p1_title')}</h3>
                        <p className="pillar-text">{t('seo_p1_text')}</p>
                    </div>

                    <div className="pillar-card glass-premium">
                        <div className="pillar-number">02</div>
                        <div className="pillar-icon"><i className="fas fa-shield-alt"></i></div>
                        <h3 className="pillar-title">{t('seo_p2_title')}</h3>
                        <p className="pillar-text">{t('seo_p2_text')}</p>
                    </div>

                    <div className="pillar-card glass-premium">
                        <div className="pillar-number">03</div>
                        <div className="pillar-icon"><i className="fas fa-bullseye"></i></div>
                        <h3 className="pillar-title">{t('seo_p3_title')}</h3>
                        <p className="pillar-text">{t('seo_p3_text')}</p>
                    </div>

                    <div className="pillar-card glass-premium">
                        <div className="pillar-number">04</div>
                        <div className="pillar-icon"><i className="fas fa-chart-line"></i></div>
                        <h3 className="pillar-title">{t('seo_p4_title')}</h3>
                        <p className="pillar-text">{t('seo_p4_text')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
