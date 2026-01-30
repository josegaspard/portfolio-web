import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../services/content';
import { Content } from '../../../interfaces/content.interface';
import { RouterModule } from '@angular/router';
import { StatusBadgeComponent } from '../../../components/shared/status-badge/status-badge.component';
import { SkeletonComponent } from '../../../components/shared/skeleton/skeleton.component';

@Component({
  selector: 'app-admin-content-list',
  standalone: true,
  imports: [CommonModule, RouterModule, StatusBadgeComponent, SkeletonComponent],
  template: `
    <div class="page-header">
      <div>
        <h2>Pages & Posts</h2>
        <p class="subtitle">Manage your website content</p>
      </div>
      <a routerLink="/admin/content/new" class="btn-primary"><i class="fas fa-plus"></i> Create New</a>
    </div>
    
    <div class="content-card">
      <div class="table-responsive" *ngIf="!loading; else skeletonTable">
        <table class="content-table" *ngIf="contents.length > 0; else noContent">
          <thead>
            <tr>
              <th width="40%">Title</th>
              <th width="20%">Type</th>
              <th width="20%">Status</th>
              <th width="20%" class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of contents" class="table-row">
              <td>
                  <div class="item-title">{{ item.title }}</div>
                  <div class="item-meta">/{{ item.slug }}</div>
              </td>
              <td><span class="type-badge">{{ item.type }}</span></td>
              <td><app-status-badge [status]="item.status"></app-status-badge></td>
              <td class="text-right">
                  <div class="actions-group">
                      <a [routerLink]="['/admin/content/edit', item.id]" class="btn-icon" title="Edit"><i class="fas fa-edit"></i></a>
                      <button class="btn-icon delete" (click)="deleteContent(item.id!)" title="Delete"><i class="fas fa-trash-alt"></i></button>
                      <a [routerLink]="['/', item.slug]" target="_blank" class="btn-icon" title="View"><i class="fas fa-external-link-alt"></i></a>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ng-template #noContent>
        <div class="empty-state">
            <div class="empty-icon"><i class="fas fa-file-alt"></i></div>
            <h3>No content yet</h3>
            <p>Get started by creating your first page or post.</p>
            <a routerLink="/admin/content/new" class="btn-primary-outline">Create Content</a>
        </div>
      </ng-template>

      <ng-template #skeletonTable>
        <div style="padding: 1.5rem;">
          <app-skeleton width="100%" height="40px" style="margin-bottom: 1rem;"></app-skeleton>
          <app-skeleton width="100%" height="60px" style="margin-bottom: 0.5rem;"></app-skeleton>
          <app-skeleton width="100%" height="60px" style="margin-bottom: 0.5rem;"></app-skeleton>
          <app-skeleton width="100%" height="60px"></app-skeleton>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
    h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0; }
    .subtitle { color: #64748b; margin-top: 0.25rem; font-size: 0.875rem; }

    .btn-primary {
      background-color: #3b82f6;
      color: white;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.2s;
    }
    .btn-primary:hover { background-color: #2563eb; }
    
    .btn-primary-outline {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.75rem 1.5rem;
        border: 1px solid #3b82f6;
        color: #3b82f6;
        border-radius: 6px;
        font-weight: 600;
        text-decoration: none;
    }

    .content-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
        overflow: hidden;
    }

    .content-table { width: 100%; border-collapse: collapse; }
    .content-table th { 
        background: #f8fafc; 
        padding: 1rem 1.5rem; 
        text-align: left; 
        font-weight: 600; 
        color: #64748b; 
        font-size: 0.75rem; 
        text-transform: uppercase; 
        letter-spacing: 0.05em;
        border-bottom: 1px solid #e2e8f0;
    }
    .content-table td { padding: 1rem 1.5rem; border-bottom: 1px solid #f1f5f9; vertical-align: middle; }
    
    .table-row:hover { background-color: #f8fafc; }
    .item-title { font-weight: 500; color: #1e293b; }
    .item-meta { font-size: 0.75rem; color: #94a3b8; font-family: monospace; margin-top: 0.125rem; }
    
    .type-badge {
        background: #e0e7ff; color: #4338ca;
        padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
    }

    .text-right { text-align: right; }
    .actions-group { display: flex; justify-content: flex-end; gap: 0.5rem; opacity: 0.6; transition: opacity 0.2s; }
    .table-row:hover .actions-group { opacity: 1; }

    .btn-icon {
        background: none; border: none; color: #64748b; cursor: pointer; padding: 0.5rem; border-radius: 4px; transition: all 0.2s;
        display: inline-flex; align-items: center; justify-content: center;
    }
    .btn-icon:hover { background-color: #e2e8f0; color: #3b82f6; }
    .btn-icon.delete:hover { background-color: #fee2e2; color: #ef4444; }

    .empty-state { padding: 4rem 2rem; text-align: center; }
    .empty-icon { font-size: 3rem; color: #cbd5e1; margin-bottom: 1rem; }
  `]
})
export class AdminContentListComponent implements OnInit {
  contents: Content[] = [];
  loading = true;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.loading = true;
    this.contentService.getAll().subscribe({
      next: (data) => {
        this.contents = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('AdminContentList load error:', err);
        this.loading = false;
      }
    });
  }

  deleteContent(id: number) {
    if (confirm('Are you sure you want to delete this content?')) {
      this.contentService.delete(id).subscribe(() => this.loadContent());
    }
  }
}
