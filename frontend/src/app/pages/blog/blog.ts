import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content';
import { Content } from '../../interfaces/content.interface';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import * as AOS from 'aos';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class BlogComponent implements OnInit, AfterViewInit {
  contentService = inject(ContentService);
  posts: Content[] = [];
  loading = true;

  ngOnInit() {
    this.contentService.getAll().subscribe(all => {
      this.posts = all.filter(p => p.type === 'post' && p.status === 'published');
      this.loading = false;
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          AOS.refresh();
        }
      }, 100);
    });
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }
}
