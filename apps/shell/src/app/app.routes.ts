import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'trays',
    loadChildren: () =>
      import('@growth-tower/trays').then((m) => m.traysRoutes),
  },
  {
    path: 'tower',
    loadChildren: () => import('tower/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
