import { extractColorSchemeTypes } from '../../utils/color/extract-color-schemes';
import { genColorSchema } from '../../utils/color/gen-color-schema';
import { basisColors } from './colors';

const colorSchemas = extractColorSchemeTypes(basisColors);

const colorForSchemes = colorSchemas.reduce<Record<string, unknown>>(
  (acc, colorScheme) => {
    acc[colorScheme] = genColorSchema('#4850FF');
    return acc;
  },
  {},
);

export default colorForSchemes;
