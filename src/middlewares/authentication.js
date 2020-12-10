/* eslint-disable no-console */

import { createActionHandler } from 'redux-map-action-handlers';

import * as authenticationService from '../services/authenticationService';
import * as constants from '../constants';
import * as actions from '../actions';

const handleAction = createActionHandler({
  [constants.LOGIN]: login,
  [constants.LOGOUT]: logout,
});

export default function authenticationMiddleware(store) {
  authenticationService.onLoginStateChange((loggedIn) => {
    const { authentication } = store.getState();

    if (loggedIn && !authentication.loggedIn) {
      store.dispatch(actions.loginSucceeded());
      store.dispatch(actions.getAllItems());
    }

    if (!loggedIn && (authentication.loggedIn || !authentication.initialized)) {
      store.dispatch(actions.logoutSucceeded());
    }
  });

  return (next) => (action) => {
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
