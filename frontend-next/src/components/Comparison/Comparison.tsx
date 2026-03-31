'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './Comparison.css';

export default function Comparison() {
    const { t } = useLanguage();

    return (
        <section className="section py-xxl" id="method">
            <div className="container">
                <div className="section-header text-center mb-20">
                    <h2 className="section-title-2line">
                        <span className="title-line-white">¿Por qué el</span>
                        <span className="title-line-gradient"> Método Gaspard?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-width-700 mx-auto">{t('method_subtitle')}</p>
                </div>

                <div className="comparison-grid">
                    {/* Solo SEO */}
                    <div className="comparison-card glass-premium">
                        <div className="card-icon solo"><i className="fas fa-search"></i></div>
                        <h3 className="card-title">{t('method_solo_seo_title')}</h3>
                        <p className="card-text">{t('method_solo_seo_desc')}</p>
                        <div className="card-status negative">
                            <i className="fas fa-times-circle"></i> Dependencia técnica
                        </div>
                    </div>

                    {/* The Hybrid Architect (Highlighted) */}
                    <div className="comparison-card glass-premium featured">
                        <div className="featured-badge">THE ELITE CHOICE</div>
                        <div className="card-icon hybrid"><i className="fas fa-bolt"></i></div>
                        <h3 className="card-title">{t('method_hybrid_title')}</h3>
                        <p className="card-text">{t('method_hybrid_desc')}</p>
                        <div className="card-status positive">
                            <i className="fas fa-check-circle"></i> Dominio absoluto
                        </div>
                    </div>

                    {/* Solo Developer */}
                    <div className="comparison-card glass-premium">
                        <div className="card-icon developer"><i className="fas fa-code"></i></div>
                        <h3 className="card-title">{t('method_solo_dev_title')}</h3>
                        <p className="card-text">{t('method_solo_dev_desc')}</p>
                        <div className="card-status negative">
                            <i className="fas fa-times-circle"></i> Desconexión de negocio
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
