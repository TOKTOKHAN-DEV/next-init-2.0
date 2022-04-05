/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const util = require('util');
const eta = require('eta');
const path = require('path');
const convertArgsToObject = require('minimist');
const { convertToSnakeCase } = require('../../utils/nodejs/convertToSnakeCase');
const { prettierString } = require('../../utils/nodejs/prettier');
const scriptConfig = require('../../../tok-script.config.js');

const mappingArg = convertArgsToObject(process.argv.slice(2));
const generatorConfig = scriptConfig['module']['gen:img'];

eta.configure({
  views: path.join(__dirname, 'templates'),
});

const IMAGE_EXTENSION = generatorConfig.imageExtension || ['.png', '.jpg', '.svg'];
const INPUT_PATH = path.resolve(process.env.PWD, mappingArg['i'] || mappingArg['input'] || generatorConfig.inputPath || './public');
const OUTPUT_PATH = path.resolve(process.env.PWD, mappingArg['o'] || mappingArg['output'] || generatorConfig.outputPath || './src/generated/path/images.ts');
const TEMPLATE_PATH = './image-template';
const DISPLAY_NAME = generatorConfig.displayName || 'IMAGES';

async function main() {
  const imgObject = getImageFromPath(INPUT_PATH);
  const templateConfig = {
    //
    imgObject: util.inspect(imgObject),
    displayName: DISPLAY_NAME,
  };

  const view = await eta.renderFile(TEMPLATE_PATH, templateConfig);
  fs.mkdirSync(path.parse(OUTPUT_PATH).dir, { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, await prettierString(view), 'utf-8');
}

main();

function getImageFromPath(basePath) {
  const result = {};

  const setFile = (TPath, obj) => {
    fs.readdirSync(TPath, { withFileTypes: true }) //
      .forEach((file) => {
        const currentPath = path.resolve(TPath, file.name);
        const fileInfo = path.parse(currentPath);
        const isImgFile = IMAGE_EXTENSION.includes(fileInfo.ext);
        const key = convertToSnakeCase(fileInfo.name).toUpperCase();

        if (isImgFile) {
          let imgPath = currentPath.replace(basePath, '');
          if (imgPath[0] === '/') imgPath = imgPath.slice(1);

          obj[key] = imgPath;
          return;
        }
        if (file.isDirectory()) {
          obj[key] = {};
          setFile(currentPath, obj[key]);
        }
      });
  };

  setFile(basePath, result);

  return result;
}
