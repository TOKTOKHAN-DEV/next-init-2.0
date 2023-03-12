import { SemanticValue } from '@chakra-ui/react';

import { getColorSchema } from '@utils/color-generator';

const Colors = {
  primary: getColorSchema('primary', '#4850FF', '#FF6060'),
  test: getColorSchema('test', '#17c554', '#FF6060'),
  secondary: getColorSchema('secondary', '#7B61FF', '#FF6060'),
  warning: getColorSchema('warning', '#FF6060', '#FF6060'),
  success: getColorSchema('success', '#4850FF', '#4850FF'),
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
