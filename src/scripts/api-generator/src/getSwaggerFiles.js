/* eslint-disable @typescript-eslint/no-var-requires */

const { generateApi } = require('swagger-typescript-api');
const { getPathOnApp } = require('./utils/path');

const customTemplatesFolder = getPathOnApp('src/template/custom-templates');
const reactQueryTypeTemplate = getPathOnApp('src/template/my-templates/react-query-type.eta');

const getSwaggerFiles = async (config) => {
  const { files } = await generateApi({
    url: config.swaggerSchemaUrl,
    httpClientType: 'axios', // or "fetch"
    typeSuffix: 'Type',
    modular: true,
    moduleNameFirstTag: true,
    templates: customTemplatesFolder,
    extraTemplates: [
      {
        name: 'react-query-type.ts', //
        path: reactQueryTypeTemplate,
      },
    ],
    hooks: {
      onPrepareConfig: (defaultConfig) => {
        return { ...defaultConfig, myConfig: config };
      },
    },
  });
  return files;
};

module.exports = { getSwaggerFiles };
