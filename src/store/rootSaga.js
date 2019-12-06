import { all } from 'redux-saga/effects';

import watchAuthSaga from './auth/sagas';

export default function* rootSaga() {
  yield all([watchAuthSaga()]);
}
