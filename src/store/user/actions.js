import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from './types';

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
