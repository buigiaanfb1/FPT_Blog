import { MOVE_IMAGES_TO_REDUCER } from './constants';

const initialState = {
  images: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVE_IMAGES_TO_REDUCER:
      state.images = payload;
      return { ...state };

    default:
      return state;
  }
};
