import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

interface AuthPayload {
  name?: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly apiUrl = 'http://localhost:3000/api/auth';
  private readonly storageKey = 'yasmina-user';
  readonly user = signal<User | null>(null);
  readonly isAuthenticated = computed(() => !!this.user());

  register(payload: AuthPayload): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, payload).pipe(
      tap((user) => this.setSession(user))
    );
  }

  login(payload: AuthPayload): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, payload).pipe(
      tap((user) => this.setSession(user))
    );
  }

  restoreSession(): void {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return;
    this.user.set(JSON.parse(raw) as User);
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.user.set(null);
    this.router.navigateByUrl('/');
  }

  private setSession(user: User): void {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
    this.user.set(user);
    this.router.navigateByUrl('/');
  }
}
