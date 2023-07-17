import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  w: '100%',
  mx: 'auto',
  maxW: {
    base: '100%',
    sm: '780px',
    md: '980px',
    lg: '1280px',
    xl: '1480px',
    '2xl': '1780px',
  },
  px: '0',
});

const variants = defineStyle({
  chakra: {
    px: '30px',
  },
});

const Container = defineStyleConfig({
  baseStyle,
  variants,
});

export default Container;
