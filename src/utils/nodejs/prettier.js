/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const prettier = require('prettier');
const { spawn } = require('child_process');

const configPath = path.resolve(process.env.PWD, './prettierrc.js');
const prettierConfig = prettier.resolveConfig(configPath, {
  useCache: false,
});

function prettierCli(outputPath) {
  let output = path.resolve(process.env.PWD, outputPath);
  spawn('npm', ['run', 'format', '--', output], { stdio: 'inherit' });
}

async function prettierString(string) {
  return prettier.format(string, {
    ...(await prettierConfig),
    parser: 'babel',
  });
}

module.exports = {
  prettierCli,
  prettierString,
};
