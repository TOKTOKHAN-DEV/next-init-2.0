/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { getDynamicPageConfig } = require('../config/dynamic-page.config');
const { getTargetFolderPath } = require('../prompts/getTargetFolderPath');

const GeneratorByEta = require('../../../utils/nodejs/eta');
const { getSlugName } = require('../prompts/getSlugName');

const generator = new GeneratorByEta();

async function dynamicPageResolver() {
  const pageRootPath = path.resolve(process.env.PWD, 'src/pages');
  const targetPath = await getTargetFolderPath(pageRootPath, {
    isRecursive: true,
  });
  const pageName = await getSlugName();

  const config = getDynamicPageConfig(targetPath, pageName);
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
    config: {
      name: name.content,
      props: [
        {
          prop: name.slug,
          type: 'string | string[]',
          optional: true,
        },
      ],
    },
    output: outputPath.content,
  });

  generator.generateDynamicPageComponentFile({
    config: {
      name: name.element,
      contentName: name.content,
      slug: name.slug,
      pageTitle: `${name.app} | 상세 페이지`,
    },
    output: outputPath.elementFile,
  });
}

module.exports = {
  dynamicPageResolver,
};
