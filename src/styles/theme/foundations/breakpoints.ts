import { createBreakpoints } from '@chakra-ui/theme-tools';

export const mediaSize = {
  // base <780px
  base: '0px',
  sm: '780px', // ≥780px
  md: '980px', // ≥980px
  lg: '1280px', // ≥1280px
  xl: '1480px', // ≥1480px
  '2xl': '1920px', // ≥1920px
};

const breakpoints = createBreakpoints(mediaSize);

export default breakpoints;

// https://github.com/chakra-ui/chakra-ui/issues/3042
