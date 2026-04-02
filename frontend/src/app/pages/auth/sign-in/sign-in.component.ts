import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  readonly auth = inject(AuthService);
  readonly language = inject(LanguageService);
  form = { email: '', password: '' };
  error = '';

  submit(): void {
    this.error = '';
    this.auth.login(this.form).subscribe({
      error: (err) => this.error = err.error?.message ?? 'Login failed'
    });
  }
}
