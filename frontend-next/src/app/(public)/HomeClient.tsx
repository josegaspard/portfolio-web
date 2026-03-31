'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';

// Lazy loading de componentes below the fold
const About = dynamic(() => import('@/components/About/About'), {
  loading: () => <div className="skeleton-section" style={{ minHeight: '600px' }} />,
});

const HighlightKeynote = dynamic(() => import('@/components/HighlightKeynote/HighlightKeynote'));

const SeoContent = dynamic(() => import('@/components/SeoContent/SeoContent'));
const Comparison = dynamic(() => import('@/components/Comparison/Comparison'));
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable/ComparisonTable'));
const VisualBoard = dynamic(() => import('@/components/VisualBoard/VisualBoard'));
const Portfolio = dynamic(() => import('@/components/Portfolio/Portfolio'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'));
const Experience = dynamic(() => import('@/components/Experience/Experience'));
const Pricing = dynamic(() => import('@/components/Pricing/Pricing'));
const Faq = dynamic(() => import('@/components/Faq/Faq'));
const Contact = dynamic(() => import('@/components/Contact/Contact'));
const Modal = dynamic(() => import('@/components/Modal/Modal'));

const techSkills = [
  { icon: 'fab fa-angular', label: 'Angular 19' },
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fab fa-js', label: 'TypeScript' },
  { icon: 'fab fa-php', label: 'Laravel' },
  { icon: 'fab fa-wordpress', label: 'WordPress' },
  { icon: 'fas fa-search', label: 'Technical SEO' }
];

export default function Home() {
  return (
    <>
      {/* Above the fold - NO lazy load */}
      <Hero />
      <Marquee items={techSkills} />

      {/* Below the fold - SÍ lazy load */}
      <HighlightKeynote />
      <About />
      <SeoContent />
      <Comparison />
      <ComparisonTable />
      <VisualBoard />
      <Portfolio />
      <Testimonials />
      <Experience />
      <Pricing />
      <Faq />
      <Contact />

      {/* Modal system shared across components */}
      <Modal isOpen={false} onClose={() => { }} modalId={null} />
    </>
  );
}
