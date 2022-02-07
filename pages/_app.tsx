import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { mode } from 'styles/theme/foundations/colors';

import { withChakraProvider } from 'styles/provider';
import ToggleColorModeButton from 'components/common/ToggleColorModeButton';

import Auth from '0auth-sdk';
import { useEffect } from 'react';

import { Provider } from 'react-redux';
import store from 'features/store';
import setUpMockServiceWorker from 'apis/_mock/setupMockServiceWorker';

// Create a client
const queryClient = new QueryClient();

// For mocking-response from network request
setUpMockServiceWorker({
  condition: {
    server: 'off',
    client: 'off',
  },
  handlers: [
    // ...getNoticeMSW(),
    // ...getNewsMSW(),
    // ...getPostMSW(),
    // ...getStockMSW(),
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);

  return (
    // Provide the client to your App
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}>
          <ToggleColorModeButton />
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default withChakraProvider(MyApp);
