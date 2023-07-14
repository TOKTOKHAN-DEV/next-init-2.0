import { isChakraTheme } from '../utils/is-chakra-theme';

import theme from '..';

describe('Theme', () => {
  it('should be of type ChakraTheme', () => {
    // Check if default theme is of type ChakraTheme
    const defaultThemeIsAChakraTheme = theme;
    expect(defaultThemeIsAChakraTheme).toBeTruthy();
  });

  it('should be check that this is a ChakraTheme', () => {
    expect(isChakraTheme(theme)).toBeTruthy();
  });

  it('should be check that this is not a ChakraTheme', () => {
    expect(isChakraTheme({ colors: {} })).toBeFalsy();
  });
});
