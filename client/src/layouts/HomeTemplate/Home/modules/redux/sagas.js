import { call, put, takeLatest } from '@redux-saga/core/effects';
import { getAllPostsService } from '../services/HomeServices';
import {
  GET_ALL_POSTS_FAILED,
  GET_ALL_POSTS_REQUESTED,
  GET_ALL_POSTS_REQUESTED_SAGA,
  GET_ALL_POSTS_SUCCEED,
} from './constants';
import { STATUS_CODE } from '../../../../../common/constants';

function* getAllPostsRequestedFromHomeCmp() {
  yield put({
    type: GET_ALL_POSTS_REQUESTED,
  });
  try {
    const { data, status } = yield call(getAllPostsService);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_ALL_POSTS_SUCCEED,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: GET_ALL_POSTS_FAILED,
      payload: err.response.data,
    });
  }
}

export const HomeSagas = [
  takeLatest(GET_ALL_POSTS_REQUESTED_SAGA, getAllPostsRequestedFromHomeCmp),
];
