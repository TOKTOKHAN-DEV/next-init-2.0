/* eslint-disable @typescript-eslint/no-var-requires */

(async () => {
  const fs = await import('fs');

  const { globby } = await import('globby');

  // sitemap 생성시 제외할 라우트의 목록입니다.
  const FORBIDDEN = ['/signup', '/login'].map((route) => `!**${route}`);

  (async () => {
    /**
     * localRoutes: pages 폴더 내 파일을 기준으로 만듭니다.
     */
    const localFiles = await globby([
      'src/pages/**/*.{js,tsx}',
      '!src/pages/_*.{js,tsx}',
      '!src/pages/**/[*.{js,tsx}',
      '!src/pages/api',
      ...FORBIDDEN,
    ]);

    const localRoutes = localFiles
      .map((file) => {
        const route = file
          .replace('src/pages', '')
          .replace(/.tsx|.js/, '')
          .replace(/\/index/g, '');
        return route;
      })
      .map((route) => `${route}`)
      .sort();

    // write the sitemap.json
    fs.writeFileSync('public/sitemap.json', JSON.stringify(localRoutes));
  })();
})();
