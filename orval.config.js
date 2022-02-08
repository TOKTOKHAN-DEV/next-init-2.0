/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const { CONFIG } = require('./config.ts');

module.exports = {
  // Orval config reference:  https://orval.dev/reference/configuration/output
  api: {
    input: `${CONFIG.API_BASE_URL}/openapi.json`,
    output: {
      mode: 'tags-split',
      client: 'react-query',
      target: './generated/apis',
      schemas: './generated/schemas',
      tsconfig: './tsconfig.json',
      prettier: true,
      tslint: true,
      mock: true,
      override: {
        mutator: {
          path: './apis/_axios/useCustomInstance.ts',
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
