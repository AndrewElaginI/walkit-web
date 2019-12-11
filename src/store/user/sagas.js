import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './actions';
import { authStart } from '../auth/actions';
import { fetchSpecificUsersSuccess, fetchSpecificUsersFail } from './actions';
import { SIGNUP_START, FETCH_SPECIFIC_USERS_START } from './types';
import {
  signupUrl,
  fetchAllUsersUrl,
  fetchManagersUrl,
  fetchEmployeesUrl
} from './constants';

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

const fetchUsersApi = (role, url, token) =>
  axios.get(url, {
    headers: { Authorization: `bearer ${token}` },
    params: {
      role: role
    }
  });

function* fetchSpecificUsers(action) {
  const { role, userType, token } = action;
  let userList = {};
  try {
    switch (userType) {
      case 'all':
        userList = yield call(() =>
          fetchUsersApi(role, fetchAllUsersUrl, token)
        );
        break;
      case 'employee':
        userList = yield call(() =>
          fetchUsersApi(role, fetchEmployeesUrl, token)
        );
        break;
      case 'manager':
        userList = yield call(() =>
          fetchUsersApi(role, fetchManagersUrl, token)
        );
        break;
      default:
        userList = yield call(() =>
          fetchUsersApi(role, fetchAllUsersUrl, token)
        );
        break;
    }
    yield put(fetchSpecificUsersSuccess(userList.data));
  } catch (error) {
    yield put(fetchSpecificUsersFail(error.message));
  }
}
