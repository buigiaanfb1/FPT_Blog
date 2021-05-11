import {
  GET_ALL_POSTS_FAILED,
  GET_ALL_POSTS_REQUESTED,
  GET_ALL_POSTS_SUCCEED,
} from './constants';

const initialState = {
  posts: [],
  isLoading: false,
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS_REQUESTED:
      state.isLoading = true;
      return { ...state };

    case GET_ALL_POSTS_SUCCEED:
      state.posts = payload;
      state.isLoading = false;
      state.errors = false;
      return { ...state };

    case GET_ALL_POSTS_FAILED:
      state.isLoading = false;
      state.errors = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
