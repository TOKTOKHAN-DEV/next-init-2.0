/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const init = require('./init');
const { getPathOnProject } = require('./utils/path');

// const SWAGGER_INFO_URL = 'https://api.exmaple.net/schema/';
const SWAGGER_TARGET_FOLDER = getPathOnProject('swagger/target');
const OUTPUT_PATH = getPathOnProject('generated');
const TS_CONFIG_PATH = getPathOnProject('tsconfig.json');
const CUSTOM_INSTANCE_PATH = getPathOnProject('apis/_axios/useCustomInstance.ts');

module.exports = async () => {
  const { targetPath, outputFolder } = await init({
    // folder or url
    swaggerPath: SWAGGER_TARGET_FOLDER,
    outputPath: OUTPUT_PATH,
  });

  return {
    // Orval config reference:  https://orval.dev/reference/configuration/output
    api: {
      input: targetPath,
      output: {
        mock: true,
        tslint: true,
        prettier: true,
        tsconfig: TS_CONFIG_PATH,
        mode: 'tags-split',
        client: 'react-query',
        target: path.resolve(outputFolder, 'apis'),
        schemas: path.resolve(outputFolder, 'schemas'),
        override: {
          mutator: {
            path: CUSTOM_INSTANCE_PATH,
            name: 'useCustomInstance',
          },
          query: {
            useQuery: true,
            useInfinite: true,
            useInfiniteQueryParams: 'cursor',
          },
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
    },
  };
};
