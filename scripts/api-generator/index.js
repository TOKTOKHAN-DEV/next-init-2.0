/* eslint-disable @typescript-eslint/no-var-requires */
const { generateApiFiles } = require('./src/generateApiFiles');
const { generateMockFiles } = require('./src/generateMockFiles');
const { getSwaggerFiles } = require('./src/getSwaggerFiles');
const { readConfig } = require('./src/readConfig');
const { withLoading } = require('./src/utils/withLoading');

async function main() {
  const { API_BASE_URL, SWAGGER_SCHEMA_PATH_NAME } = await withLoading('read-config', () => readConfig());
  const swaggerUrl = `${API_BASE_URL}/${SWAGGER_SCHEMA_PATH_NAME}`;
  const files = await withLoading(`read-swagger`, () => getSwaggerFiles(swaggerUrl));
  const { generatedFolder } = await withLoading('generate-files', () => generateApiFiles(files));

  await withLoading(`generate-mock-data`, () =>
    generateMockFiles({
      swaggerUrl, //
      targetPath: `${generatedFolder}/mocks`,
      schemaPath: `${generatedFolder}/will-remove`,
    }),
  );
}

main();
