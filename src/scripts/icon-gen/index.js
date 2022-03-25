/* eslint-disable @typescript-eslint/no-var-requires */
// const FsHelper = require('src/utils/nodejs/fs-helper.js');

const path = require('path');
const { spawn } = require('child_process');
const { cli } = require('create-chakra-icons');
const { mkdirSync } = require('fs');
const convertArgsToObject = require('minimist');
const mappingArg = convertArgsToObject(process.argv.slice(2));

function main() {
  const io = {
    input: mappingArg['i'] || mappingArg['input'],
    output: mappingArg['o'] || mappingArg['output'],
  };

  createIcon(io);
  prettier();
}

main();

function createIcon(options) {
  let input = path.resolve(process.env.PWD, options.input || 'public/icons/svg');
  let output = path.resolve(process.env.PWD, options.output || 'src/generated/icons/MyIcons.tsx');

  const outputInfo = path.parse(output);
  if (!outputInfo.ext) output += '.tsx';

  mkdirSync(outputInfo.dir, { recursive: true });

  cli.main({
    i: input,
    o: output,
    ts: true,
    type: 'C',
    suffix: 'Icon',
  });
}

function prettier() {
  spawn('npm', ['run', 'format'], { stdio: 'inherit' });
}
