import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

import { sizes } from './sizes';
import { variants } from './variants';

const baseStyle = defineStyle({
  lineHeight: '1.2',
  borderRadius: 'md',
  fontWeight: 'semibold',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  _focusVisible: {
    boxShadow: 'outline',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  _hover: {
    _disabled: {
      bg: 'initial',
    },
  },
});

const Button = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'primary',
  },
});

export default Button;
