import { ENV } from '@/configs/env';

import { FacebookAnalytics } from './facebook';
import { GoogleAnalytics } from './google';
import { KakaoAnalytics } from './kakao';

const googleAnalytics = ENV.GA_KEY
  ? new GoogleAnalytics(ENV.GA_KEY)
  : console.error('should set GA key');

const facebookAnalytics = ENV.FACEBOOK_PIXEL_KEY
  ? new FacebookAnalytics(ENV.FACEBOOK_PIXEL_KEY)
  : console.error('should set facebook key');

const kakaoAnalytics = ENV.KAKAO_PIXEL_KEY
  ? new KakaoAnalytics(ENV.KAKAO_PIXEL_KEY)
  : console.error('should set Kakao pixel key');

export const completeRegistrationAnalytics = (social: string) => {
  googleAnalytics?.completeRegistration(social);
  facebookAnalytics?.completeRegistration(social);
  kakaoAnalytics?.completeRegistration(social);
};

export const startProjectAnalytics = (params: { id: string; step: string }) => {
  googleAnalytics?.startProject(params);
  facebookAnalytics?.startProject(params);
  kakaoAnalytics?.startProject(params);
};

export const completeProjectAnalytics = (id: string) => {
  googleAnalytics?.completeProject(id);
  facebookAnalytics?.completeProject(id);
  kakaoAnalytics?.completeProject(id);
};

export const consultingApplyAnalytics = () => {
  googleAnalytics?.consultingApply();
  facebookAnalytics?.consultingApply();
  kakaoAnalytics?.consultingApply();
};

export const requestApplyAnalytics = () => {
  googleAnalytics?.requestApply();
  facebookAnalytics?.requestApply();
  kakaoAnalytics?.requestApply();
};

export const GASetter = () => googleAnalytics?.GASetter();
export const FacebookSetter = () => facebookAnalytics?.FacebookSetter();
export const KakaoSetter = () => kakaoAnalytics?.KakaoSetter();
