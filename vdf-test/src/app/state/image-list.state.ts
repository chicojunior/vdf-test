import Image from '../model/image.model';

export default class ImageListState {
  imageList: Array<Image>;
}

export const initializeState = (): ImageListState => {
  return { imageList: Array<Image>() };
};
