import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { mode } from 'styles/theme/foundations/colors';

import { withChakraProvider } from 'styles/provider';

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}>
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default withChakraProvider(MyApp);
