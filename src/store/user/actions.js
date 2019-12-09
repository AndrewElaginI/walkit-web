import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCH_SPECIFIC_USERS_START,
  FETCH_SPECIFIC_USERS_SUCCESS,
  FETCH_SPECIFIC_USERS_FAIL
} from './types';

export const signupStart = (email, password, role = 'employee') => {
  return {
    type: SIGNUP_START,
    email,
    password,
    role
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

export const fetchSpecificUsersStart = (userType = 'all') => {
  return {
    type: FETCH_SPECIFIC_USERS_START,
    userType
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
