import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        WhatsappButtonComponent
    ],
    templateUrl: './main-layout.html',
    styleUrls: ['./main-layout.css']
})
export class MainLayoutComponent {
    configService = inject(ConfigService);
    // Signal to track whatsapp visibility
    showWhatsapp = this.configService.config;
}
