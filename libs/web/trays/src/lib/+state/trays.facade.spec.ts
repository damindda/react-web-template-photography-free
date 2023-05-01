import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as TraysActions from './trays.actions';
import { TraysEffects } from './trays.effects';
import { TraysFacade } from './trays.facade';
import { TraysEntity } from './trays.models';
import {
  TRAYS_FEATURE_KEY,
  TraysState,
  initialTraysState,
  traysReducer,
} from './trays.reducer';
import * as TraysSelectors from './trays.selectors';

interface TestSchema {
  trays: TraysState;
}

describe('TraysFacade', () => {
  let facade: TraysFacade;
  let store: Store<TestSchema>;
  const createTraysEntity = (id: string, name = ''): TraysEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TRAYS_FEATURE_KEY, traysReducer),
          EffectsModule.forFeature([TraysEffects]),
        ],
        providers: [TraysFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(TraysFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allTrays$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allTrays$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadTraysSuccess` to manually update list
     */
    it('allTrays$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allTrays$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        TraysActions.loadTraysSuccess({
          trays: [createTraysEntity('AAA'), createTraysEntity('BBB')],
        })
      );

      list = await readFirst(facade.allTrays$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
