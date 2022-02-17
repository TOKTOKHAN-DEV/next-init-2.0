/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { mkdir } = require('./utils/mkdir');
const { getPathOnProject } = require('./utils/path');

const typeFilesName = ['react-query-type.ts', 'data-contracts.ts'];

const generateFiles = (files) => async () => {
  files.forEach(({ name, content }) => {
    try {
      const generatedFolder = getPathOnProject('generated');
      mkdir(generatedFolder);
      const apiFolder = getPathOnProject('generated/apis');
      mkdir(apiFolder);

      const isTypeFile = typeFilesName.findIndex((typeFile) => typeFile === name) >= 0;
      const fileNameWithoutExtension = name.replace('.ts', '');

      const typeFolder = `${apiFolder}/types`;
      const targetFolder = isTypeFile ? `${apiFolder}/types` : `${apiFolder}/${fileNameWithoutExtension}`;
      const targetFile = isTypeFile ? `${typeFolder}/${name}` : `${targetFolder}/index.ts`;

      mkdir(targetFolder);
      fs.writeFileSync(targetFile, content, console.error);
    } catch (err) {
      console.error(err);
    }
  });
};

module.exports = { generateFiles };
