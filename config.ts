export const CONFIG = {
  ENV: process.env.NODE_ENV,
  DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  AUTH_TOKEN_KEY: process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY,

  /** For Script w:start */
  GITHUB_TOKEN: process.env._GITHUB_TOKEN,
  GITHUB_REPO: process.env._GITHUB_REPO,
} as const;
