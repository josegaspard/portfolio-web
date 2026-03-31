'use client';

import React, { useEffect, useState } from 'react';

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setProgress((winScroll / height) * 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="reading-progress-fixed">
            <div className="progress-bar-fixed" style={{ width: `${progress}%` }}></div>
            <style jsx>{`
                .reading-progress-fixed {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    z-index: 9999;
                    background: transparent;
                }
                .progress-bar-fixed {
                    height: 100%;
                    background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%);
                    transition: width 0.1s ease;
                }
            `}</style>
        </div>
    );
}
