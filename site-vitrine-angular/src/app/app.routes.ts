import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ServicesComponent } from './pages/services/services.component';
import { RealisationsComponent } from './pages/realisations/realisations.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
