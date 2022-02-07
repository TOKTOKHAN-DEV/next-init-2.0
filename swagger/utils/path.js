/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const projectRootPath = process.env.PWD;
const getPathOnProject = (str) => {
  return path.resolve(projectRootPath, str);
};

module.exports = {
  projectRootPath,
  getPathOnProject,
};
