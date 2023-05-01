import { Route } from '@angular/router';
import { TraysComponent } from './trays/trays.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromTrays from './+state/trays.reducer';
import { TraysEffects } from './+state/trays.effects';
import { TraysFacade } from './+state/trays.facade';

export const traysRoutes: Route[] = [
  {
    path: '',
    component: TraysComponent,
    providers: [
      TraysFacade,
      provideState(fromTrays.TRAYS_FEATURE_KEY, fromTrays.traysReducer),
      provideEffects(TraysEffects),
    ],
  },
];
