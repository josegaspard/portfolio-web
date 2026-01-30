import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app-whatsapp-button',
    standalone: true,
    imports: [CommonModule],
    template: `
    <a 
        [href]="whatsappLink" 
        target="_blank" 
        rel="noopener noreferrer"
        class="whatsapp-float"
        title="Contactar por WhatsApp"
    >
        <i class="fab fa-whatsapp"></i>
        <span class="whatsapp-text">Chat on WhatsApp</span>
        <div class="whatsapp-pulse"></div>
    </a>
  `,
    styles: [`
    .whatsapp-float {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 2147483647 !important; /* Max Z-Index possible */
        background: #25D366;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        font-size: 30px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .whatsapp-float:hover {
        background: #128C7E;
        transform: scale(1.1);
    }
    
    .whatsapp-text {
        position: absolute;
        right: 70px;
        background: white;
        color: #333;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        white-space: nowrap;
    }

    .whatsapp-float:hover .whatsapp-text {
        opacity: 1;
        visibility: visible;
        right: 75px;
    }

    .whatsapp-pulse {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #25D366;
        animation: pulse 2s infinite;
        top: 0;
        left: 0;
        pointer-events: none;
        box-sizing: border-box;
    }

    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(1.5); opacity: 0; }
    }

    @media (max-width: 768px) {
        .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            font-size: 25px;
        }
    }
  `]
})
export class WhatsappButtonComponent {
    configService = inject(ConfigService);

    // Computed property from signal
    whatsappConfig = this.configService.config;

    get whatsappLink(): string {
        const config = this.whatsappConfig().whatsapp;
        return `https://wa.me/${config.number}?text=${encodeURIComponent(config.message)}`;
    }
}
