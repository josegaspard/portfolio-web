'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { sanitizeHtml } from '@/utils/sanitize';
import './Experience.css';

interface ExperienceItem {
    id: string;
    company: string;
    icon: string;
    date: string;
    titleKey: string;
    image: string;
    descKey: string;
    modalId: string;
}

const experiences: ExperienceItem[] = [
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

export default function Experience() {
    const { t } = useLanguage();

    const openModal = (modalId: string) => {
        console.log('Open modal:', modalId);
        // We'll implement the actual modal logic later
    };

    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                {/* Section Header */}
                <h2 className="section-title-2line">
                    <span className="title-line-white">Mi Evolución</span>
                    <span className="title-line-gradient"> Profesional</span>
                </h2>
                <p className="text-xl experience-subtitle" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t('experience_subtitle')) }}></p>

                {/* Premium Vertical Timeline */}
                <div className="timeline-premium">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, i) => (
                        <div key={exp.id} className="timeline-item-premium" data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}>
                            {/* Timeline Dot */}
                            <div className="timeline-dot-premium">
                                <div className="dot-pulse"></div>
                                <img src={exp.image} alt={exp.company} className="company-logo-dot" />
                            </div>


                            {/* Timeline Card */}
                            <div className="timeline-card-premium glass-premium" onClick={() => openModal(exp.modalId)}>
                                {/* Card Header with Logo */}
                                <div className="card-header-premium">
                                    <img src={exp.image} alt={exp.company} className="company-logo-large" />
                                    <div className="header-text">
                                        <h3 className="company-name-premium">{exp.company}</h3>
                                        <span className="date-badge-premium">{exp.date}</span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="card-body-premium">
                                    <h4 className="role-title-premium" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(exp.titleKey)) }}></h4>
                                    <p className="role-description-premium" dangerouslySetInnerHTML={{ __html: sanitizeHtml(t(exp.descKey)) }}></p>
                                </div>

                                {/* Card Footer */}
                                <div className="card-footer-premium">
                                    <span className="view-details-link">
                                        <i className="fas fa-arrow-right"></i>
                                        Ver detalles completos
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
