import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'legal-notice',
    loadComponent: () => import('./pages/legal-notice/legal-notice').then(m => m.LegalNoticeComponent)
  },
{
    path: '**',
    redirectTo: ''
  }
];
