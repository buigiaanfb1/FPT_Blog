import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
  GET_DETAIL_FAILED,
  GET_DETAIL_REQUESTED,
  GET_DETAIL_REQUESTED_SAGA,
  GET_DETAIL_SUCCEED,
} from './constants';
import { STATUS_CODE } from '../../../../../common/constants';
import { getDetailService } from '../services/DetailServices';

function* getDetailRequestedFromHomeCmp({ payload }) {
  console.log(payload);
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

export const PostDetailSagas = [
  takeLatest(GET_DETAIL_REQUESTED_SAGA, getDetailRequestedFromHomeCmp),
];
