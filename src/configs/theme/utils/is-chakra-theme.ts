import { isObject } from '@chakra-ui/shared-utils';

import { ChakraTheme } from '../types/theme.types';

export const requiredChakraThemeKeys: (keyof ChakraTheme)[] = [
  'borders',
  'breakpoints',
  'components',
  'config',
  'direction',
  'fonts',
  'fontWeights',
  'radii',
  'shadows',
  'sizes',
  'space',
  'styles',
  'transition',
  'zIndices',
  'semanticTokens',
];

export function isChakraTheme(unit: unknown): unit is ChakraTheme {
  if (!isObject(unit)) {
    return false;
  }

  return requiredChakraThemeKeys.every((propertyName) =>
    Object.prototype.hasOwnProperty.call(unit, propertyName),
  );
}
