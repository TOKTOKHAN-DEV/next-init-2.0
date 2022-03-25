/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { generateApiFiles } = require('./src/generateApiFiles');
const { generateMockFiles } = require('./src/generateMockFiles');
const { getSwaggerFiles } = require('./src/getSwaggerFiles');
const { readConfig } = require('./src/readConfig');
const { getPathOnProject } = require('./src/utils/path');
const { withLoading } = require('./src/utils/withLoading');
const convertArgsToObject = require('minimist');

const mappingArg = convertArgsToObject(process.argv.slice(2));

async function main() {
  const { API_BASE_URL, SWAGGER_SCHEMA_PATH_NAME } = await withLoading('read-config', () => readConfig());
  const DEFAULT_INPUT = `${API_BASE_URL}/${SWAGGER_SCHEMA_PATH_NAME}`;
  const DEFAULT_OUTPUT = 'src/generated/apis';

  const input = mappingArg['i'] || mappingArg['input'] || DEFAULT_INPUT;
  const output = mappingArg['o'] || mappingArg['output'] || DEFAULT_OUTPUT;

  const files = await withLoading(`read-swagger`, () => getSwaggerFiles(input));
  await withLoading('generate-files', () => generateApiFiles({ files, outputPath: output }));
  await withLoading(`generate-mock-data`, () =>
    generateMockFiles({
      swaggerUrl: input, //
      targetPath: getPathOnProject(path.resolve(output, '@mocks')),
      schemaPath: getPathOnProject(path.resolve(output, 'will-remove')),
    }),
  );
}

main();
