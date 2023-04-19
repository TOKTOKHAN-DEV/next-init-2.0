import React from 'react';

import useRefreshInterval from '@hooks/auth/useRefreshInterval';

import ToggleColorModeButton from '@components/common/ToggleColorModeButton';
import TokDocsDevTools from '@components/common/TokDocsDevTool';

import withAppProvider from '@hocs/withAppProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Fonts from 'generated/fonts/fonts';

declare global {
  interface Window {
    fbq: any;
    gtag: any;
    kakaoPixel: any;
  }
}

function MyApp({ Component, pageProps }: any) {
  useRefreshInterval();

  return (
    <React.Fragment>
      <Fonts />
      <ToggleColorModeButton />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
      <TokDocsDevTools />
    </React.Fragment>
  );
}

export default withAppProvider(MyApp);
