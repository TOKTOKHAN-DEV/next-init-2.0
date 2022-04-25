/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { prompt } = require('enquirer');
const { getPageEtaConfig } = require('../config/page.config');

const GeneratorByEta = require('../../../utils/nodejs/eta');
const generator = new GeneratorByEta();

async function pageResolver() {
  const response = await prompt({
    type: 'input',
    name: 'page',
    message: 'What is your page name?',
  });
  const { page } = response;

  const config = getPageEtaConfig(page);
  const {
    data: { outputPath, name },
  } = config;

  generateIndexFile({
    config: {
      exportName: name.element,
      importPath: `@components/elements/${name.element}`,
    },
    output: path.resolve(outputPath.page, 'index.ts'),
  });

  generateIndexFile({
    config: {
      exportName: name.element,
      importPath: `./${name.element}`,
    },
    output: path.resolve(outputPath.element, 'index.ts'),
  });

  generateComponentFile({
    config: { name: name.content },
    output: outputPath.content,
  });

  generatePageComponentFile({
    config: { name: name.element, contentName: name.content },
    output: outputPath.elementFile,
  });
}

async function generateIndexFile({
  config: { exportName, importPath },
  output,
}) {
  const { Index } = generator.definedTemplate;
  const view = await generator.renderDefinedEta(Index.name, {
    exportName,
    importPath,
  });
  generator.generate({ view, output });
}
async function generateComponentFile({ config: { name }, output }) {
  const { ChakraComponent } = generator.definedTemplate;
  const view = await generator.renderDefinedEta(ChakraComponent.name, { name });
  generator.generate({ view, output });
}
async function generatePageComponentFile({
  config: { name, contentName },
  output,
}) {
  const { PageComponent } = generator.definedTemplate;
  const view = await generator.renderDefinedEta(PageComponent.name, {
    name,
    contentName,
  });
  generator.generate({ view, output });
}

module.exports = {
  pageResolver,
};
