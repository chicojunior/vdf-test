import { ActionReducerMap } from '@ngrx/store';

import * as fromImage from './image/image.reducer';

export interface AppState {
  images: fromImage.ImageState;
}

export const reducers: ActionReducerMap<AppState> = {
  images: fromImage.reducer
};
