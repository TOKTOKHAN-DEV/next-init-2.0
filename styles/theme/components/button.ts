import { theme as baseTheme } from '@chakra-ui/react';

const Button = {
  baseStyle: {
    ...baseTheme.components.Button.baseStyle,
    _focus: { boxShadow: 'none' },
  },
};

export default Button;
