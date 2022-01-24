export const CONFIG = {
  HOME: process.env.NEXT_PUBLIC_HOME,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  ENV: process.env.NODE_ENV,
  AUTH_TOKEN_KEY: process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY,
  API_KEYS: {
    KAKAO: process.env.NEXT_PUBLIC_KAKAO_LOGIN_API_KEY,
  },
} as const;
