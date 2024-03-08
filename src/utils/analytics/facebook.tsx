import React from 'react';

import { Analytics } from './types';
import { analyticsValidCheckHandler } from './utils/valid-check-with-proxy';

/**
 * @brief Meta pixel(Facebook) event가 정의 된 class입니다.
 * @description Meta 픽셀의 fbq('track') 함수를 사용하여 다음 표준 이벤트를 추적할 수 있습니다.
 *  또한 표준 이벤트는 특정 개체 속성이 포함된 매개변수 개체를 지원하므로 이벤트에 대한 상세한 정보를 포함할 수 있도록 합니다.
 * @see Docs https://developers.facebook.com/docs/meta-pixel/reference#object-properties
 * @see Docs https://developers.facebook.com/docs/marketing-api/conversions-api/guides/gtm-server-side?locale=ko_KR
 */

export class FacebookAnalytics {
  private fbq: facebook.Pixel.Event = () => {};

  /**
   * FacebookAnalytics 클래스의 새 인스턴스를 생성합니다.
   * @param key Facebook 픽셀 키입니다.
   */
  constructor(private key?: string) {
    if (!key) {
      console.warn('Facebook 키 설정이 필요합니다.');
      return;
    }
    this.key = key;
    this.fbq = new Proxy(
      {
        fbq: typeof window !== 'undefined' ? window.fbq : () => {},
      },
      analyticsValidCheckHandler,
    ).fbq;
  }

  /**등록 양식을 작성 완료한 경우.
   * 어떤 사람이 작성한 구독 또는 등록 양식을 제출합니다.
   * @param {string} content_name - 페이지/제품의 이름
   * @param {string} currency - value에 지정된 통화
   * @param {number} value -비즈니스에서 이 이벤트를 실행한 사용자의 가치
   */
  completeRegistration = (params: Analytics.CompleteRegistration['Fbq']) => {
    this.fbq('track', 'CompleteRegistration', params);
  };

  /**
   * 페이지 뷰 : 메인+ 상세+ 기타 모든 페이지
   * @param {number[]} content_ids - 이벤트와 연결된 제품 ID(예: SKU(['ABC123', 'XYZ789'] 등))
   * @param {string} content_name - 페이지/제품의 이름
   */
  pageView = (params: Analytics.PageView['Fbq']) => {
    this.fbq('track', 'ViewContent', params);
  };

  /**
   * 콘텐츠 조회 : 보통 상세페이지를 의미
   * ViewContent는 누군가가 웹페이지 URL에 방문했다는 것을 알려주지만 그 방문자가 해당 페이지에서 무엇을 보거나 무엇을 했는지는 알려주지 않습니다.
   * @param {string} content_name - 페이지/제품의 이름
   * @param {string} content_category - 페이지/제품의 카테고리
   * @param {number[]} content_ids - 이벤트와 연결된 제품 ID(예: SKU(['ABC123', 'XYZ789'] 등))
   * @param {string} content_type- 전달된 content_ids 또는 contents를 기반으로 한 product 또는 product_group.
   * @param {string} currency - value에 지정된 통화
   * @param {number} value -비즈니스에서 이 이벤트를 실행한 사용자의 가치
   */
  viewContent = (params: Analytics.ViewContent['Fbq']) => {
    this.fbq('track', 'ViewContent', params);
  };

  /**
   * 검색
   * @param {string} content_name - 페이지/제품의 이름
   * @param {string} content_category - 페이지/제품의 카테고리
   * @param {number[]} content_ids - 이벤트와 연결된 제품 ID(예: SKU(['ABC123', 'XYZ789'] 등))
   * @param {string} content_type- 전달된 content_ids 또는 contents를 기반으로 한 product 또는 product_group.
   * @param {string} currency - value에 지정된 통화
   * @param {number} value -비즈니스에서 이 이벤트를 실행한 사용자의 가치
   */
  search = (params: Analytics.Search['Fbq']) => {
    this.fbq('track', 'Search', params);
  };

  /**
   * Facebook 픽셀 스크립트와 noscript 태그를 렌더링합니다.
   * @returns Facebook 픽셀 스크립트와 noscript 태그에 대한 JSX 요소입니다.
   */

  FacebookSetter = () => {
    return (
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
        `,
        }}
      />
    );
  };
}
