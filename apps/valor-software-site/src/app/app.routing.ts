import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('home-page').then(m => m.HomePageModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

