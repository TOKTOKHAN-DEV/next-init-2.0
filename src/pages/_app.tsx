import { DefaultSeo } from 'next-seo';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ControlledConfirmAlert from '@/components/@Alert/ControlledConfirmAlert';
import ToggleColorModeButton from '@/components/ToggleColorModeButton';
import TokDocsDevTools from '@/components/TokDocsDevTool';
import withAppProvider from '@/hocs/withAppProvider';

import { config as SEO } from '@/configs/seo/config';

function App({ Component, pageProps }: any) {
  return (
    <>
      {/* <Fonts /> */}
      <DefaultSeo {...SEO} />
      <ToggleColorModeButton />
      <Component {...pageProps} />
      <ControlledConfirmAlert />
      <ReactQueryDevtools initialIsOpen={false} />
      <TokDocsDevTools />
    </>
  );
}

export default withAppProvider(App);
