import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-marquee',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="marquee-container">
      <div class="marquee-content" [style.animation-duration]="speed + 's'">
        <div class="marquee-item" *ngFor="let item of items.concat(items)">
          <i [class]="item.icon"></i>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .marquee-container {
      width: 100%;
      overflow: hidden;
      padding: 2rem 0;
      position: relative;
      background: rgba(255, 255, 255, 0.02);
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
    }
    .marquee-content {
      display: flex;
      gap: 4rem;
      width: max-content;
      animation: marquee linear infinite;
    }
    .marquee-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-light);
      opacity: 0.6;
      transition: opacity 0.3s;
    }
    .marquee-item:hover {
      opacity: 1;
      color: var(--color-primary);
    }
    .marquee-item i {
      font-size: 2rem;
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `]
})
export class MarqueeComponent {
    @Input() items: { icon: string; label: string }[] = [];
    @Input() speed: number = 20;
}
