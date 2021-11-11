import { SocialProps } from 'components/molecules/SocialButton';
// SOCIAL
// 소셜로그인 콜백 URL
export const SOCIAL_REDIRECT_URL = `http://localhost:3000/login/social/callback`;

// KAKAO
export const KAKAO_CLIENT_ID = '29bebceec427c5cb9e5a35627b29036e';
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`;

// NAVER
export const NAVER_CLIENT_ID = 'uGdhMg5sF0l_syyYTL4a';
export const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=naver`;

// FACEBOOK
export const FACEBOOK_CLIENT_ID = '390225185553512';
export const FACEBOOK_LOGIN_URL = `https://www.facebook.com/v9.0/dialog/oauth?response_type=code&client_id=${FACEBOOK_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=facebook`;

// GOOGLE
export const GOOGLE_CLIENT_ID = '150905530006-61l7dmaai5ih8href866erlm80cf6q5i.apps.googleusercontent.com';
export const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=google&scope=openid`;

// APPLE
export const APPLE_CLIENT_ID = '123';
export const APPLE_LOGIN_URL = `https://appleid.apple.com/auth/authorize?response_type=code&client_id=${APPLE_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=apple`;

// TODO : 추가하고 싶은 소셜을 아래 처럼 추가할 수 있습니다.
export const SOCIAL_DATA: SocialProps[] = [
  { social: 'kakao', link: KAKAO_LOGIN_URL },
  { social: 'naver', link: NAVER_LOGIN_URL },
  { social: 'facebook', link: FACEBOOK_LOGIN_URL },
  { social: 'google', link: GOOGLE_LOGIN_URL },
  { social: 'apple', link: APPLE_LOGIN_URL },
];
