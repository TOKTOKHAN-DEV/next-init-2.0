export const CONFIG = {
  ENV: process.env.NODE_ENV,
  DOMAIN: requireEnv('NEXT_PUBLIC_DOMAIN', 'https://yourhompage.com'),
  API_BASE_URL: requireEnv(
    'NEXT_PUBLIC_API_BASE_URL',
    'https://api.yourhompage.co.kr',
  ),
  APP_NAME: requireEnv('APP_NAME', '똑똑한 개발자'),
  /** For Script w:start */
  GITHUB_TOKEN: requireEnv('GITHUB_TOKEN'),
  GITHUB_REPO: requireEnv('GITHUB_REPO'),
} as const;

function requireEnv(key: string): string | undefined;
function requireEnv<T>(key: string, defaultValue: T): string | T;
function requireEnv<T>(key: string, defaultValue?: T) {
  const envValue = process.env[key];
  envValue ??
    console.error(`
  - Missing Env: ${key}
  ${defaultValue ? `- Default Value: ${defaultValue}` : ''}
  `);
  return envValue ?? defaultValue;
}
