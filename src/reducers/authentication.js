import { mapReducers } from 'redux-map-reducers';
import { LOGIN_SUCCESS, LOGOUT } from '../constants';

const initialState = {
  loggedIn: false
};

const reducerMap = {
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGOUT]: logout
};

function loginSuccess(state) {
  return {
    ...state,
    loggedIn: true
  };
}

function logout(state) {
  return {
    ...state,
    loggedIn: false
  };
}

export default mapReducers(reducerMap, initialState);
