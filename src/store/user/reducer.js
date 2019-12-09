import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCH_SPECIFIC_USERS_START,
  FETCH_SPECIFIC_USERS_SUCCESS,
  FETCH_SPECIFIC_USERS_FAIL
} from './types';

const initialState = {
  error: null,
  registering: false,
  userList: [],
  loadingUserList: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        ...{ registering: true, error: null }
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        registering: false
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        registering: false,
        error: action.error
      };
    case FETCH_SPECIFIC_USERS_START:
      return {
        ...state,
        ...{ loadingUserList: true, error: null }
      };
    case FETCH_SPECIFIC_USERS_SUCCESS:
      return {
        ...state,
        userList: action.userList,
        loadingUserList: false
      };
    case FETCH_SPECIFIC_USERS_FAIL:
      return {
        ...state,
        loadingUserList: false,
        error: action.error
      };
    default:
      return state;
  }
};
