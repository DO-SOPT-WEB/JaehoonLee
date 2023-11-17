import { DefaultTheme } from 'styled-components';

const colors = {
  mainPurple: '#5c478c',
  mainWhite: '#ffffff',
  mainGrey: '#ececec',
  mainBlack: '#000000',
  mainGreen: '#00ff80',
  mainRed: '#ff0000',
};

const fontSize = {
  head: '8rem',
  head0: '3.5rem',
  head1: '2.8rem',
  head2: '2.4rem',
  head3: '2rem',
  body1: '1.6rem',
  body2: '1.2rem',
};

export type ColorTypes = typeof colors;
export type FontsTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
