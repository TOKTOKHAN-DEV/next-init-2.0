import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as RTKProvider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

import store from '@features/store';

import Fonts from 'generated/fonts/fonts';
import theme from 'styles/theme';

// Create a client
const queryClient = new QueryClient();

function withAppProvider(AppComponent: React.FC<AppProps>) {
  return function WrappedAppComponent(props: AppProps) {
    return (
      <RTKProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider resetCSS theme={theme}>
            <Fonts />
            <AppComponent {...props} />
          </ChakraProvider>
        </QueryClientProvider>
      </RTKProvider>
    );
  };
}

export default withAppProvider;
