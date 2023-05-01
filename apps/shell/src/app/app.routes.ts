import { ShellComponent } from './shell.component';
import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tower',
    loadChildren: () => import('tower/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: ShellComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

