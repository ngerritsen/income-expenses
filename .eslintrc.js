'use strict';

module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    semi: 2,
  },
  globals: {
    Promise: true,
  },
  env: {
    node: true,
    browser: true,
  },
};
