import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './actions';
import { authStart } from '../auth/actions';
import { fetchSpecificUsersSuccess, fetchSpecificUsersFail } from './actions';
import { SIGNUP_START, FETCH_SPECIFIC_USERS_START } from './types';
import { signupUrl } from './constants';

export default function* watchUserSaga() {
  yield takeLatest(SIGNUP_START, signup);
  yield takeLatest(FETCH_SPECIFIC_USERS_START, fetchSpecificUsers);
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
    yield put(actions.signupFail(error.message));
  }
}

function* fetchSpecificUsers(action) {
  const { userType } = action;
  let userList;
  try {
    switch (userType) {
      case 'all':
        userList = yield call(() => axios.get('http://localhost:3000/users'));
        break;
      case 'employees':
        userList = yield call(() =>
          axios.get('http://localhost:3000/users/role?role=employee')
        );
        break;
      case 'managers':
        userList = yield call(() =>
          axios.get('http://localhost:3000/users/role?role=manager')
        );
        break;
      default:
        userList = yield call(() => axios.get('http://localhost:3000/users'));
        break;
    }
    yield put(fetchSpecificUsersSuccess(userList.data));
  } catch (error) {
    yield put(fetchSpecificUsersFail(error.message));
  }
}
