import { SemanticValue } from '@chakra-ui/react';

import semanticColors from './semanticColors';

const getValues = <T extends object>(
  colors: T,
): SemanticValue<string, string> => {
  return Object.values(colors).reduce((acc, cur) => ({ ...acc, ...cur }), {});
};
const semanticTokens = {
  colors: getValues<typeof semanticColors>(semanticColors),
};

export default semanticTokens;
