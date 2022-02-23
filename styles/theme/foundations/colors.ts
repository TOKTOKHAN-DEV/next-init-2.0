import { getColorSchema } from '../../../utils/color-generator';

const Light = {
  primary: getColorSchema('#3F4CB2'),
  'primary.sub': getColorSchema('#C3DCFF'),
  secondary: getColorSchema('#3F4CB2'),
  'secondary.sub': getColorSchema('#3F4CB2'),
  tertiary: getColorSchema('#0C1F6F'),
  'tertiary.sub': getColorSchema('#0C1F6F'),
  point: getColorSchema('#F77721'),
  'point.sub': getColorSchema('#FFCAB2'),
  warning: getColorSchema('#FF6060'),
  'warning.sub': getColorSchema('#FFE2E2'),
  success: getColorSchema('#4575F5'),
  'success.sub': getColorSchema('#C3DCFF'),
  dark: getColorSchema('#1A1A1A'),
  gray: getColorSchema('#f8f9fa'),
  black: '#1F1E1E',
  white: '#FFFFFF',
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Dark = {
  primary: getColorSchema('#4575f5'),
  'primary.sub': getColorSchema('#B1CCEF'),
  secondary: getColorSchema('#2E3DAF'),
  'secondary.sub': getColorSchema('#8D9DE0'),
  tertiary: getColorSchema('#07175D'),
  'tertiary.sub': getColorSchema('#687CD8'),
  point: getColorSchema('#FF7215'),
  'point.sub': getColorSchema('#F2B9A0'),
  warning: getColorSchema('#FF6060'),
  'warning.sub': getColorSchema('#EFC2C2'),
  success: getColorSchema('#336BFF'),
  'success.sub': getColorSchema('#B1CCEF'),
  dark: getColorSchema('#FFFFFF'),
  gray: getColorSchema('#ced4da'),
  black: '#FFFFFF',
  white: '#444444',
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
  ...mode.light,
  kakao: getColorSchema('#FFDE32', [500, 600, 700]),
  naver: getColorSchema('#20CF5D', [500, 600, 700]),
  facebook: getColorSchema('#1877F3', [500, 600, 700]),
  google: getColorSchema('#FFFFFF', [500, 600, 700]),
  apple: getColorSchema('#000000', [500, 600, 700]),
  dim: {
    primary: '#1A1A1A80',
    secondary: '#1A1A1A33',
  },
};

export default colors;
