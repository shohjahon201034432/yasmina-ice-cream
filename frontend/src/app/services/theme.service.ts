import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'yasmina-theme';

  initializeTheme(): void {
    const saved = localStorage.getItem(this.storageKey) ?? 'light';
    document.body.dataset['theme'] = saved;
  }

  toggleTheme(): void {
    const next = this.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.storageKey, next);
    document.body.dataset['theme'] = next;
  }

  get currentTheme(): 'light' | 'dark' {
    return (document.body.dataset['theme'] as 'light' | 'dark') ?? 'light';
  }
}
