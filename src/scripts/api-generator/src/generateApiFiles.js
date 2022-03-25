/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { mkdir } = require('./utils/mkdir');
const { getPathOnProject } = require('./utils/path');

const typeFilesName = ['react-query-type.ts', 'data-contracts.ts'];

const generateApiFiles = async (files) => {
  const generatedFolder = getPathOnProject('generated');
  mkdir(generatedFolder);
  const apisFolder = getPathOnProject('generated/apis');
  mkdir(apisFolder);
  const typeFolder = `${apisFolder}/types`;

  const filePathList = files.map(({ name, content }) => {
    try {
      const isTypeFile = typeFilesName.findIndex((typeFile) => typeFile === name) >= 0;
      const fileNameWithoutExtension = name.replace('.ts', '');

      const targetFolder = isTypeFile ? `${apisFolder}/types` : `${apisFolder}/${fileNameWithoutExtension}`;
      const targetFile = isTypeFile ? `${typeFolder}/${name}` : `${targetFolder}/index.ts`;

      mkdir(targetFolder);
      fs.writeFileSync(targetFile, content, console.error);

      return { targetFolder, targetFile };
    } catch (err) {
      console.error(err);
    }
  });

  return {
    generatedFolder,
    apisFolder,
    typeFolder,
    filePathList,
  };
};

module.exports = { generateApiFiles };
