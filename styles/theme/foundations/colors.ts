import Color from './colors.types';

const Light: Color = {
  primary: {
    50: '#acc1fa',
    100: '#97b2f9',
    200: '#83a3f8',
    300: '#6e93f7',
    400: '#5984f6',
    500: '#4575f5',
    600: '#3d68d9',
    700: '#355bbe',
    800: '#2e4ea3',
    900: '#264188',
  },
  secondary: '#3F4CB2',
  tertiary: '#0C1F6F',
  'primary.sub': '#C3DCFF',
  'secondary.sub': '#3F4CB2',
  'tertiary.sub': '#0C1F6F',
  point: '#F77721',
  'point.sub': '#FFCAB2',
  warning: '#FF6060',
  'warning.sub': '#FFE2E2',
  success: '#4575F5',
  'success.sub': '#C3DCFF',
  black: '#1A1A1A',
  white: '#FFFFFF',
  gray: {
    100: '#FAFAFA',
    200: '#F7F7F7',
    300: '#F0F0F0',
    400: '#BEBEBE',
    500: '#808080',
    600: '#444444',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Dark: Color = {
  primary: {
    50: '#acc1fa',
    100: '#97b2f9',
    200: '#83a3f8',
    300: '#6e93f7',
    400: '#5984f6',
    500: '#4575f5',
    600: '#3d68d9',
    700: '#355bbe',
    800: '#2e4ea3',
    900: '#264188',
  },
  secondary: '#2E3DAF',
  tertiary: '#07175D',
  'primary.sub': '#B1CCEF',
  'secondary.sub': '#8D9DE0',
  'tertiary.sub': '#687CD8',
  point: '#FF7215',
  'point.sub': '#F2B9A0',
  warning: '#FF6060',
  'warning.sub': '#EFC2C2',
  success: '#336BFF',
  'success.sub': '#B1CCEF',
  black: '#FFFFFF',
  white: '#444444',
  gray: {
    100: '#535353',
    200: '#585858',
    300: '#808080',
    400: '#A7A7A7',
    500: '#BEBEBE',
    600: '#EBEBEB',
  },
  background: {
    primary: '#363636',
    secondary: '#2B2B2B',
    tertiary: '#1A1A1A',
  },
  modal: '#444444',
};

export const mode = {
  light: Light,
  dark: Dark,
};

const colors = {
  dim: {
    primary: '#1A1A1A80',
    secondary: '#1A1A1A33',
  },
  kakao: {
    500: '#FFDE32',
    600: '#F5D322',
    700: '#EFCC1A',
  },
  naver: {
    500: '#20CF5D',
    600: '#17c554',
    700: '#14bf50',
  },
  facebook: {
    500: '#1877F3',
    600: '#1874eb',
    700: '#146cdf',
  },
  google: {
    500: '#FFFFFF',
    600: '#F5F5F5',
    700: '#EEEEEE',
  },
  apple: {
    500: '#000000',
    600: '#111111',
    700: '#222222',
  },
};

export default colors;
