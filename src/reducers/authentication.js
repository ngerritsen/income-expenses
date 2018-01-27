import { mapReducers } from 'redux-map-reducers';
import { LOGIN_SUCCESS } from '../constants';

const initialState = {
  loggedIn: false
};

const reducerMap = {
  [LOGIN_SUCCESS]: loginSuccess
};

function loginSuccess(state) {
  return {
    ...state,
    loggedIn: true
  };
}

export default mapReducers(reducerMap, initialState);
