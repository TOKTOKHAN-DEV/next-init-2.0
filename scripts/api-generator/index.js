/* eslint-disable @typescript-eslint/no-var-requires */
const { generateApiFiles } = require('./src/generateApiFiles');
const { generateMockFiles } = require('./src/generateMockFiles');
const { getSwaggerFiles } = require('./src/getSwaggerFiles');
const { readConfig } = require('./src/readConfig');
const { withLoading } = require('./src/utils/withLoading');

async function main() {
  const apiBaseUrl = await withLoading('read-config', readConfig);
  const swaggerUrl = `${apiBaseUrl}/openapi.json`;

  const files = await withLoading(`read-swagger`, getSwaggerFiles(swaggerUrl));
  const { generatedFolder } = await withLoading('generate-files', generateApiFiles(files));

  await withLoading(
    `generate-mock-data`,
    generateMockFiles({
      swaggerUrl, //
      targetPath: `${generatedFolder}/mocks`,
      schemaPath: `${generatedFolder}/will-remove`,
    }),
  );
}

main();
