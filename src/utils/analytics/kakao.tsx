/**
 * @brief Kakao pixel에서 제공하는 event가 정의 된 class입니다.
 * @description 카카오 픽셀에서는 여러 종류의 이벤트를 전송할 수 있습니다.
 *  수집된 데이터를 이용하여 타겟팅, 카탈로그 소재정보 수집, 전환 보고서, 전환 최적화 등의 다양한 카카오 광고 목적으로 활용할 수 있습니다.
 * @see Docs https://kakaoad.github.io/kakao-pixel/
 */

export class KakaoAnalytics {
  public kakaoAnalytics: (id: string) => kakao.Pixel.Event = kakaoPixel;
  constructor(private key: string) {
    this.key = key;
  }

  completeRegistration = (social: string) => {
    this.kakaoAnalytics(this.key).completeRegistration(social);
  };

  startProject = (params: { id: string; step: string }) => {
    this.kakaoAnalytics(this.key).viewContent({
      id: params.id,
      tag: params.step,
    });
  };

  completeProject = (id: string) => {
    this.kakaoAnalytics(this.key).addToCart({ id: id, tag: 'complete' });
  };

  consultingApply = () => {
    this.kakaoAnalytics(this.key).participation('PreBooking');
  };

  requestApply = () => {
    this.kakaoAnalytics(this.key).participation('Consulting');
  };

  KakaoSetter = () => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `kakaoAnalytics('${this.key}').pageView();`,
        }}
      />
    );
  };
}
