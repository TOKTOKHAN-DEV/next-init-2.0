/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { getPageEtaConfig } = require('../config/page.config');
const { getTargetFolderPath } = require('../prompts/getTargetFolderPath');
const { getPageName } = require('../prompts/getPageName');

const GeneratorByEta = require('../../../utils/nodejs/eta');

const generator = new GeneratorByEta();

async function pageResolver() {
  const pageRootPath = path.resolve(process.env.PWD, 'src/pages');
  const targetPath = await getTargetFolderPath(pageRootPath, {
    isRecursive: true,
  });
  const pageName = await getPageName();

  const config = getPageEtaConfig(targetPath, pageName);
  const {
    data: { outputPath, name },
  } = config;

  generator.generateIndexFile({
    config: {
      exportName: name.element,
      importPath: `@components/elements/${name.element}`,
    },
    output: outputPath.page,
  });

  generator.generateIndexFile({
    config: {
      exportName: name.element,
      importPath: `./${name.element}`,
    },
    output: path.resolve(outputPath.element, 'index.ts'),
  });

  generator.generateComponentFile({
    config: { name: name.content },
    output: outputPath.content,
  });

  generator.generatePageComponentFile({
    config: {
      name: name.element,
      contentName: name.content,
      pageTitle: `${name.app} | ${pageName}`,
    },
    output: outputPath.elementFile,
  });
}

module.exports = {
  pageResolver,
};
