// import isObject from 'lodash-es/isObject';
import { CustomColors } from '../../foundations/semantic-tokens/colors';
import { isColorHue } from './is-color-hue';
import { isObject } from './is-object';

/**
 * Extract color scheme names
 * by validating that every property of type ColorHue is in the object
 */
export function extractColorSchemeTypes(colors: CustomColors) {
  if (!isObject(colors)) {
    return [];
  }

  return Object.entries(colors).reduce(
    (acc: string[], [colorName, colorValues]) => {
      if (isColorHue(colorValues)) {
        acc.push(colorName);
      }

      return acc;
    },
    [],
  );
}
