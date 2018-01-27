import { lighten, darken } from 'polished';

const WHITE = '#fff';
const BLACK = '#000';
const BASE_SIZE = 0.8;

const getSize = n => (BASE_SIZE * n).toFixed(1) + 'rem';

const theme = {
  colors: {
    background: lighten(0.1, '#d1d8e0'),
    white: WHITE,
    foreground: lighten(0.1, BLACK),
    border: darken(0.1, WHITE),
    highlight: '#4b6584',
    grey: '#a5b1c2',
    blue: '#4b7bec',
    red: '#fc5c65',
    orange: '#fd9644',
    green: '#26de81',
    coin: '#fed330'
  },
  sizes: {
    xxs: getSize(0.5),
    xs: getSize(1),
    sm: getSize(2),
    md: getSize(3),
    lg: getSize(4),
    xl: getSize(5),
    xxl: getSize(6)
  }
};

export default theme;
