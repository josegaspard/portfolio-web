import { Component, OnInit, inject, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visual-board',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="visual-board glass-premium" #board>
      <div class="board-header">
        <h3 class="gradient-text-premium">Engineered Growth Board</h3>
        <p>Interactive ecosystem of results and technologies</p>
      </div>
      <div class="board-container">
        <div *ngFor="let el of boardElements" 
             class="board-item glass-item"
             [style.top]="el.top" 
             [style.left]="el.left"
             (mousedown)="onMouseDown($event, el)">
          <i [class]="el.icon"></i>
          <div class="item-content">
            <span class="label">{{ el.label }}</span>
            <span class="value">{{ el.value }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./visual-board.css']
})
export class VisualBoardComponent implements OnInit {
  boardElements = [
    { icon: 'fas fa-chart-line', label: 'Organic Traffic', value: '+300%', top: '15%', left: '8%' },
    { icon: 'fab fa-angular', label: 'Frontend Architecture', value: 'Signals Ready', top: '12%', left: '55%' },
    { icon: 'fas fa-shield-alt', label: 'Technical SEO', value: 'Audit Passed', top: '45%', left: '15%' },
    { icon: 'fas fa-link', label: 'Authority', value: 'High DA Links', top: '42%', left: '65%' },
    { icon: 'fab fa-node-js', label: 'Backend Speed', value: '100ms Response', top: '68%', left: '35%' },
    { icon: 'fas fa-rocket', label: 'Core Web Vitals', value: '98/100', top: '28%', left: '30%' },
    { icon: 'fas fa-trophy', label: 'Top Rankings', value: '#1 Position', top: '60%', left: '70%' },
    { icon: 'fas fa-bolt', label: 'Performance', value: 'Optimized', top: '75%', left: '10%' },
    { icon: 'fab fa-google', label: 'Search Console', value: 'Verified', top: '30%', left: '78%' },
    { icon: 'fas fa-code', label: 'Clean Code', value: 'A+ Quality', top: '55%', left: '50%' }
  ];

  onMouseDown(event: MouseEvent, el: any) {
    // Basic interaction logic could go here
    // For now, it stays as a high-fidelity visual layout
  }

  ngOnInit() { }
}
