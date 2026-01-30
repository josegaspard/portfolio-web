import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-media-gallery',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-header">
      <h2>Media Library</h2>
      <button class="btn-primary"><i class="fas fa-upload"></i> Upload Media</button>
    </div>

    <div class="media-grid">
      <!-- Mock Data -->
      <div class="media-item" *ngFor="let item of mediaItems">
        <div class="media-preview" [style.background-image]="'url(' + item.url + ')'"></div>
        <div class="media-details">
            <span class="media-name">{{ item.name }}</span>
            <button class="btn-icon-sm"><i class="fas fa-trash"></i></button>
        </div>
      </div>
      
      <!-- Placeholder for empty state if needed -->
    </div>
  `,
    styles: [`
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0; }
    
    .btn-primary {
      background-color: #3b82f6;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.2s;
    }
    .btn-primary:hover { background-color: #2563eb; }

    .media-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .media-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .media-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    }

    .media-preview {
      height: 150px;
      background-size: cover;
      background-position: center;
      background-color: #e2e8f0;
    }

    .media-details {
      padding: 0.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #f1f5f9;
    }

    .media-name {
      font-size: 0.875rem;
      color: #334155;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 140px;
    }

    .btn-icon-sm {
      background: none;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      padding: 4px;
    }
    .btn-icon-sm:hover { color: #ef4444; }
  `]
})
export class MediaGalleryComponent {
    mediaItems = [
        { name: 'profile.jpg', url: 'https://josegaspard.dev/img/portfolio/josegaspard.jpg' },
        { name: 'project-1.jpg', url: 'https://i.imgur.com/pBaZb3z.jpeg' },
        { name: 'logo.png', url: 'https://via.placeholder.com/150' },
        { name: 'banner.png', url: 'https://via.placeholder.com/300x150' },
        { name: 'icon.png', url: 'https://via.placeholder.com/100' },
    ];
}
