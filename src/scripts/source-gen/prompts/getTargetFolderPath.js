/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { AutoComplete } = require('enquirer');

async function getTargetFolderPath(
  targetFolder,
  options = { isRecursive: false },
) {
  const pwd = process.env.PWD;
  const files = fs.readdirSync(targetFolder, {
    encoding: 'utf-8',
    withFileTypes: true,
  });

  const dirs = files
    .filter((file) => file.isDirectory())
    .map((file) => path.resolve(targetFolder, file.name).replace(`${pwd}/`, ''))
    .concat([targetFolder.replace(`${pwd}/`, '')])
    .reverse();

  const prompt = new AutoComplete({
    name: 'target',
    message: 'Select path to be created',
    initial: 0,
    choices: [...dirs],
  });

  const target = await prompt.run();
  const targetStaticPath = path.join(pwd, target);
  const targetSubFolders = fs
    .readdirSync(targetStaticPath, {
      encoding: 'utf-8',
      withFileTypes: true,
    })
    .filter((file) => file.isDirectory());

  const isSelectCurrentFolder = targetStaticPath === targetFolder;
  const hasSubFolder = !!targetSubFolders.length;
  const { isRecursive } = options;

  if (isSelectCurrentFolder) return targetFolder;
  if (!hasSubFolder) return targetFolder;
  if (!isRecursive) return targetStaticPath;

  return getTargetFolderPath(targetStaticPath);
}

module.exports = { getTargetFolderPath };
