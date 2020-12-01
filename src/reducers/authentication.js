import { mapReducers } from 'redux-map-reducers';
import * as constants from '../constants';

const initialState = {
  initialized: false,
  loggedIn: false,
};

const reducerMap = {
  [constants.LOGIN_SUCCEEDED]: loginSucceeded,
  [constants.LOGOUT_SUCCEEDED]: logoutSucceeded,
};

function loginSucceeded(state) {
  return {
    ...state,
    initialized: true,
    loggedIn: true,
  };
}

function logoutSucceeded(state) {
  return {
    ...state,
    initialized: true,
    loggedIn: false,
  };
}

export default mapReducers(reducerMap, initialState);
