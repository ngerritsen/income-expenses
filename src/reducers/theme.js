import { mapReducers } from 'redux-map-reducers';
import * as constants from '../constants';
import { useDarkMode } from '../helpers/theme';

const initialState = {
  useDarkMode: useDarkMode(),
};

const reducerMap = {
  [constants.ACTIVATE_DARK_MODE]: activateDarkMode,
  [constants.DEACTIVATE_DARK_MODE]: deactivateDarkMode,
};

function activateDarkMode(state) {
  return {
    ...state,
    useDarkMode: true,
  };
}

function deactivateDarkMode(state) {
  return {
    ...state,
    useDarkMode: false,
  };
}

export default mapReducers(reducerMap, initialState);
