import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { AuthService } from './services/auth.service';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ChatWidgetComponent],
  template: `
    <div class="app-shell">
      <app-navbar></app-navbar>
      <main class="page-shell">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>

<app-chat-widget></app-chat-widget>

  `
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.themeService.initializeTheme();
    this.authService.restoreSession();
  }
}
