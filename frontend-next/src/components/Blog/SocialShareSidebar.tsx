'use client';

import toast from 'react-hot-toast';
import './SocialShareSidebar.css';

interface SocialShareSidebarProps {
    url: string;
    title: string;
}

export default function SocialShareSidebar({ url, title }: SocialShareSidebarProps) {
    const shareUrl = encodeURIComponent(url);
    const shareTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: 'Facebook',
            icon: 'fab fa-facebook-f',
            url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
            color: '#1877f2'
        },
        {
            name: 'Twitter',
            icon: 'fab fa-x-twitter',
            url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
            color: '#000000'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin-in',
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
            color: '#0077b5'
        },
        {
            name: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            url: `https://wa.me/?text=${shareTitle}%20${shareUrl}`,
            color: '#25d366'
        }
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        toast.success('¡Enlace copiado al portapapeles!', {
            icon: '📋',
        });
    };

    return (
        <div className="social-share-sidebar">
            {shareLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn"
                    style={{ '--hover-color': link.color } as React.CSSProperties}
                    title={`Compartir en ${link.name}`}
                >
                    <i className={link.icon}></i>
                </a>
            ))}
            <button
                onClick={copyToClipboard}
                className="share-btn"
                title="Copiar enlace"
            >
                <i className="fas fa-link"></i>
            </button>
        </div>
    );
}
