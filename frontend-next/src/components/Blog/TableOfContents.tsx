'use client';

import { useEffect, useState } from 'react';
import './TableOfContents.css';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [toc, setToc] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Generate TOC from H2 and H3 elements
        const headings = document.querySelectorAll('.blog-main-content h2, .blog-main-content h3');
        const tocItems: TOCItem[] = [];

        headings.forEach((heading, index) => {
            const id = heading.id || `heading-${index}`;
            if (!heading.id) {
                heading.id = id;
            }

            tocItems.push({
                id,
                text: heading.textContent || '',
                level: heading.tagName === 'H2' ? 2 : 3,
            });
        });

        setToc(tocItems);

        // Intersection Observer for active section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -80% 0px' }
        );

        headings.forEach((heading) => observer.observe(heading));

        return () => observer.disconnect();
    }, []);

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (toc.length === 0) return null;

    return (
        <div className="table-of-contents">
            <h4 className="toc-title">Tabla de Contenidos</h4>
            <ul className="toc-list">
                {toc.map((item) => (
                    <li
                        key={item.id}
                        className={`toc-item toc-level-${item.level} ${activeId === item.id ? 'active' : ''}`}
                    >
                        <button onClick={() => scrollToHeading(item.id)}>
                            {item.text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
