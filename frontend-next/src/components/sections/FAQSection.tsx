'use client';
import { useState } from 'react';
import { FAQ } from '@/lib/constants';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header text-center">
          <span className="section-badge">Preguntas Frecuentes</span>
          <h2 className="section-title">Resolvemos Tus <span className="gradient-text">Dudas</span></h2>
        </div>
        <div>
          {FAQ.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span>{faq.question}</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
