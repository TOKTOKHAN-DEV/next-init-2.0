import { useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import Auth from '0auth-sdk';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';

import ToggleColorModeButton from '@components/common/ToggleColorModeButton';

import { mode } from '@theme/foundations/colors';

import withAppProvider from 'contexts/app/app.provider';
import { withGlobalModalHandlerContext } from 'contexts/modal/useGlobalModalHandler.context';

function MyApp({ Component, pageProps }: any) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);

  return (
    // Provide the client to your App
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
    >
      <ToggleColorModeButton />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default withAppProvider(withGlobalModalHandlerContext(MyApp));
