import {
  CLEAN_UP_COMMENTS,
  CLEAN_UP_DETAIL_POST,
  GET_DETAIL_FAILED,
  GET_DETAIL_REQUESTED,
  GET_DETAIL_SUCCEED,
  PUSH_CODE_TO_REDUCER,
} from './constants';

const initialState = {
  postDetail: null,
  isLoading: false,
  errors: null,
  newComments: null,
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

    case CLEAN_UP_COMMENTS:
      state.newComments = null;
      return { ...state };

    case PUSH_CODE_TO_REDUCER:
      state.newComments = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
