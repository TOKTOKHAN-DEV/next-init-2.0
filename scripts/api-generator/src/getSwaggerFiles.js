/* eslint-disable @typescript-eslint/no-var-requires */

const { generateApi } = require('swagger-typescript-api');
const { getPathOnApp } = require('./utils/path');

const customTemplatesFolder = getPathOnApp('src/template/custom-templates');
const reactQueryTypeTemplate = getPathOnApp('src/template/my-templates/react-query-type.eta');

const getSwaggerFiles = async (swaggerUrl) => {
  const { files } = await generateApi({
    url: swaggerUrl,
    httpClientType: 'axios', // or "fetch"
    modular: true,
    moduleNameFirstTag: true,
    typeSuffix: 'Type',
    templates: customTemplatesFolder,
    extraTemplates: [
      {
        name: 'react-query-type.ts', //
        path: reactQueryTypeTemplate,
      },
    ],
  });
  return files;
};

module.exports = { getSwaggerFiles };
