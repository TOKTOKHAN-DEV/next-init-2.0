import { isObject } from '@chakra-ui/shared-utils';

import { ChakraTheme } from '../types/theme.types';

export const requiredChakraThemeKeys: (keyof ChakraTheme)[] = [
  'breakpoints',
  'components',
  'config',
  'direction',
  'styles',
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
