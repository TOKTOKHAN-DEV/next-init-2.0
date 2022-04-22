import { ChakraProps } from '@chakra-ui/react';

namespace HomeHeaderData {
  export type VariantType = 'dark' | 'light' | 'transparent';
  export const VARIANTS: Record<
    VariantType,
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
}

export default HomeHeaderData;
