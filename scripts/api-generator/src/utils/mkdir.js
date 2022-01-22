/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

function mkdir(path) {
  if (fs.existsSync(path)) {
    console.log('already exist folder:', path);
    return;
  }
  fs.mkdirSync(path, console.error);
}

function isNotExist(path) {
  return !fs.existsSync(path);
}

module.exports = { mkdir, isNotExist };
