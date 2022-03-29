/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const scriptConfig = require('../../../tok-script.config.js').module;
const { generateApiFiles } = require('./src/generateApiFiles');
const { generateMockFiles } = require('./src/generateMockFiles');
const { getSwaggerFiles } = require('./src/getSwaggerFiles');
const { getPathOnProject } = require('./src/utils/path');
const { withLoading } = require('./src/utils/withLoading');
const convertArgsToObject = require('minimist');

const mappingArg = convertArgsToObject(process.argv.slice(2));

async function main() {
  const config = scriptConfig['api:gen'];
  const { swaggerSchemaUrl } = config;

  const input = mappingArg['i'] || mappingArg['input'] || swaggerSchemaUrl;
  const output = mappingArg['o'] || mappingArg['output'] || config.outputPath || 'src/generated/apis';

  const files = await withLoading(`read-swagger`, () => getSwaggerFiles({ ...config, swaggerSchemaUrl: input }));
  await withLoading('generate-files', () => generateApiFiles({ files, outputPath: output }));
  if (config.includeMock) {
    await withLoading(`generate-mock-data`, () =>
      generateMockFiles({
        swaggerUrl: input, //
        targetPath: getPathOnProject(path.resolve(output, '@mocks')),
        schemaPath: getPathOnProject(path.resolve(output, 'will-remove')),
      }),
    );
  }
}

main();
