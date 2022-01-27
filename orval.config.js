import { BASE_URL } from 'config';

module.exports = {
  'api': {
    input: `${BASE_URL}/openapi.json`,
    output: {
      mode: 'tags-split',
      client: 'react-query',
      target: './apis',
      schemas: './schemas',
      override: {
        mutator: {
          path: './apis/customInstance.ts',
          name: 'useCustomInstance',
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParams: 'cursor',
          options: {
            staleTime: 10000,
          },
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
        }
      },
    },
  },
}