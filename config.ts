export const CONFIG = {
  ENV: requireEnv('NODE_ENV'),
  DOMAIN: requireEnv('NEXT_PUBLIC_DOMAIN', 'https://yourhompage.com'),
  API_BASE_URL: requireEnv(
    'NEXT_PUBLIC_API_BASE_URL',
    'https://api.yourhompage.co.kr',
  ),
  APP_NAME: requireEnv('APP_NAME', '똑똑한 개발자'),
  API_KEYS: {
    KAKAO: requireEnv('NEXT_PUBLIC_KAKAO_LOGIN_API_KEY'),
  },

  /** For Script w:start */
  GITHUB_TOKEN: requireEnv('GITHUB_TOKEN'),
} as const;

function requireEnv<T>(key: string, defaultValue: T): string | T;
function requireEnv(key: string): string | undefined;
function requireEnv(key: string, defaultValue?: string | number) {
  return process.env[key] ?? defaultValue;
}
