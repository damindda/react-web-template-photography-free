import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as TraysActions from './trays.actions';
import { TraysEffects } from './trays.effects';

describe('TraysEffects', () => {
  let actions: Observable<Action>;
  let effects: TraysEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TraysEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TraysEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TraysActions.initTrays() });

      const expected = hot('-a-|', {
        a: TraysActions.loadTraysSuccess({ trays: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
