/**
 * @brief Google analytics event가 정의 된 class입니다.
 * @description Google 애널리틱스에서 자동으로 수집되는 정보 외에 추가로 정보를 수집하거나 애널리틱스의 특정 기능을 사용하려는 경우 사용합니다.
 * @see Docs https://developers.google.com/analytics/devguides/collection/ga4/events?hl=ko&client_type=gtag
 */

export class GoogleAnalytics {
  public googleAnalytics: Gtag.Gtag = window.gtag;

  constructor(private key: string) {
    this.key = key;
  }

  completeRegistration = (social: string) => {
    this.googleAnalytics('event', 'CompleteRegistration', { social });
  };

  startProject = (params: { id: string; step: string }) => {
    this.googleAnalytics('event', 'StartProject', params);
  };

  completeProject = (id: string) => {
    this.googleAnalytics('event', 'CompleteProject', { id });
  };

  consultingApply = () => {
    this.googleAnalytics('event', 'ConsultingApply');
  };

  requestApply = () => {
    this.googleAnalytics('event', 'RequestApply');
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
