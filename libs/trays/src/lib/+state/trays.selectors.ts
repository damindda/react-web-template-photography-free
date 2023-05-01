import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TRAYS_FEATURE_KEY, TraysState, traysAdapter } from './trays.reducer';

// Lookup the 'Trays' feature state managed by NgRx
export const selectTraysState =
  createFeatureSelector<TraysState>(TRAYS_FEATURE_KEY);

const { selectAll, selectEntities } = traysAdapter.getSelectors();

export const selectTraysLoaded = createSelector(
  selectTraysState,
  (state: TraysState) => state.loaded
);

export const selectTraysError = createSelector(
  selectTraysState,
  (state: TraysState) => state.error
);

export const selectAllTrays = createSelector(
  selectTraysState,
  (state: TraysState) => selectAll(state)
);

export const selectTraysEntities = createSelector(
  selectTraysState,
  (state: TraysState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectTraysState,
  (state: TraysState) => state.selectedId
);

export const selectEntity = createSelector(
  selectTraysEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
