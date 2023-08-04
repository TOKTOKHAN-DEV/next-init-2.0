import { extendTheme } from '@chakra-ui/react';

import { components } from './components';
import { foundations } from './foundations';

const overrides = {
  components,
  ...foundations,
};

export default extendTheme(overrides);
