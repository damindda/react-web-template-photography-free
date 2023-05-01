import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TraysActions from './trays.actions';
import { TraysEntity } from './trays.models';

export const TRAYS_FEATURE_KEY = 'trays';

export interface TraysState extends EntityState<TraysEntity> {
  selectedId?: string | number; // which Trays record has been selected
  loaded: boolean; // has the Trays list been loaded
  error?: string | null; // last known error (if any)
}

export interface TraysPartialState {
  readonly [TRAYS_FEATURE_KEY]: TraysState;
}

export const traysAdapter: EntityAdapter<TraysEntity> =
  createEntityAdapter<TraysEntity>();

export const initialTraysState: TraysState = traysAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialTraysState,
  on(TraysActions.initTrays, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TraysActions.loadTraysSuccess, (state, { trays }) =>
    traysAdapter.setAll(trays, { ...state, loaded: true })
  ),
  on(TraysActions.loadTraysFailure, (state, { error }) => ({ ...state, error }))
);

export function traysReducer(state: TraysState | undefined, action: Action) {
  return reducer(state, action);
}
