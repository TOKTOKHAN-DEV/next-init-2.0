/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'Pretendard',
      color: mode('#1A1A1A', '#FFFFFF')(props),
      bg: mode('#FFFFFF', '#363636')(props),
    },
    '#__next': {
      minHeight: '100vh',
    },
  }),
};

export default styles;
