/* eslint-disable @typescript-eslint/no-var-requires */
const generator = require('swagger-typescript-api');
const path = require('path');
const fs = require('fs');
const { mkdir } = require('./src/utils/mkdir');

const { generateApi } = generator;

const TARGET = 'ficl.yaml';

const ROOT_PATH = process.env.PWD;
const SCRIPT_PATH = path.resolve(ROOT_PATH, 'scripts');
const SOURCE_PATH = path.resolve(SCRIPT_PATH, 'api-generator/src');

const SWAGGER_PATH = path.resolve(SOURCE_PATH, 'swagger');
const TEMPLATE_PATH = path.resolve(SOURCE_PATH, 'template');

const CUSTOM_TEMPLATE_PATH = path.resolve(TEMPLATE_PATH, 'custom-templates');
const TARGET_PATH = path.resolve(SWAGGER_PATH, TARGET);

const [fileName] = TARGET.split('.');

const ROOT_PATH_OF_GENERATED = path.resolve(ROOT_PATH, 'generated');
mkdir(ROOT_PATH_OF_GENERATED);
const API_PATH_GENERATED = path.resolve(ROOT_PATH_OF_GENERATED, 'api');
mkdir(API_PATH_GENERATED);
const OUTPUT_PATH = path.resolve(API_PATH_GENERATED, fileName);
mkdir(OUTPUT_PATH);

(async function () {
  const { files } = await generateApi({
    input: TARGET_PATH,
    httpClientType: 'axios', // or "fetch"
    modular: true,
    moduleNameFirstTag: true,
    typeSuffix: 'Type',
    templates: CUSTOM_TEMPLATE_PATH,
  });

  files.forEach(({ name, content }) => {
    const folderName = name.replace('.ts', '');
    const folderPath = `${OUTPUT_PATH}/${folderName}`;
    const filePath = `${folderPath}/index.ts`;
    try {
      mkdir(folderPath);
      fs.writeFileSync(filePath, content, console.error);
    } catch (err) {
      console.error(err);
    }
  });
})();
