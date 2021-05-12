import {
  CLEAN_UP_DETAIL_POST,
  GET_DETAIL_FAILED,
  GET_DETAIL_REQUESTED,
  GET_DETAIL_SUCCEED,
} from './constants';

const initialState = {
  postDetail: null,
  isLoading: false,
  errors: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_REQUESTED:
      state.isLoading = true;
      return { ...state };

    case GET_DETAIL_SUCCEED:
      state.postDetail = payload;
      state.isLoading = false;
      state.errors = false;
      return { ...state };

    case GET_DETAIL_FAILED:
      state.isLoading = false;
      state.errors = true;
      return { ...state };

    case CLEAN_UP_DETAIL_POST:
      state.postDetail = null;
      return { ...state };

    default:
      return { ...state };
  }
};
