'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import ClientOnly from '@/components/ClientOnly';
import './Hero.css';

export default function Hero() {
    const { t } = useLanguage();
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    // Animaciones para las achievement cards
    const containerVariants = {
        hidden: { opacity: 0 },
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
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    const floatVariants = {
        animate: {
            y: [0, -15, 0],
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

    return (
        <section className="hero-premium" id="home">
            {/* Background Elements */}
            <div className="hero-bg-gradient"></div>
            <div className="hero-particles"></div>

            <div className="container hero-grid">
                {/* Left Column: Main Content */}
                <div className="hero-content-column">
                    {/* Eyebrow Text */}
                    <motion.div
                        className="hero-eyebrow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="eyebrow-icon">⚡</span>
                        <span>{t('hero_subtitle')}</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="hero-headline"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="headline-primary">{t('hero_title_line1')}</span>
                        <span className="headline-secondary">{t('hero_title_line2')}</span>
                    </motion.h1>

                    {/* Value Proposition */}
                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {t('hero_description')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero-cta-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.a
                            href="#contact"
                            className="btn btn-hero-primary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>{t('hero_cta')}</span>
                            <i className="fas fa-arrow-right"></i>
                        </motion.a>
                        <motion.a
                            href="#portfolio"
                            className="btn btn-hero-secondary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>{t('hero_cta_secondary')}</span>
                            <i className="fas fa-chart-line"></i>
                        </motion.a>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        className="hero-social-proof"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <div className="proof-item">
                            <div className="proof-number">15+</div>
                            <div className="proof-label">{t('years_experience')}</div>
                        </div>
                        <div className="proof-divider"></div>
                        <div className="proof-item">
                            <div className="proof-number">200+</div>
                            <div className="proof-label">{t('successful_projects')}</div>
                        </div>
                        <div className="proof-divider"></div>
                        <div className="proof-item">
                            <div className="proof-number">+300%</div>
                            <div className="proof-label">{t('hero_roi')}</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Visual Elements - REDISEÑADO */}
                <motion.div
                    className="hero-visual-column-modern"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Grid de Achievement Cards - Diseño Moderno */}
                    <div className="achievements-grid-modern">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="achievement-card-modern"
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div
                                    className={`achievement-icon-modern bg-gradient-to-br ${achievement.gradient}`}
                                    animate={{
                                        rotate: [0, 5, 0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                >
                                    <i className={achievement.icon}></i>
                                </motion.div>
                                <div className="achievement-content-modern">
                                    <div className="achievement-label-modern">{achievement.label}</div>
                                    <div className="achievement-value-modern">{achievement.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Partículas Flotantes de Fondo - Wrapped in ClientOnly */}
                    <ClientOnly>
                        <div className="floating-particles">
                            {[
                                { left: '15%', top: '20%' },
                                { left: '85%', top: '30%' },
                                { left: '25%', top: '60%' },
                                { left: '75%', top: '70%' },
                                { left: '45%', top: '15%' },
                                { left: '55%', top: '85%' },
                            ].map((position, i) => (
                                <motion.div
                                    key={i}
                                    className="particle"
                                    animate={{
                                        y: [0, -30, 0],
                                        x: [0, 10, 0],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.5
                                    }}
                                    style={{
                                        left: position.left,
                                        top: position.top
                                    }}
                                />
                            ))}
                        </div>
                    </ClientOnly>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <span>{t('scroll')}</span>
                <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
            </motion.div>
        </section>
    );
}
