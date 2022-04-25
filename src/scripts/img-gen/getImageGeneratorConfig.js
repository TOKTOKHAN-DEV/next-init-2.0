/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const convertArgsToObject = require('minimist');
const scriptConfig = require('../../../tok-script.config.js');

const mappingArg = convertArgsToObject(process.argv.slice(2));
const generatorConfig = scriptConfig['module']['gen:img'];

function getImageGeneratorConfig() {
  return {
    inputPath: path.resolve(
      process.env.PWD,
      mappingArg['i'] ||
        mappingArg['input'] ||
        generatorConfig.inputPath ||
        './public',
    ),
    outputPath: path.resolve(
      process.env.PWD,
      mappingArg['o'] ||
        mappingArg['output'] ||
        generatorConfig.outputPath ||
        './src/generated/path/images.ts',
    ),
    basePath: generatorConfig.basePath || '',
    includingPattern: generatorConfig.includingPattern || [
      '*.jpg',
      '*.png',
      '*.svg',
      '*.jpeg',
    ],
    ignoredPattern: generatorConfig.ignoredPattern || [],
    displayName: generatorConfig.displayName || 'IMAGES',
    templatePath: './image-template',
  };
}

module.exports = { getImageGeneratorConfig };
