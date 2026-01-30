import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-skeleton',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div 
      class="skeleton" 
      [style.width]="width" 
      [style.height]="height" 
      [style.border-radius]="borderRadius"
      [class.dark]="dark"
    ></div>
  `,
    styles: [`
    .skeleton {
      background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      display: inline-block;
    }

    .skeleton.dark {
        background: linear-gradient(90deg, #334155 25%, #475569 50%, #334155 75%);
    }

    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class SkeletonComponent {
    @Input() width = '100%';
    @Input() height = '1rem';
    @Input() borderRadius = '4px';
    @Input() dark = false;
}
