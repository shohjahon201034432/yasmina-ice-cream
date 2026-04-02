import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  readonly auth = inject(AuthService);
  readonly language = inject(LanguageService);
  form = { name: '', email: '', password: '' };
  error = '';

  submit(): void {
    this.error = '';
    this.auth.register(this.form).subscribe({
      error: (err) => this.error = err.error?.message ?? 'Registration failed'
    });
  }
}
