import { Analytics } from './types';
import { analyticsValidCheckHandler } from './utils/valid-check-with-proxy';

export class GoogleAnalytics {
  private ga: Gtag.Gtag = () => {};

  constructor(private key?: string) {
    if (!key) {
      console.warn('GA 키 설정이 필요합니다.');
      return;
    }
    this.key = key;
    this.ga = new Proxy(
      { gtag: typeof window !== 'undefined' ? window.gtag : () => {} },
      analyticsValidCheckHandler,
    ).gtag;
  }

  completeRegistration = (params: Analytics.CompleteRegistration['Ga']) => {
    this.ga('event', 'sign_up', params);
  };

  viewContent = (params: Analytics.ViewContent['Ga']) => {
    this.ga('event', 'view_item', params);
  };

  login = () => {
    this.ga('event', 'login');
  };

  GASetter = () => {
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${this.key}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${this.key}');
        `,
          }}
        />
      </>
    );
  };
}
