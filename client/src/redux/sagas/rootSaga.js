import { all } from '@redux-saga/core/effects';
import { HomeSagas } from './../../layouts/HomeTemplate/Home/modules/redux/sagas';
import { PostDetailSagas } from './../../layouts/HomeTemplate/Detail/modules/redux/sagas';

export default function* rootSaga() {
  yield all([...HomeSagas, ...PostDetailSagas]);
}
