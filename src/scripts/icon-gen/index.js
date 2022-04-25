/* eslint-disable @typescript-eslint/no-var-requires */
// const FsHelper = require('src/utils/nodejs/fs-helper.js');

const path = require('path');
const scriptConfig = require('../../../tok-script.config.js').module;

const { spawn } = require('child_process');
const { cli } = require('create-chakra-icons');
const { mkdirSync } = require('fs');
const convertArgsToObject = require('minimist');
const mappingArg = convertArgsToObject(process.argv.slice(2));

function main() {
  const defaultConfig = scriptConfig['gen:icon'];
  const config = {
    ...defaultConfig,
    inputPath:
      mappingArg['i'] ||
      mappingArg['input'] ||
      defaultConfig.inputPath ||
      'public/icons/svg',
    outputPath:
      mappingArg['o'] ||
      mappingArg['output'] ||
      defaultConfig.outputPath ||
      'src/generated/icons/MyIcons.tsx',
  };

  createIcon(config);
  prettier(config.outputPath);
}

main();

function createIcon(config) {
  let input = path.resolve(process.env.PWD, config.inputPath);
  let output = path.resolve(process.env.PWD, config.outputPath);

  const outputInfo = path.parse(output);
  const inputInfo = path.parse(input);
  if (!outputInfo.ext) output += '.tsx';

  mkdirSync(outputInfo.dir, { recursive: true });

  cli.main({
    i: input,
    o: output,
    ts: true,
    type: 'C',
    suffix: config.suffix || 'Icon',
    prefix: config.prefix,
    name: inputInfo.ext ? inputInfo.name : void 0,
  });
}

function prettier(outputPath) {
  let output = path.resolve(process.env.PWD, outputPath);
  spawn('npm', ['run', 'format', '--', output], { stdio: 'inherit' });
}
