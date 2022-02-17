/* eslint-disable @typescript-eslint/no-var-requires */
const { tsImport } = require('ts-import');
const { getPathOnProject } = require('./utils/path');

require('dotenv').config();

const readConfig = async () => {
  const config_path = await getPathOnProject('config.ts');
  const { CONFIG } = await tsImport.compile(config_path);
  return CONFIG.API_BASE_URL;
};

module.exports = { readConfig };
