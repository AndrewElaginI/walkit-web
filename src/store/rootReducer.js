import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as userReducer } from './auth/reducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer
  });

export default createRootReducer;
