/**
 * @brief Meta pixel(Facebook) event가 정의 된 class입니다.
 * @description Meta 픽셀의 fbq('track') 함수를 사용하여 다음 표준 이벤트를 추적할 수 있습니다.
 *  또한 표준 이벤트는 특정 개체 속성이 포함된 매개변수 개체를 지원하므로 이벤트에 대한 상세한 정보를 포함할 수 있도록 합니다.
 * @see Docs https://developers.facebook.com/docs/meta-pixel/reference#object-properties
 */
export class FacebookAnalytics {
  public facebookAnalytics: facebook.Pixel.Event = window.fbq;

  constructor(private key: string) {
    this.key = key;
  }

  completeRegistration = (social: string) => {
    this.facebookAnalytics('track', 'CompleteRegistration', {
      content_name: social,
    });
  };

  startProject = (params: { id: string; step: string }) => {
    window.fbq('track', 'ViewContent', {
      contents_id: params.id,
      content_name: 'StartProject',
    });
  };

  completeProject = (id: string) => {
    window.fbq('track', 'ViewContent', {
      content_name: 'CompleteProject',
      content_ids: id,
    });
  };

  consultingApply = () => {
    window.fbq('track', 'Lead', { content_name: 'ConsultingApply' });
  };

  requestApply = () => {
    window.fbq('track', 'Lead', { content_name: 'RequestApply' });
  };

  FacebookSetter = () => {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${this.key}');
          fbq('track', 'PageView');
        `,
          }}
        />
        <noscript>
          <img
            alt="facebook-pixel"
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${this.key}&ev=PageView&noscript=1`}
          />
        </noscript>
      </>
    );
  };
}
