import { injectGlobal } from 'styled-components';
import { light, dark } from '../theme';

export function onThemeChange(listener) {
  if (!window.matchMedia) {
    return;
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener((event) => listener(event.matches));
}

export function useDarkMode() {
  if (!window.matchMedia) {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function getTheme() {
  return useDarkMode() ? dark : light;
}

export function setGobalThemeStyling(theme) {
  document.body.style.color = theme.colors.foreground;
  document.body.style['background-color'] = theme.colors.backgroundSubtle;
}

export function setGlobalStyling() {
  injectGlobal`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }


    html {
      font-size: 62.5%;
    }

    body {
      font-size: 1.5rem;
      margin: 0;
      font-family: 'Open Sans', Arial, sans-serif;
    }
  `;
}
