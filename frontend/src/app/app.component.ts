import { Component, OnInit, inject, signal } from '@angular/core';
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
    @if (showIntro()) {
      <div class="intro-screen">
        <div class="intro-core glass-card">
          <img src="assets/images/logo-round.png" alt="Yasmina logo">
          <h2>YASMINA</h2>
          <p>Ice Cream Experience</p>
          <div class="intro-loader"><span></span><span></span><span></span></div>
        </div>
      </div>
    }

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
  readonly showIntro = signal(true);

  ngOnInit(): void {
    this.themeService.initializeTheme();
    this.authService.restoreSession();
    setTimeout(() => this.showIntro.set(false), 2200);
  }
}
