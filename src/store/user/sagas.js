import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './actions';
import { authStart } from '../auth/actions';
import { SIGNUP_START } from './types';
import { signupUrl } from './constants';

export default function* watchUserSaga() {
  yield takeLatest(SIGNUP_START, signup);
}

function* signup(action) {
  const { email, password, role } = action;
  try {
    const signupUser = yield call(() =>
      axios.post(signupUrl, {
        email,
        password,
        role
      })
    );
    yield put(actions.signupSuccess());
    yield put(authStart(signupUser.data.email, signupUser.data.password));
  } catch (error) {
    yield put(actions.signupFail());
  }
}
