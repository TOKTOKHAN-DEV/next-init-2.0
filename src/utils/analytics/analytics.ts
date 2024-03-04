import { ENV } from '../../configs/env';
import { FacebookAnalytics } from './facebook';
import { GoogleAnalytics } from './google';
import { KakaoAnalytics } from './kakao';
import { Analytics } from './types';

/**
 * 필요하지 않은 분석 도구는 이 코드에서 제거해주세요.
 * 단일 분석 도구만 사용할 경우, 해당 도구의 메서드를 직접 호출하여 사용합니다. 
  useEffect(() => {
    facebookAnalytics?.pageView({ content_name: 'page2', content_ids: [2] });
  }, [])
*/

export const googleAnalytics = new GoogleAnalytics(ENV.GA_KEY);
export const facebookAnalytics = new FacebookAnalytics(ENV.FACEBOOK_PIXEL_KEY);
export const kakaoAnalytics = new KakaoAnalytics(ENV.KAKAO_PIXEL_KEY);

/** Google Analytics, Facebook Pixel, Kakao Pixel을 모두 사용하는 경우 아래의 함수를 공통으로 사용할 수 있습니다. */
export const completeRegistrationAnalytics = (
  params: Analytics.CompleteRegistration,
) => {
  googleAnalytics?.completeRegistration(params.Ga);
  facebookAnalytics?.completeRegistration(params.Fbq);
  kakaoAnalytics?.completeRegistration(params.Kakao);
};

/** 각 분석 도구의 설정 메서드를 호출하는 함수들입니다. */
export const GASetter = () => googleAnalytics?.GASetter();
export const FacebookSetter = () => facebookAnalytics?.FacebookSetter();
export const KakaoSetter = () => kakaoAnalytics?.KakaoSetter();
