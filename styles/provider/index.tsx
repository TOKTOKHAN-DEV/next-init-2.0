import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from 'styles/theme';

export const withChakraProvider = (AppComponent: React.FC<AppProps>) => {
  return function WrappedComponent(props: AppProps) {
    return (
      <ChakraProvider resetCSS theme={theme}>
        <AppComponent {...props} />
      </ChakraProvider>
    );
  };
};
