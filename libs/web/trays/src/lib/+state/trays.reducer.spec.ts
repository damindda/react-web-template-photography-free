import { Action } from '@ngrx/store';

import * as TraysActions from './trays.actions';
import { TraysEntity } from './trays.models';
import { TraysState, initialTraysState, traysReducer } from './trays.reducer';

describe('Trays Reducer', () => {
  const createTraysEntity = (id: string, name = ''): TraysEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Trays actions', () => {
    it('loadTraysSuccess should return the list of known Trays', () => {
      const trays = [
        createTraysEntity('PRODUCT-AAA'),
        createTraysEntity('PRODUCT-zzz'),
      ];
      const action = TraysActions.loadTraysSuccess({ trays });

      const result: TraysState = traysReducer(initialTraysState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = traysReducer(initialTraysState, action);

      expect(result).toBe(initialTraysState);
    });
  });
});
