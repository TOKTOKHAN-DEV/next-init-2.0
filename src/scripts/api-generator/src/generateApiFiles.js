/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const typeFilesName = ['react-query-type.ts', 'data-contracts.ts'];

const generateApiFiles = async ({ files, outputPath }) => {
  const output = path.resolve(process.env.PWD, outputPath);
  const typeFolder = path.resolve(output, 'types');

  files.forEach(({ name, content }) => {
    try {
      const isTypeFile = typeFilesName.findIndex((typeFile) => typeFile === name) >= 0;
      const filename = name.replace('.ts', '');

      const targetFolder = isTypeFile ? typeFolder : path.resolve(output, filename);
      const targetFile = isTypeFile ? path.resolve(typeFolder, name) : path.resolve(targetFolder, 'index.ts');

      fs.mkdirSync(targetFolder, { recursive: true });
      fs.writeFileSync(targetFile, content, console.error);
    } catch (err) {
      console.error(err);
    }
  });
};

module.exports = { generateApiFiles };
