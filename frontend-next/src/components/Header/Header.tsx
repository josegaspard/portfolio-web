'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import './Header.css';

export default function Header() {
    const { t, language, setLanguage } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navItems = [
        { href: '/#about', label: t('nav_about') },
        { href: '/#experience', label: t('nav_experience') },
        { href: '/#portfolio', label: t('nav_portfolio') },
        { href: '/blog', label: t('nav_blog') },
        { href: '/#contact', label: t('nav_contact') }
    ];

    // Valores fijos para partículas (evita hydration mismatch)
    const particlePositions = [
        { left: '15%', top: '20%', delay: '0s', duration: '25s' },
        { left: '85%', top: '30%', delay: '1s', duration: '30s' },
        { left: '25%', top: '60%', delay: '2s', duration: '35s' },
        { left: '75%', top: '70%', delay: '3s', duration: '28s' },
        { left: '45%', top: '15%', delay: '4s', duration: '32s' },
        { left: '55%', top: '85%', delay: '0.5s', duration: '27s' },
        { left: '10%', top: '50%', delay: '1.5s', duration: '33s' },
        { left: '90%', top: '45%', delay: '2.5s', duration: '29s' },
        { left: '35%', top: '25%', delay: '3.5s', duration: '31s' },
        { left: '65%', top: '75%', delay: '4.5s', duration: '26s' },
        { left: '20%', top: '40%', delay: '1.2s', duration: '34s' },
        { left: '80%', top: '55%', delay: '2.2s', duration: '28s' },
        { left: '50%', top: '10%', delay: '3.2s', duration: '30s' },
        { left: '40%', top: '90%', delay: '4.2s', duration: '32s' },
        { left: '70%', top: '35%', delay: '0.8s', duration: '29s' },
    ];

    return (
        <>
            {/* Animated Background Particles */}
            {mounted && (
                <div className="header-particles">
                    {particlePositions.map((pos, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: pos.left,
                                top: pos.top,
                                animationDelay: pos.delay,
                                animationDuration: pos.duration
                            }}
                        />
                    ))}
                </div>
            )}

            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-backdrop" />

                <div className="container header-container">
                    {/* Logo - Left Side */}
                    <Link href="/" className="logo">JG.</Link>

                    {/* Main Navigation - Center/Right */}
                    <nav className="main-nav">
                        {/* Desktop Navigation */}
                        <ul className="nav-list">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="nav-link">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Language Switcher */}
                        <div className="language-switcher">
                            <button
                                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                                onClick={() => setLanguage('es')}
                                title="Español"
                            >
                                <img src="https://flagcdn.com/w40/mx.png" alt="Español" className="flag" />
                            </button>
                            <button
                                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                                onClick={() => setLanguage('en')}
                                title="English"
                            >
                                <img src="https://flagcdn.com/w40/us.png" alt="English" className="flag" />
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button - Right Side */}
                    <div
                        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
            >
                <ul className="mobile-nav-list">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="mobile-nav-link" onClick={toggleMobileMenu}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Language Switcher in Mobile Menu */}
                <div className="mobile-language-switcher">
                    <button
                        className={`lang-btn-mobile ${language === 'es' ? 'active' : ''}`}
                        onClick={() => { setLanguage('es'); toggleMobileMenu(); }}
                    >
                        <img src="https://flagcdn.com/w40/mx.png" alt="Español" className="flag" />
                        <span>Español</span>
                    </button>
                    <button
                        className={`lang-btn-mobile ${language === 'en' ? 'active' : ''}`}
                        onClick={() => { setLanguage('en'); toggleMobileMenu(); }}
                    >
                        <img src="https://flagcdn.com/w40/us.png" alt="English" className="flag" />
                        <span>English</span>
                    </button>
                </div>
            </div>
        </>
    );
}
