import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-seo-content',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './seo-content.html',
    styleUrls: ['./seo-content.css']
})
export class SeoContentComponent {
    translationService = inject(TranslationService);

    t(key: string) {
        return this.translationService.translate(key);
    }
}
