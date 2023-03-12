import { SemanticValue } from '@chakra-ui/react';

import getColorSemanticTokens from '@utils/color-generator/getColorSemanticTokens';

const Tertiary = {
  light: {
    50: '#FAFAFA',
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
  dark: {
    500: '#F9BC00',
    600: '#dfa900',
    700: '#c69500',
  },
};

const Colors = {
  primary: getColorSemanticTokens('primary', '#4850FF', '#4850FF'),
  secondary: getColorSemanticTokens('secondary', '#7B61FF', '#7B61FF'),
  warning: getColorSemanticTokens('warning', '#FF6060', '#FF6060'),
  success: getColorSemanticTokens('success', '#4850FF', '#4850FF'),
  tertiary: getColorSemanticTokens('tertiary', Tertiary.light, Tertiary.dark),
};

const getValues = <T extends object>(
  colors: T,
): SemanticValue<string, string> => {
  return Object.values(colors).reduce((acc, cur) => ({ ...acc, ...cur }), {});
};

const semanticTokens = {
  colors: getValues<typeof Colors>(Colors),
};

export default semanticTokens;
