import { mount as cypressMount } from '@cypress/react';

import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/theme';

type Mount = typeof cypressMount;

const mount: Mount = (jsx) => {
  return cypressMount(
    <ChakraProvider resetCSS theme={theme}>
      {jsx}
    </ChakraProvider>,
  );
};

export default mount;

// https://github.com/cypress-io/cypress/issues/9675
