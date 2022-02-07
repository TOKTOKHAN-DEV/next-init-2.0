/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

// reference: https://www.npmjs.com/package/enquirer
const { AutoComplete, prompt } = require('enquirer');
const { mkdir } = require('./utils/mkdir');
const path = require('path');

async function init({ swaggerPath, outputPath }) {
  const { targetName, targetPath } = isUrl(swaggerPath) ? await getTargetFileByUrl(swaggerPath) : await getTargetFileByPrompt(swaggerPath);

  const generatedFolder = outputPath;
  await mkdir(generatedFolder);
  const generatedApiFolder = path.resolve(generatedFolder, 'api');
  await mkdir(generatedApiFolder);
  const outputFolder = path.resolve(generatedApiFolder, targetName);
  await mkdir(outputFolder);

  return { targetPath, outputFolder };
}

module.exports = init;

function isUrl(str) {
  if (typeof str !== 'string') return;
  return /(^http:\/\/.*)|(^https:\/\/.*)/.test(str);
}

async function getTargetFileByUrl(url) {
  const response = await prompt({
    type: 'input',
    name: 'targetName',
    message: 'Enter target folder name',
    initial: 'swagger-url',
  });

  return { targetPath: url, targetName: response.targetName };
}

async function getTargetFileByPrompt(filePath) {
  const targetFiles = fs
    .readdirSync(filePath, { withFileTypes: true })
    .filter((li) => li.isFile())
    .map((li) => li.name);

  const promptForSwaggerFile = new AutoComplete({
    name: 'target',
    message: 'Pick your swagger file',
    choices: targetFiles,
  });

  const selectedTarget = await promptForSwaggerFile.run();
  const targetSwaggerFile = path.resolve(filePath, selectedTarget);
  const [fileName] = selectedTarget.split('.');

  return { targetPath: targetSwaggerFile, targetName: fileName };
}
