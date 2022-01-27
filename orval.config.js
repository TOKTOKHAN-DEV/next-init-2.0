module.exports = {
  api: {
    input: `${'http://127.0.0.1:8000'}/openapi.json`,
    output: {
      mode: 'tags-split',
      client: 'react-query',
      target: './apis',
      schemas: './schemas',
      prettier: './prettier',
      tslint: './.eslintrc.js',
      tsconfig: './tsconfig.json',
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
        },
      },
    },
  },
};
