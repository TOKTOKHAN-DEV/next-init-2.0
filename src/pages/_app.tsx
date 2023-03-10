import React from 'react';

import useRefreshInterval from '@hooks/auth/useRefreshInterval';
import { useUpdateLoginStatus } from '@hooks/auth/useUpdateLoginStatus';

import ToggleColorModeButton from '@components/common/ToggleColorModeButton';
import TokDocsDevTools from '@components/common/TokDocsDevTool';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import withAppProvider from 'contexts/app/app.provider';
import { withGlobalModalHandlerContext } from 'contexts/modal/useGlobalModalHandler.context';

declare global {
  interface Window {
    fbq: any;
    gtag: any;
    kakaoPixel: any;
  }
}

function MyApp({ Component, pageProps }: any) {
  useUpdateLoginStatus();
  useRefreshInterval();

  return (
    <React.Fragment>
      <ToggleColorModeButton />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
      <TokDocsDevTools />
    </React.Fragment>
  );
}

export default withAppProvider(withGlobalModalHandlerContext(MyApp));
