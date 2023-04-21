import type { AppProps } from 'next/app';
import { FC } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { GlobalStoreProvider } from '@contexts/global/useGlobalStoreContext';

import { queryClient } from '@configs/react-query';
import theme from '@configs/theme';
import { QueryClientProvider } from '@tanstack/react-query';

function withAppProvider(AppComponent: FC<AppProps>) {
  return function WrappedAppComponent(props: AppProps) {
    return (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <GlobalStoreProvider>
            <AppComponent {...props} />
          </GlobalStoreProvider>
        </ChakraProvider>
      </QueryClientProvider>
    );
  };
}

export default withAppProvider;
