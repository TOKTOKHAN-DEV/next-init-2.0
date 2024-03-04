export namespace Analytics {
  /** 페이지 뷰 : 메인+ 상세+ 기타 모든 페이지 */
  export type PageView = {
    Ga: {};
    Fbq: { content_ids: number[]; content_name: string };
    Kakao: {
      tag?: string;
    };
  };

  /** 등록 양식 작성 완료 */
  export type CompleteRegistration = {
    Ga: {
      id: number;
      name: string;
    };
    Fbq: {
      content_name?: string;
      currency?: string;
      value?: number;
    };
    Kakao: {
      tag?: string;
    };
  };

  /** 콘텐츠 조회 : 보통 상세페이지를 의미*/
  export type ViewContent = {
    Ga: { id: number; name: string };
    Fbq: {
      content_name?: string;
      content_category?: string;
      content_ids?: number[];
      content_type?: string;
      currency?: string;
      value?: number;
    };
    Kakao: kakao.Pixel.ViewContentParameters;
  };

  /** 검색 */
  export type Search = {
    Ga: { id: number; name: string };
    Fbq: {
      content_name?: string;
      content_category?: string;
      content_ids?: number[];
      content_type?: string;
      currency?: string;
      value?: number;
    };
    Kakao: kakao.Pixel.SearchParameters;
  };
}
