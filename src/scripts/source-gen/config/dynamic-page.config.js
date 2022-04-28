/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { getTextCase } = require('../../../utils/nodejs/getTextCase');

const rootPath = process.env.PWD;

function getDynamicPageConfig(pagePath, slugName) {
  const parentPageName = pagePath.split('/').pop();

  const pageTextCase = getTextCase(parentPageName);
  const slugTextCase = getTextCase(slugName);

  const pageComponentName = pageTextCase.pascal + 'DetailPage';
  const pageContentName = pageTextCase.pascal + 'DetailPageContent';

  const outputPathPage = path.resolve(
    pagePath,
    `[${slugTextCase.camel}]`,
    'index.ts',
  );

  const outputPathComponent = path.resolve(
    rootPath,
    'src/components/elements',
    pageComponentName,
  );

  const outputPathComponentFile = path.resolve(
    outputPathComponent,
    pageComponentName + '.tsx',
  );
  const outputPathContent = path.resolve(
    outputPathComponent,
    '_fragments',
    pageContentName + '.tsx',
  );

  return {
    data: {
      name: {
        slug: slugTextCase.camel,
        parentPage: parentPageName,
        element: pageComponentName,
        content: pageContentName,
      },
      outputPath: {
        page: outputPathPage,
        element: outputPathComponent,
        elementFile: outputPathComponentFile,
        content: outputPathContent,
      },
    },
    utils: {
      getTextCase,
    },
  };
}

module.exports = {
  getDynamicPageConfig,
};
