import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useDispatch } from 'react-redux';

import Auth from '0auth-sdk';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';

import setUpMockServiceWorker from '@apis/_mock/setupMockServiceWorker';
import { useRefreshTokenQuery } from '@apis/auth/AuthApi.query';
import useAppStore from '@features/useAppStore';
import { userSliceActions } from '@features/user/userSlice';

import ToggleColorModeButton from '@components/common/ToggleColorModeButton';

import { mode } from '@theme/foundations/colors';
import { deleteToken } from '@utils/localStorage/token';

import withAppProvider from 'contexts/app/app.provider';

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
  const isServer = typeof window === 'undefined';

  const isLogged = useAppStore((store) => store.USER.isLogged);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const { isLoading } = useRefreshTokenQuery({
    options: {
      enabled: isLogged,
      staleTime: 0,
      refetchInterval: 1000 * 60 * 20,
      onError: () => {
        deleteToken();
        queryClient.clear();
        dispatch(userSliceActions.setIsLogged(false));
        // router.replace(ROUTES.LOGIN)
      },
    },
  });

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);

  return (
    // Provide the client to your App
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
    >
      <ToggleColorModeButton />
      {(!isLoading || isServer) && <Component {...pageProps} />}
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default withAppProvider(MyApp);
