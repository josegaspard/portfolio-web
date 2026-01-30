import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/auth'; // Adjust in prod

    constructor(private http: HttpClient, private router: Router) { }

    login(credentials: { username: string, password: string }) {
        return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
            tap(response => {
                if (response.access_token) {
                    localStorage.setItem('access_token', response.access_token);
                }
            })
        );
    }

    logout() {
        localStorage.removeItem('access_token');
        this.router.navigate(['/admin/login']);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('access_token');
    }
}
