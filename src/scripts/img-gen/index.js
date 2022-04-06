/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const util = require('util');
const eta = require('eta');
const path = require('path');
const { prettierString } = require('../../utils/nodejs/prettier');
const { getImageGeneratorConfig } = require('./getImageGeneratorConfig');
const { convertFilePathToObject } = require('../../utils/nodejs/convertFilePathToObject');

eta.configure({
  views: path.join(__dirname, 'templates'),
});

async function main() {
  const {
    //
    inputPath,
    outputPath,
    templatePath,
    ignoredPattern,
    displayName,
    includingPattern,
    basePath,
  } = getImageGeneratorConfig();

  const imgObject = convertFilePathToObject(inputPath, {
    //
    includingPattern,
    ignoredPattern,
    basePath,
  });

  const templateConfig = {
    //
    imgObject: util.inspect(imgObject),
    displayName: displayName,
  };

  const view = await eta.renderFile(templatePath, templateConfig);
  fs.mkdirSync(path.parse(outputPath).dir, { recursive: true });
  fs.writeFileSync(outputPath, await prettierString(view), 'utf-8');
}

main();
