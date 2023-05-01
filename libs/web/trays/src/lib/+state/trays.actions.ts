import { createAction, props } from '@ngrx/store';
import { TraysEntity } from './trays.models';

export const initTrays = createAction('[Trays Page] Init');

export const loadTraysSuccess = createAction(
  '[Trays/API] Load Trays Success',
  props<{ trays: TraysEntity[] }>()
);

export const loadTraysFailure = createAction(
  '[Trays/API] Load Trays Failure',
  props<{ error: any }>()
);
