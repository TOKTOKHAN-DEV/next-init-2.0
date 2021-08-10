import { theme as baseTheme } from '@chakra-ui/react';

const Button = {
  baseStyle: {
    ...baseTheme.components.Button.baseStyle,
    _focus: { boxShadow: 'none' },
  },
  sizes: {
    lg: {
      h: '50px',
      fontSize: ['15px', '14px', '16px'],
      px: '15px',
    },
    md: {
      h: '40px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    sm: {
      h: '30px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    xs: {
      h: '26px',
      fontSize: ['12px', '10px', '12px'],
      px: '8px',
    },
  },
};

export default Button;
