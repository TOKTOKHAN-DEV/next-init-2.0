import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { mode } from 'styles/theme/foundations/colors';

import { withChakraProvider } from 'styles/provider';
import ToggleColorModeButton from 'components/ToggleColorModeButton';

import Auth from '0auth-sdk';
import { useEffect } from 'react';
import { Head } from 'next/document';

const SITE_TITLE = 'TOKTOKHAN.DEV';

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <ToggleColorModeButton />

        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default withChakraProvider(MyApp);
