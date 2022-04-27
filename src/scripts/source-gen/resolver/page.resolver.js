/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { prompt, AutoComplete } = require('enquirer');
const { getPageEtaConfig } = require('../config/page.config');

const GeneratorByEta = require('../../../utils/nodejs/eta');
const generator = new GeneratorByEta();

async function pageResolver() {
  const pageRootPath = path.resolve(process.env.PWD, 'src/pages');
  const targetPath = await getTargetPage(pageRootPath);

  const response = await prompt({
    type: 'input',
    name: 'pageName',
    message: 'What is your page name?',
  });
  const { pageName } = response;

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
      pageTitle: `똑똑한 개발자 | ${pageName}`,
    },
    output: outputPath.elementFile,
  });
}

module.exports = {
  pageResolver,
};

async function getTargetPage(targetFolder) {
  const pwd = process.env.PWD;
  const files = fs.readdirSync(targetFolder, {
    encoding: 'utf-8',
    withFileTypes: true,
  });

  const dirs = files
    .filter((file) => file.isDirectory())
    .map((file) => path.resolve(targetFolder, file.name).replace(`${pwd}/`, ''))
    .concat([targetFolder.replace(`${pwd}/`, '')])
    .reverse();

  const prompt = new AutoComplete({
    name: 'target',
    message: 'Select Page Path',
    initial: 0,
    choices: dirs,
  });

  const target = await prompt.run();
  const targetStaticPath = path.join(pwd, target);

  if (targetStaticPath === targetFolder) return targetFolder;
  return getTargetPage(targetStaticPath);
}
