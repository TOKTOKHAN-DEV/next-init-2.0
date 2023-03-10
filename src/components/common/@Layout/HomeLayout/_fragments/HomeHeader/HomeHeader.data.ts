import { ChakraProps } from '@chakra-ui/react';

export type HomeHeaderVariantType = 'dark' | 'light' | 'transparent';
export const HOME_HEADER_VARIANTS: Record<
  HomeHeaderVariantType,
  {
    header: ChakraProps;
    drawer: ChakraProps;
    pointColor: ChakraProps['color'];
    subColor: ChakraProps['color'];
  }
> = {
  dark: {
    header: { bg: 'black' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'primary',
  },
  light: {
    header: { bg: 'primary' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'secondary',
  },
  transparent: {
    header: { bg: 'transparent' },
    drawer: { bg: 'white' },
    pointColor: 'black',
    subColor: 'gray.400',
  },
};
