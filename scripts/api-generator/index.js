/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const generator = require('swagger-typescript-api');
const init = require('./src/init');

const { mkdir } = require('./src/utils/mkdir');
const { getPathOnApp } = require('./src/utils/path');
const { generateApi } = generator;

const customTemplatesFolder = getPathOnApp('src/template/custom-templates');
const typeFilesName = ['react-query-type.ts', 'data-contracts.ts'];

async function main() {
  const { outputFolder, targetSwaggerFile } = await init();

  const { files } = await generateApi({
    input: targetSwaggerFile,
    httpClientType: 'axios', // or "fetch"
    modular: true,
    moduleNameFirstTag: true,
    typeSuffix: 'Type',
    templates: customTemplatesFolder,
    extraTemplates: [
      {
        name: 'react-query-type.ts', //
        path: getPathOnApp('src/template/my-templates/react-query-type.eta'),
      },
    ],
  });

  files.forEach(({ name, content }) => {
    try {
      const isTypeFile = typeFilesName.findIndex((typeFile) => typeFile === name) >= 0;
      const fileNameWithoutExtension = name.replace('.ts', '');

      const apiFolder = `${outputFolder}/${fileNameWithoutExtension}`;
      const typeFolder = `${outputFolder}/types`;

      const targetFolder = isTypeFile ? typeFolder : apiFolder;
      const targetFile = isTypeFile ? `${typeFolder}/${name}` : `${apiFolder}/index.ts`;

      mkdir(targetFolder);
      fs.writeFileSync(targetFile, content, console.error);
    } catch (err) {
      console.error(err);
    }
  });
}

main();
