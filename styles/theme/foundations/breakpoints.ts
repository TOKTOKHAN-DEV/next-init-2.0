import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1920px',
});

export default breakpoints;

// https://github.com/chakra-ui/chakra-ui/issues/3042
