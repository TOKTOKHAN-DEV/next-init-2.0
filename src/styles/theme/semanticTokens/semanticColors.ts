import getColorSemanticTokens from '@utils/color-generator/getColorSemanticTokens';

const Colors = {
  primary: getColorSemanticTokens('primary', '#4850FF'),
  secondary: getColorSemanticTokens('secondary', '#7B61FF'),
  tertiary: getColorSemanticTokens(
    'tertiary',
    {
      100: '#ffc179',
      200: '#ffb55f',
      300: '#ffaa46',
      400: '#ff9e2c',
      500: '#FF9213',
      600: '#f88600',
      700: '#df7800',
      800: '#c56a00',
      900: '#ac5d00',
    },
    {
      500: '#F9BC00',
      600: '#dfa900',
      700: '#c69500',
    },
  ),
  gray: getColorSemanticTokens('gray', {
    50: '#FAFAFA',
    100: '#F7F7F7',
    200: '#F2F3F4',
    300: '#E5E7EC',
    400: '#D1D4DD',
    500: '#B8BCC8',
    600: '#8C919F',
    700: '#757983',
    800: '#4A4D55',
    900: '#292A2E',
  }),
  success: getColorSemanticTokens('success', '#4850FF'),
  warning: getColorSemanticTokens('warning', '#FF6060'),
  background: getColorSemanticTokens('background', {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  }),
  white: getColorSemanticTokens('white', { 500: '#FFFFFF' }),
  black: getColorSemanticTokens('black', { 500: '#1A1A1A' }),
  modal: getColorSemanticTokens('modal', { 500: '#FFFFFF' }),
};

const Brand = {
  kakao: getColorSemanticTokens('kakao', {
    500: '#000000',
    600: '#111111',
    700: '#222222',
  }),
  naver: getColorSemanticTokens('naver', {
    500: '#20CF5D',
    600: '#17c554',
    700: '#14bf50',
  }),
  facebook: getColorSemanticTokens('facebook', {
    500: '#1877F3',
    600: '#1874eb',
    700: '#146cdf',
  }),
  google: getColorSemanticTokens('google', {
    500: '#FFFFFF',
    600: '#F5F5F5',
    700: '#EEEEEE',
  }),
  apple: getColorSemanticTokens('apple', {
    500: '#000000',
    600: '#111111',
    700: '#222222',
  }),
};

const Dim = getColorSemanticTokens('dim', {
  primary: '#1A1A1A80',
  secondary: '#1A1A1A33',
});

const semanticColors = {
  ...Colors,
  ...Brand,
  Dim,
};

export { Brand, Colors, Dim };

export default semanticColors;
