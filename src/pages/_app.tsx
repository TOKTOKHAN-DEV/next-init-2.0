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
  return (
    <>
      <Fonts />
      <ToggleColorModeButton />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
      <TokDocsDevTools />
    </>
  );
}

export default withAppProvider(MyApp);
