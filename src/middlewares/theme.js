import { activateDarkMode, deactivateDarkMode } from '../actions';
import { onThemeChange } from '../helpers/theme';

export default (store) => (next) => {
  onThemeChange((useDarkMode) => {
    if (store.getState().theme.useDarkMode !== useDarkMode) {
      store.dispatch(useDarkMode ? activateDarkMode() : deactivateDarkMode());
    }
  });

  return (action) => next(action);
};
