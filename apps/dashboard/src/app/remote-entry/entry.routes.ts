import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { DetailsComponent } from '../details/details.component';


export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path: ':id', component: DetailsComponent }
];
