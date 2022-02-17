/* eslint-disable @typescript-eslint/no-var-requires */
const { generateFiles } = require('./src/generateFiles');
const { getSwaggerFiles } = require('./src/getSwaggerFiles');
const { readConfig } = require('./src/readConfig');
const { withLoading } = require('./src/utils/withLoading');

async function main() {
  const apiBaseUrl = await withLoading('read-config', readConfig);
  const swaggerUrl = `${apiBaseUrl}/schema`;
  const files = await withLoading(`read-swagger`, getSwaggerFiles(swaggerUrl));
  withLoading('generate-files', generateFiles(files));
}

main();
