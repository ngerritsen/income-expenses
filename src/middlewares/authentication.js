/* eslint-disable no-console */

import { createActionHandler } from 'redux-map-action-handlers';

import firebase from 'firebase/app';
import * as authenticationService from '../services/authenticationService';
import * as constants from '../constants';
import * as actions from '../actions';
import { FIREBASE_CONFIG } from '../constants';

firebase.initializeApp(FIREBASE_CONFIG);

const handleAction = createActionHandler({
  [constants.LOGIN]: login,
  [constants.LOGOUT]: logout
});

export default function authenticationMiddleware(store) {
  authenticationService.onLoginStateChange((loggedIn) => {
    console.log(loggedIn);
    if (loggedIn && !store.getState().authentication.loggedIn) {
      store.dispatch(actions.loginSucceeded());
      store.dispatch(actions.getAllItems());
    }

    if (!loggedIn && store.getState().authentication.loggedIn) {
      store.dispatch(actions.logoutSucceeded());
    }
  });

  return next => action => {
    handleAction(store, action);

    return next(action);
  };
}

async function login(store, action) {
  try {
    await authenticationService.login(action.email, action.password);
    store.dispatch(actions.loginSucceeded());
    store.dispatch(actions.getAllItems());
  } catch (error) {
    console.error(error);
    store.dispatch(actions.loginFailed(error));
  }
}

async function logout(store) {
  try {
    await authenticationService.logout();
    store.dispatch(actions.logoutSucceeded());
  } catch (error) {
    console.error(error);
    store.dispatch(actions.logoutFailed(error));
  }
}
