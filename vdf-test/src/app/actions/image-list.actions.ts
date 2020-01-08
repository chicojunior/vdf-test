import { createAction, props } from '@ngrx/store';

export const loadImageList = createAction(
  '[ImageList] Load ImageList'
);

export const loadImageListSuccess = createAction(
  '[ImageList] Load ImageList Success',
  props<{ data: any }>()
);

export const loadImageListFailure = createAction(
  '[ImageList] Load ImageList Failure',
  props<{ error: any }>()
);
