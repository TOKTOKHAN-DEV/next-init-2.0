import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ToggleColorModeButton from '@/components/ToggleColorModeButton';
import TokDocsDevTools from '@/components/TokDocsDevTool';
import withAppProvider from '@/hocs/withAppProvider';

import Fonts from '@/generated/fonts/fonts';

declare global {
  interface Window {
    fbq: any;
    gtag: any;
    kakaoPixel: any;
  }
}

function App({ Component, pageProps }: any) {
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

export default withAppProvider(App);
