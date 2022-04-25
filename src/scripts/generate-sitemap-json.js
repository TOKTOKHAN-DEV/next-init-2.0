/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const globby = require('globby');

// sitemap 생성시 제외할 라우트의 목록입니다.
const FORBIDDEN = ['/signup', '/login'].map((route) => `!**${route}`);

(async () => {
  /**
   * localRoutes: pages 폴더 내 파일을 기준으로 만듭니다.
   */
  const localFiles = await globby([
    'pages/**/*.{js,tsx}',
    '!pages/_*.{js,tsx}',
    '!pages/**/[*.{js,tsx}',
    '!pages/api',
    ...FORBIDDEN,
  ]);

  const localRoutes = localFiles
    .map((file) => {
      const route = file
        .replace('pages', '')
        .replace(/.tsx|.js/, '')
        .replace(/\/index/g, '');
      return route;
    })
    .map((route) => `${route}`);

  // write the sitemap.json
  fs.writeFileSync('public/sitemap.json', JSON.stringify(localRoutes));
})();
