/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const projectRootPath = process.env.PWD;
const appRootPath = path.resolve(projectRootPath, 'src/scripts/api-generator');

const getPathOnProject = (str) => {
  return path.resolve(projectRootPath, str);
};
const getPathOnApp = (str) => {
  return path.resolve(appRootPath, str);
};

module.exports = {
  projectRootPath,
  appRootPath,
  getPathOnProject,
  getPathOnApp,
};
