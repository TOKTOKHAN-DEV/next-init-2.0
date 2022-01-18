import { theme as baseTheme } from '@chakra-ui/react';

const Container = {
  baseStyle: {
    ...baseTheme.components.Container.baseStyle,
    maxW: ['100%', '780px', '980px', '1280px', '1480px', '1780px'],
  },
};
export default Container;
