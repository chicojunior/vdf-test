import { createAction, props } from '@ngrx/store';

export const loadTestActions = createAction(
  '[TestAction] Load TestActions'
);

export const loadTestActionsSuccess = createAction(
  '[TestAction] Load TestActions Success',
  props<{ data: any }>()
);

export const loadTestActionsFailure = createAction(
  '[TestAction] Load TestActions Failure',
  props<{ error: any }>()
);
