import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
  CLEAN_UP_COMMENTS,
  GET_DETAIL_FAILED,
  GET_DETAIL_REQUESTED,
  GET_DETAIL_REQUESTED_SAGA,
  GET_DETAIL_SUCCEED,
  POST_NEW_COMMENT_REQUESTED_SAGA,
} from './constants';
import { STATUS_CODE } from '../../../../../common/constants';
import {
  getDetailService,
  postCommentService,
} from '../services/DetailServices';

function* getDetailRequestedFromHomeCmp({ payload }) {
  yield put({
    type: GET_DETAIL_REQUESTED,
  });
  try {
    const { data, status } = yield call(getDetailService, payload);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_DETAIL_SUCCEED,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: GET_DETAIL_FAILED,
      payload: err.response.data,
    });
  }
}

function* postNewCommentFromHomeCmp({ payload }) {
  const { newComment, slug } = payload;
  try {
    const { data, status } = yield call(postCommentService, {
      newComment,
      slug,
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: CLEAN_UP_COMMENTS,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err.response.data);
  }
}

export const PostDetailSagas = [
  takeLatest(GET_DETAIL_REQUESTED_SAGA, getDetailRequestedFromHomeCmp),
  takeLatest(POST_NEW_COMMENT_REQUESTED_SAGA, postNewCommentFromHomeCmp),
];
