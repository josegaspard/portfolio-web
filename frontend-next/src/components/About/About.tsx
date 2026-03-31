'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './About.css';

export default function About() {
    const { t } = useLanguage();

    return (
        <section className="section about-section" id="about">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title-2line">
                        <span className="title-line-white">{t('about_title')}</span>
                        <span className="title-line-gradient">{t('about_me')}</span>
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="about-grid-premium">
                    {/* Left Column: Bio + Tools */}
                    <div className="about-left-column">
                        {/* Bio Section */}
                        <div className="bio-card glass-premium">
                            <p className="bio-intro">{t('about_intro')}</p>
                            <p className="bio-description">{t('about_description')}</p>
                        </div>

                        {/* Tools Section */}
                        <div className="tools-card glass-premium">
                            <h3 className="card-title">
                                <span className="title-white">{t('tools_title')}</span>
                            </h3>
                            <div className="tech-tags">
                                <span className="tech-tag glass-item"><i className="fas fa-chart-bar"></i> Ahrefs</span>
                                <span className="tech-tag glass-item"><i className="fas fa-search"></i> SEMrush</span>
                                <span className="tech-tag glass-item"><i className="fas fa-spider"></i> Screaming Frog</span>
                                <span className="tech-tag glass-item"><i className="fas fa-microchip"></i> Search Console</span>
                                <span className="tech-tag glass-item"><i className="fab fa-php"></i> PHP 8+</span>
                                <span className="tech-tag glass-item"><i className="fab fa-laravel"></i> Laravel</span>
                                <span className="tech-tag glass-item"><i className="fab fa-wordpress"></i> WordPress</span>
                                <span className="tech-tag glass-item"><i className="fab fa-js"></i> JavaScript ES6+</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image + Stats */}
                    <div className="about-right-column">
                        {/* Profile Image */}
                        <div className="profile-image-card">
                            <div className="image-frame glass-premium">
                                <img src="/img/josegaspard.png"
                                    alt="The Architect of Growth" className="profile-image" />
                                <div className="image-overlay">
                                    <span className="image-label">{t('about_image_label')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="stats-grid-premium">
                            <div className="stat-card glass-premium">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">{t('years_experience')}</span>
                            </div>
                            <div className="stat-card glass-premium">
                                <span className="stat-number">200+</span>
                                <span className="stat-label">{t('successful_projects')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="achievements-section">
                    <h3 className="section-title-2line">
                        <span className="title-line-white">{t('key_achievements')}</span>
                    </h3>
                    <div className="achievements-grid-premium">
                        <div className="achievement-card glass-premium">
                            <div className="achievement-icon"><i className="fas fa-users"></i></div>
                            <p>{t('achievement_1')}</p>
                        </div>
                        <div className="achievement-card glass-premium">
                            <div className="achievement-icon"><i className="fas fa-user-tie"></i></div>
                            <p>{t('achievement_2')}</p>
                        </div>
                        <div className="achievement-card glass-premium">
                            <div className="achievement-icon"><i className="fas fa-laptop-code"></i></div>
                            <p>{t('achievement_3')}</p>
                        </div>
                        <div className="achievement-card glass-premium">
                            <div className="achievement-icon"><i className="fas fa-broadcast-tower"></i></div>
                            <p>{t('achievement_4')}</p>
                        </div>
                        <div className="achievement-card glass-premium">
                            <div className="achievement-icon"><i className="fas fa-trophy"></i></div>
                            <p>{t('achievement_5')}</p>
                        </div>
                    </div>
                </div>

                {/* Academic Section */}
                <div className="academic-section">
                    <h3 className="section-title-2line">
                        <span className="title-line-white">{t('academic_title')}</span>
                    </h3>
                    <div className="academic-timeline-premium">
                        <div className="academic-item glass-premium">
                            <div className="academic-year">{t('date_1')}</div>
                            <div className="academic-content">
                                <h4 className="academic-degree">{t('degree_1')}</h4>
                                <p className="academic-school">{t('school_1')}</p>
                            </div>
                        </div>
                        <div className="academic-item glass-premium">
                            <div className="academic-year">{t('date_2')}</div>
                            <div className="academic-content">
                                <h4 className="academic-degree">{t('degree_2')}</h4>
                                <p className="academic-school">{t('school_2')}</p>
                            </div>
                        </div>
                        <div className="academic-item glass-premium">
                            <div className="academic-year">{t('date_3')}</div>
                            <div className="academic-content">
                                <h4 className="academic-degree">{t('degree_3')}</h4>
                                <p className="academic-school">{t('school_3')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
