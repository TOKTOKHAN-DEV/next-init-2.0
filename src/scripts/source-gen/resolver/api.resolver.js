/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const eta = require('eta');

const { prettierString } = require('../../../utils/nodejs/prettier');
const { getEtaConfig } = require('../config/api.config');
const { getApiLabel } = require('../prompts/getApiLabel');

const rootPath = process.env.PWD;

async function apiResolver() {
  const apiLabel = await getApiLabel();

  const outputPath = path.resolve(rootPath, 'src/apis', apiLabel);
  const templatePath = path.resolve(__dirname, '../templates/api');

  const templates = fs.readdirSync(templatePath, {
    encoding: 'utf-8', //
    withFileTypes: true,
  });

  const config = getEtaConfig(apiLabel);

  templates.forEach(async (template) => {
    const targetTemplate = path.resolve(templatePath, template.name);
    generateApiFile({
      targetTemplate, //
      outputPath,
      config,
    });
  });
}

async function generateApiFile({ targetTemplate, outputPath, config }) {
  const etaName = targetTemplate.split('/').pop();
  const tsName = etaName
    .replace('.eta', '.ts')
    .replace('Api.', `${config.data.apiClassName}.`);
  const view = await eta.renderFile(targetTemplate, config);
  const targetPath = path.resolve(outputPath, tsName);

  const formatted = isTypeTemplate(targetTemplate)
    ? view
    : await prettierString(view);

  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(targetPath, formatted, 'utf-8');
}

function isTypeTemplate(templatePath) {
  const templateName = templatePath.split('/').pop();
  return templateName === 'Api.type.eta';
}

module.exports = {
  apiResolver,
};
