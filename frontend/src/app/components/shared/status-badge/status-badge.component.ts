import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-status-badge',
    standalone: true,
    imports: [CommonModule],
    template: `
    <span class="badge" [ngClass]="status">
      <span class="dot"></span>
      {{ status | titlecase }}
    </span>
  `,
    styles: [`
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.25rem 0.625rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: capitalize;
    }

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }

    /* Published (Green) */
    .published { background-color: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
    .published .dot { background-color: #166534; }

    /* Draft (Gray/Yellow) */
    .draft { background-color: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; }
    .draft .dot { background-color: #94a3b8; }

    /* Archived (Red/Orange) */
    .archived { background-color: #fff7ed; color: #9a3412; border: 1px solid #ffedd5; }
    .archived .dot { background-color: #ea580c; }
  `]
})
export class StatusBadgeComponent {
    @Input() status: 'published' | 'draft' | 'archived' = 'draft';
}
