import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  public language = inject(LanguageService);

  readonly values = [
    {
      title: 'Visual identity',
      text: 'Warm palettes, refined typography and layered surfaces create a memorable premium mood.'
    },
    {
      title: 'Product feeling',
      text: 'The design is built to make every flavor feel curated, soft and desirable.'
    },
    {
      title: 'Customer memory',
      text: 'Strong aesthetic storytelling helps users remember the brand after leaving the page.'
    }
  ];
}
