/* eslint-disable no-useless-escape */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { ColorModeScript } from '@chakra-ui/color-mode';

import config from '@/theme/config';

// const GOOGLE_ANALYTICS_ID = 'G-입력해주세요';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  redirectIEtoEdge() {
    return {
      __html: `
      if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function() {
          window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
        }, 1);
      }`,
    };
  }

  // setGoogleAnalytics() {
  //   return {
  //     __html: `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());
  //       gtag('config', '${GOOGLE_ANALYTICS_ID}');
  //     `,
  //   };
  // }
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={this.redirectIEtoEdge()} />
          {/* Global site tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          ></script> */}
          {/* <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} /> */}
        </Head>
        <body>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
