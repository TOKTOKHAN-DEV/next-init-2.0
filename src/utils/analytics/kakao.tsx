import React from 'react';

import { Analytics } from './types';
import { analyticsValidCheckHandler } from './utils/valid-check-with-proxy';

/**
 * @brief Kakao pixel에서 제공하는 event가 정의 된 class입니다.
 * @description 카카오 픽셀에서는 여러 종류의 이벤트를 전송할 수 있습니다.
 *  수집된 데이터를 이용하여 타겟팅, 카탈로그 소재정보 수집, 전환 보고서, 전환 최적화 등의 다양한 카카오 광고 목적으로 활용할 수 있습니다.
 * @see Docs https://kakaoad.github.io/kakao-pixel/
 */

export class KakaoAnalytics {
  private kakao: (id: string) => kakao.Pixel.Event | void = () => {};

  constructor(private key?: string) {
    if (!key) {
      console.warn('Kakao 키 설정이 필요합니다.');
      return;
    }
    this.key = key;
    this.kakao = new Proxy(
      {
        kakao: typeof window !== 'undefined' ? window.kakaoPixel : () => {},
      },
      analyticsValidCheckHandler,
    ).kakao;
  }

  /**
   * 회원가입 이벤트 전송
   */
  completeRegistration = (params: Analytics.CompleteRegistration['Kakao']) => {
    if (!this.key) return;
    this.kakao(this.key)?.completeRegistration(params?.tag);
  };

  /**
   * 페이지 조회 이벤트 전송
   */
  pageView = (params: Analytics.PageView['Kakao']) => {
    if (!this.key) return;
    this.kakao(this.key)?.pageView(params?.tag);
  };

  /**
   * 콘텐츠 / 상품 조회 이벤트 전송
   */
  viewContent = (params: Analytics.ViewContent['Kakao']) => {
    if (!this.key) return;
    this.kakao(this.key)?.viewContent(params);
  };

  /**
   * 검색 이벤트 전송
   */
  search = (params: Analytics.Search['Kakao']) => {
    if (!this.key) return;
    this.kakao(this.key)?.search(params);
  };

  KakaoSetter = () => {
    return (
      <script
        async
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/kp.js"
      ></script>
    );
  };
}
