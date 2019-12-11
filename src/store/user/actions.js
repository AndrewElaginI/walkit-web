import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCH_SPECIFIC_USERS_START,
  FETCH_SPECIFIC_USERS_SUCCESS,
  FETCH_SPECIFIC_USERS_FAIL
} from './types';

export const signupStart = (
  email,
  password,
  role = 'employee',
  userType = 'all'
) => {
  return {
    type: SIGNUP_START,
    email,
    password,
    role,
    userType
  };
};

export const signupSuccess = user => {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
};

export const signupFail = error => {
  return {
    type: SIGNUP_FAIL,
    error: error
  };
};

export const fetchSpecificUsersStart = (
  role = 'employee',
  userType = 'all',
  token
) => {
  return {
    type: FETCH_SPECIFIC_USERS_START,
    role,
    userType,
    token
  };
};

export const fetchSpecificUsersSuccess = userList => {
  return {
    type: FETCH_SPECIFIC_USERS_SUCCESS,
    userList
  };
};

export const fetchSpecificUsersFail = error => {
  return {
    type: FETCH_SPECIFIC_USERS_FAIL,
    error: error
  };
};
