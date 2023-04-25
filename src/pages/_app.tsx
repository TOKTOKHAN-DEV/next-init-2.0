import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ControlledConfirmAlert from '@/components/@Alert/ControlledConfirmAlert';
import ToggleColorModeButton from '@/components/ToggleColorModeButton';
import TokDocsDevTools from '@/components/TokDocsDevTool';
import withAppProvider from '@/hocs/withAppProvider';

function App({ Component, pageProps }: any) {
  return (
    <>
      {/* <Fonts /> */}
      <ToggleColorModeButton />
      <Component {...pageProps} />
      <ControlledConfirmAlert />
      <ReactQueryDevtools initialIsOpen={false} />
      <TokDocsDevTools />
    </>
  );
}

export default withAppProvider(App);
