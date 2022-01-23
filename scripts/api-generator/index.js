/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const generator = require('swagger-typescript-api');
const init = require('./src/init');

const { mkdir } = require('./src/utils/mkdir');
const { getPathOnApp } = require('./src/utils/path');
const { generateApi } = generator;

const customTemplatesFolder = getPathOnApp('src/template/custom-templates');

async function main() {
  const { outputFolder, targetSwaggerFile } = await init();

  const { files } = await generateApi({
    input: targetSwaggerFile,
    httpClientType: 'axios', // or "fetch"
    modular: true,
    moduleNameFirstTag: true,
    typeSuffix: 'Type',
    templates: customTemplatesFolder,
  });

  files.forEach(({ name, content }) => {
    const folderName = name.replace('.ts', '');
    const folderPath = `${outputFolder}/${folderName}`;
    const filePath = `${folderPath}/index.ts`;
    try {
      mkdir(folderPath);
      fs.writeFileSync(filePath, content, console.error);
    } catch (err) {
      console.error(err);
    }
  });
}

main();
