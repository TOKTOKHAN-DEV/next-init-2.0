/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const { AutoComplete } = require('enquirer');
const { mkdir } = require('./utils/mkdir');
const { getPathOnApp, getPathOnProject } = require('./utils/path');

const swaggerFolder = getPathOnApp('src/swagger');
const swaggerFiles = fs
  .readdirSync(swaggerFolder, { withFileTypes: true })
  .filter((li) => li.isFile())
  .map((li) => li.name);

const promptForSwaggerFile = new AutoComplete({
  name: 'target',
  message: 'Pick your swagger file',
  choices: swaggerFiles,
});

async function init() {
  const selectedSwagger = await promptForSwaggerFile.run();
  const targetSwaggerFile = getPathOnApp(`src/swagger/${selectedSwagger}`);
  const [fileName] = selectedSwagger.split('.');

  const generatedFolder = getPathOnProject('generated');
  mkdir(generatedFolder);
  const generatedApiFolder = getPathOnProject('generated/api');
  mkdir(generatedApiFolder);
  const outputFolder = getPathOnProject(`generated/api/${fileName}`);
  mkdir(outputFolder);

  return { targetSwaggerFile, outputFolder };
}

module.exports = init;
