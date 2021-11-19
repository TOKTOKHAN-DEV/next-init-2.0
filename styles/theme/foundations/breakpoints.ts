import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  xs: '768px',
  sm: '992px',
  md: '1440px',
  lg: '1800px',
  xl: '1920px',
  '2xl': '2000px',
});

export default breakpoints;

// https://github.com/chakra-ui/chakra-ui/issues/3042
