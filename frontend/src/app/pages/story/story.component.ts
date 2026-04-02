import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-story',
  standalone: true,
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  public language = inject(LanguageService);
}
