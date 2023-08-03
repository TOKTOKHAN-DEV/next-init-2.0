import { ENV } from '@/configs/env';

const isValid = () => {
  if (!ENV.KAKAO_PIXEL_KEY) return false;
  if (typeof window === 'undefined') return false;
  if (!window.kakaoPixel) return false;
  return true;
};

export const completeRegistration = (social: string) => {
  if (!isValid()) return;
  window.kakaoPixel(ENV.KAKAO_PIXEL_KEY).completeRegistration(social);
};

export const startProject = (params: { id: string; step: number }) => {
  if (!isValid()) return;
  window
    .kakaoPixel(ENV.KAKAO_PIXEL_KEY)
    .viewContent({ id: params.id, tag: params.step });
};

export const completeProject = (id: string) => {
  if (!isValid()) return;
  window.kakaoPixel(ENV.KAKAO_PIXEL_KEY).addToCart({ id: id, tag: 'complete' });
};

export const consultingApply = () => {
  if (!isValid()) return;
  window.kakaoPixel(ENV.KAKAO_PIXEL_KEY).participation('PreBooking');
};

export const requestApply = () => {
  if (!isValid()) return;
  window.kakaoPixel(ENV.KAKAO_PIXEL_KEY).participation('Consulting');
};

export const KakaoSetter = () => {
  if (!ENV.KAKAO_PIXEL_KEY) return <></>;
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `kakaoPixel('${ENV.KAKAO_PIXEL_KEY}').pageView();`,
      }}
    />
  );
};
