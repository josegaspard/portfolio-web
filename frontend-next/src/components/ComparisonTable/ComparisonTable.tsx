'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './ComparisonTable.css';

interface Metric {
    nameKey: string;
    icon: string;
    seo: number;
    dev: number;
}

interface Benefit {
    icon: string;
    titleKey: string;
    descKey: string;
}

export default function ComparisonTable() {
    const { t } = useLanguage();

    const metrics: Metric[] = [
        { nameKey: 'metric_seo_knowledge', icon: 'fas fa-cogs', seo: 5, dev: 1 },
        { nameKey: 'metric_dev_skills', icon: 'fas fa-laptop-code', seo: 1, dev: 5 },
        { nameKey: 'metric_performance', icon: 'fas fa-tachometer-alt', seo: 2, dev: 4 },
        { nameKey: 'metric_architecture', icon: 'fas fa-sitemap', seo: 3, dev: 2 },
        { nameKey: 'metric_fast_implementation', icon: 'fas fa-rocket', seo: 2, dev: 3 },
        { nameKey: 'metric_business_vision', icon: 'fas fa-chart-line', seo: 4, dev: 2 },
        { nameKey: 'metric_problem_solving', icon: 'fas fa-puzzle-piece', seo: 2, dev: 3 },
        { nameKey: 'metric_scalability', icon: 'fas fa-expand-arrows-alt', seo: 2, dev: 4 }
    ];

    const benefits: Benefit[] = [
        { icon: 'fas fa-bolt', titleKey: 'benefit_speed_title', descKey: 'benefit_speed_desc' },
        { icon: 'fas fa-dollar-sign', titleKey: 'benefit_cost_title', descKey: 'benefit_cost_desc' },
        { icon: 'fas fa-brain', titleKey: 'benefit_vision_title', descKey: 'benefit_vision_desc' },
        { icon: 'fas fa-shield-alt', titleKey: 'benefit_independence_title', descKey: 'benefit_independence_desc' }
    ];

    const getStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? 'fas fa-star' : 'far fa-star');
        }
        return stars;
    };

    return (
        <section className="section comparison-table-section" id="comparison">
            <div className="container">
                {/* Section Header */}
                <h2 className="section-title-2line">
                    <span className="title-line-white">{t('why_hire_me_line1')}</span>
                    <span className="title-line-gradient">{t('why_hire_me_line2')}</span>
                </h2>
                <p className="text-xl text-center text-gray-400 max-width-700 mx-auto mb-16">
                    {t('why_hire_me_subtitle')}
                </p>

                {/* Comparison Table */}
                <div className="comparison-table-container">
                    <div className="comparison-table">
                        {/* Header Row */}
                        <div className="table-header">
                            <div className="header-cell metric-label">{t('table_capability')}</div>
                            <div className="header-cell">
                                <div className="profile-badge solo-seo">
                                    <i className="fas fa-search"></i>
                                    <span>{t('table_solo_seo')}</span>
                                </div>
                            </div>
                            <div className="header-cell">
                                <div className="profile-badge solo-dev">
                                    <i className="fas fa-code"></i>
                                    <span>{t('table_solo_dev')}</span>
                                </div>
                            </div>
                            <div className="header-cell featured">
                                <div className="profile-badge hybrid">
                                    <i className="fas fa-bolt"></i>
                                    <span>{t('table_hybrid')}</span>
                                    <div className="elite-badge">{t('table_you')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Rows */}
                        {metrics.map((metric, i) => (
                            <div className="table-row" key={i}>
                                <div className="metric-cell">
                                    <i className={metric.icon}></i>
                                    <span>{t(metric.nameKey)}</span>
                                </div>
                                <div className="value-cell" data-label={t('table_solo_seo')}>
                                    <span className={`rating rating-${metric.seo}`}>
                                        {getStars(metric.seo).map((star, idx) => (
                                            <i key={idx} className={star}></i>
                                        ))}
                                    </span>
                                </div>
                                <div className="value-cell" data-label={t('table_solo_dev')}>
                                    <span className={`rating rating-${metric.dev}`}>
                                        {getStars(metric.dev).map((star, idx) => (
                                            <i key={idx} className={star}></i>
                                        ))}
                                    </span>
                                </div>
                                <div className="value-cell featured" data-label={t('table_hybrid')}>
                                    <span className="rating rating-5">
                                        {getStars(5).map((star, idx) => (
                                            <i key={idx} className={star}></i>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Summary Row */}
                        <div className="table-footer">
                            <div className="footer-cell">{t('table_final_result')}</div>
                            <div className="footer-cell">
                                <span className="result-badge partial">{t('table_result_seo')}</span>
                            </div>
                            <div className="footer-cell">
                                <span className="result-badge partial">{t('table_result_dev')}</span>
                            </div>
                            <div className="footer-cell featured">
                                <span className="result-badge elite">{t('table_result_hybrid')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="benefits-grid">
                    {benefits.map((benefit, i) => (
                        <div className="benefit-card glass-premium" key={i}>
                            <div className="benefit-icon">
                                <i className={benefit.icon}></i>
                            </div>
                            <h4>{t(benefit.titleKey)}</h4>
                            <p>{t(benefit.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
