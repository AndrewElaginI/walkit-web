import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from './types';

const initialState = {
  error: null,
  registering: false
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
    default:
      return state;
  }
};
