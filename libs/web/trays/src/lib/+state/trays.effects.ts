import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as TraysActions from './trays.actions';
import * as TraysFeature from './trays.reducer';

@Injectable()
export class TraysEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TraysActions.initTrays),
      switchMap(() => of(TraysActions.loadTraysSuccess({ trays: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(TraysActions.loadTraysFailure({ error }));
      })
    )
  );
}
