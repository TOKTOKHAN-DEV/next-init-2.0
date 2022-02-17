/* eslint-disable @typescript-eslint/no-var-requires */

const orval = require('orval');
const fs = require('fs');
const { withLoading } = require('./utils/withLoading');

const generateMockFiles =
  ({ swaggerUrl, targetPath, schemaPath }) =>
  async () => {
    await withLoading('generate api, mock, schema by orval', async () => {
      await generateOrvalFilesWithMock({ swaggerUrl, targetPath, schemaPath });
    });

    await withLoading('remove orval-api', () => {
      removeOrvalApiFiles(targetPath);
    });

    await withLoading('remove orval-schema', () => {
      fs.rmSync(schemaPath, { recursive: true });
    });
  };

const generateOrvalFilesWithMock = async ({ swaggerUrl, targetPath, schemaPath }) => {
  try {
    await orval.generate({
      input: swaggerUrl,
      output: {
        mode: 'tags-split',
        target: targetPath,
        schemas: schemaPath,
        prettier: true,
        tslint: true,
        mock: true,
        override: {
          components: {
            schemas: {
              suffix: 'Schema',
            },
            responses: {
              suffix: 'Response',
            },
            parameters: {
              suffix: 'Params',
            },
            requestBodies: {
              suffix: 'Data',
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const removeOrvalApiFiles = (targetPath) => {
  fs.readdirSync(targetPath, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach((dir) => {
      const orvalFolder = `${targetPath}/${dir.name}`;
      fs.readdirSync(orvalFolder, { withFileTypes: true })
        .filter((dir) => dir.isFile())
        .forEach((file) => {
          const fileName = file.name;
          const filePath = `${orvalFolder}/${fileName}`;
          const isMockFile = fileName.includes('.msw.');
          if (isMockFile) return;
          // file removed
          fs.unlinkSync(filePath);
        });
    });
};

module.exports = { generateMockFiles };
