import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-comparison',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './comparison.html',
    styleUrls: ['./comparison.css']
})
export class ComparisonComponent {
    translationService = inject(TranslationService);

    t(key: string) {
        return this.translationService.translate(key);
    }

    comparisons = [
        {
            feature: 'Análisis de Palabras Clave',
            standard: 'Sólo volumen de búsqueda',
            gaspard: 'Intención de búsqueda y conversión real',
            isPositive: true
        },
        {
            feature: 'Link Building',
            standard: 'Spam y granjas de enlaces',
            gaspard: 'Relaciones públicas digitales y autoridad real',
            isPositive: true
        },
        {
            feature: 'SEO Técnico',
            standard: 'Optimización básica de plugins',
            gaspard: 'Arquitectura web y Web Vitals avanzada',
            isPositive: true
        },
        {
            feature: 'Reportes',
            standard: 'PDFs confusos una vez al mes',
            gaspard: 'Dashboard en tiempo real y KPI de negocio',
            isPositive: true
        },
        {
            feature: 'Resultados',
            standard: 'Lentos y poco sostenibles',
            gaspard: 'Crecimiento exponencial y duradero',
            isPositive: true
        }
    ];
}
