import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('dashboard/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'tower',
    loadChildren: () => import('tower/Routes').then((m) => m.remoteRoutes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
