import { extendTheme } from '@chakra-ui/react';

import { components } from './components';
import { foundations } from './foundations';
import colorSchemes from './foundations/semantic-tokens/colorSchemes';

const overrides = {
  ...foundations,
  components,
};

export default extendTheme(overrides);
