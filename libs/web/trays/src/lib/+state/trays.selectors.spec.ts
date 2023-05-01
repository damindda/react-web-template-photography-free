import { TraysEntity } from './trays.models';
import {
  traysAdapter,
  TraysPartialState,
  initialTraysState,
} from './trays.reducer';
import * as TraysSelectors from './trays.selectors';

describe('Trays Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTraysId = (it: TraysEntity) => it.id;
  const createTraysEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TraysEntity);

  let state: TraysPartialState;

  beforeEach(() => {
    state = {
      trays: traysAdapter.setAll(
        [
          createTraysEntity('PRODUCT-AAA'),
          createTraysEntity('PRODUCT-BBB'),
          createTraysEntity('PRODUCT-CCC'),
        ],
        {
          ...initialTraysState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Trays Selectors', () => {
    it('selectAllTrays() should return the list of Trays', () => {
      const results = TraysSelectors.selectAllTrays(state);
      const selId = getTraysId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = TraysSelectors.selectEntity(state) as TraysEntity;
      const selId = getTraysId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectTraysLoaded() should return the current "loaded" status', () => {
      const result = TraysSelectors.selectTraysLoaded(state);

      expect(result).toBe(true);
    });

    it('selectTraysError() should return the current "error" state', () => {
      const result = TraysSelectors.selectTraysError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
