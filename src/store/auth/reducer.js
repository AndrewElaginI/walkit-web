import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './types';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        ...{ loading: true, error: null }
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        loading: false
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case AUTH_LOGOUT:
      return { ...state, token: null, userId: null };
    default:
      return state;
  }
};
