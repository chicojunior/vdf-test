import { createAction, props } from '@ngrx/store';

export enum ImageActionTypes {
  Load = '[Image] Load',
  LoadSuccess = '[Image] Load Success',
  LoadFailure = '[Image] Load Failure'
}

export const loadImageList = createAction(
  ImageActionTypes.Load,
  props<{ query: string }>()
);

export const loadImageListSuccess = createAction(
  ImageActionTypes.LoadSuccess,
  props<{ payload: any[] }>()
);

export const loadImageListFailure = createAction(
  ImageActionTypes.LoadFailure,
  props<{ error: any }>()
);
