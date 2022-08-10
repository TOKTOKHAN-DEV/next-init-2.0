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
    subColor: 'primary.500',
  },
  light: {
    header: { bg: 'primary.500' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'secondary.500',
  },
  transparent: {
    header: { bg: 'transparent' },
    drawer: { bg: 'white' },
    pointColor: 'black',
    subColor: 'gray.400',
  },
};
