import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FlavorsComponent } from './pages/flavors/flavors.component';
import { StoryComponent } from './pages/story/story.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flavors', component: FlavorsComponent },
  { path: 'story', component: StoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
