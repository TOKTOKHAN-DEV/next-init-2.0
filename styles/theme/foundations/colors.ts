import Color from './colors.types';

const Light: Color = {
  primary: '#4575F5',
  secondary: '#3F4CB2',
  tertiary: '#0C1F6F',
  'primary.sub': '#4575F5',
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
    0: '#FAFAFA',
    1: '#F7F7F7',
    2: '#F0F0F0',
    3: '#BEBEBE',
    4: '#808080',
    5: '#444444',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Dark: Color = {
  primary: '#336BFF',
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
    0: '#535353',
    1: '#585858',
    2: '#808080',
    3: '#A7A7A7',
    4: '#BEBEBE',
    5: '#EBEBEB',
  },
  background: {
    primary: '#363636',
    secondary: '#2B2B2B',
    tertiary: '#1A1A1A',
  },
  modal: '#444444',
};

const colors = {
  mode: {
    light: Light,
    dark: Dark,
  },
  dim: {
    primary: '#1A1A1A80',
    secondary: '#1A1A1A33',
  },
};

export default colors;
