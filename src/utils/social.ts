import { ENV } from '@/configs/env';

type SocialOAuthType = 'kakao' | 'naver' | 'google' | 'facebook' | 'apple';

const CLIENT_IDS: Record<SocialOAuthType, string> = {
  kakao: ENV.KAKAO_CLIENT_ID ?? '',
  naver: ENV.NAVER_CLIENT_ID ?? '',
  google: ENV.GOOGLE_CLIENT_ID ?? '',
  apple: ENV.GOOGLE_CLIENT_ID ?? '',
  facebook: ENV.GOOGLE_CLIENT_ID ?? '',
};

const OAUTH_PATH: Record<SocialOAuthType, string> = {
  kakao: 'https://kauth.kakao.com/oauth/authorize',
  naver: 'https://nid.naver.com/oauth2.0/authorize',
  google: 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount',
  facebook: 'https://www.facebook.com/v9.0/dialog/oauth',
  apple: 'https://appleid.apple.com/auth/authorize',
};

export const socialOAuthUrl = {
  kakao: (returnUrl?: string) => createOAuthUrl('kakao', { returnUrl }),
  naver: (returnUrl?: string) => createOAuthUrl('naver', { returnUrl }),
  facebook: (returnUrl?: string) => createOAuthUrl('facebook', { returnUrl }),
  apple: (returnUrl?: string) => createOAuthUrl('apple', { returnUrl }),
  google: (returnUrl?: string) =>
    createOAuthUrl('google', { returnUrl, scope: 'openid' }),
};

const createOAuthUrl = (
  type: SocialOAuthType,
  options?: { returnUrl?: string; scope?: string },
) => {
  const clientId = CLIENT_IDS[type];
  const redirectUri = `${ENV.DOMAIN}/social/callback`;
  const responseType = 'code';
  const state = encodeOAuthState(type, options?.returnUrl);
  const scope = options?.scope ? `&scope=${options.scope}` : '';

  return `${OAUTH_PATH[type]}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}${scope}`;
};

export const encodeOAuthState = (type: string, returnUrl?: string) => {
  return Buffer.from(JSON.stringify({ type, returnUrl }), 'utf8').toString(
    'base64',
  );
};
export const decodeOAuthState = (
  state?: string | string[],
): {
  type?: string;
  returnUrl?: string;
} | null => {
  if (typeof state !== 'string') return null;
  const parsed = JSON.parse(Buffer.from(state, 'base64').toString('utf8'));

  if (typeof parsed !== 'object') return null;
  return {
    type: parsed.type,
    returnUrl: parsed.returnUrl,
  };
};
