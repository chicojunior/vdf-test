import { createReducer, on, createFeatureSelector, createSelector, Action } from '@ngrx/store';
import * as ImageActions from './image.actions';
// import { ImageActions, ImageActionTypes } from '../../actions/image.actions';

export interface ImageState {
  imageList: any[];
}

const initialState: ImageState = {
  imageList: []
};

const imageReducer = createReducer(
  initialState,
  on(ImageActions.loadImageListSuccess, state => ({ ...state, imageList: state.imageList}))
);

export function reducer(state: ImageState | undefined, action: Action) {
  return imageReducer(state, action);
}

export const allImagesSelector = createFeatureSelector('images');
export const imagesSelector = createSelector(allImagesSelector, (images: ImageState) => images.imageList);
