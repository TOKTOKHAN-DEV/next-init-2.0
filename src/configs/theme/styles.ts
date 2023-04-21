/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('#1A1A1A', '#FFFFFF')(props),
      bg: mode('#FFFFFF', '#363636')(props),
    },
    input: {
      fontSize: ['16px', '14px', '15px'],
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    '@font-face': {
      fontFamily: 'Pretendard, sans-serif',
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    },
  }),
};

export default styles;
