import {
  ThemeProvider,
  useBreakpoint,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';

import ToggleColorModeButton from '@components/common/ToggleColorModeButton';
import TokDocsDevTools from '@components/common/TokDocsDevTool';
import useAuth from '@hooks/useAuth';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { mode } from '@theme/foundations/colors';

import withAppProvider from 'contexts/app/app.provider';
import { withGlobalModalHandlerContext } from 'contexts/modal/useGlobalModalHandler.context';
import { useSelector } from 'react-redux';

declare global {
  interface Window {
    fbq: any;
    gtag: any;
    kakaoPixel: any;
  }
}

function MyApp({ Component, pageProps }: any) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const br = useBreakpoint();
  console.log({ br });

  useAuth()
  const { isLogin } = useSelector((state) => state.USER)
  return isLogin === null ? <></> : (
    // Provide the client to your App
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
    >
      <ToggleColorModeButton />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
      <TokDocsDevTools />
    </ThemeProvider>
  );
}

export default withAppProvider(withGlobalModalHandlerContext(MyApp));

