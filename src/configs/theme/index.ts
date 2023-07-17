import { extendTheme } from '@chakra-ui/react';

import { components } from './components';
import { foundations } from './foundations';

const overrides = {
  ...foundations,
  components,
};

export default extendTheme(overrides);
