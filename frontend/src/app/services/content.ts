import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, take, timeout } from 'rxjs/operators';
import { Content } from '../interfaces/content.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://localhost:3000/content'; // TODO: Environment variable

  constructor(private http: HttpClient) { }

  getAll(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiUrl).pipe(
      take(1),
      timeout(5000),
      catchError(err => {
        console.error('ContentService.getAll error:', err);
        return of([]);
      })
    );
  }

  getById(id: number): Observable<Content | null> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`).pipe(
      take(1),
      timeout(5000),
      catchError(err => {
        console.error('ContentService.getById error:', err);
        return of(null);
      })
    );
  }

  getBySlug(slug: string): Observable<Content | null> {
    return this.http.get<Content>(`${this.apiUrl}/slug/${slug}`).pipe(
      take(1),
      timeout(5000),
      catchError(err => {
        console.error('ContentService.getBySlug error:', err);
        return of(null);
      })
    );
  }

  create(content: Partial<Content>): Observable<Content> {
    return this.http.post<Content>(this.apiUrl, content);
  }

  update(id: number, content: Partial<Content>): Observable<Content> {
    return this.http.patch<Content>(`${this.apiUrl}/${id}`, content);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
