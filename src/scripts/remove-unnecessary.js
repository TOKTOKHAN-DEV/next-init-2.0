/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

const TARGET_PATH = path.resolve(process.cwd(), 'src');
const DELETE_INDICATOR = '@delete';
const DELETE_KEYS = {
  FOLDER: `${DELETE_INDICATOR}:folder`,
  LINE: `${DELETE_INDICATOR}:line`,
  FILE: `${DELETE_INDICATOR}:file`,
};

forEachFiles(TARGET_PATH, (d) => {
  if (isScriptFile(d.path)) return;
  const file = fs.readFileSync(d.path, { encoding: 'utf-8' });

  if (isRemoveLine(file)) deleteLine(d.path);
  if (isRemoveFile(file)) deleteFile(d.path);
  if (isRemoveFolder(file)) deleteFolder(d.path);
});

function deleteLine(filePath) {
  const file = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const lines = file.split('\n');
  const keys = lines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => line.includes(DELETE_KEYS.LINE));
  const updated = lines
    .filter((line, index) => {
      return !keys.some((key) => {
        const isKey = key.index === index;
        const isTarget = key.index + 1 === index;
        return isKey || isTarget;
      });
    })
    .join('\n');
  fs.writeFileSync(filePath, updated);
}

function deleteFile(filePath) {
  fs.unlinkSync(filePath);
}
function deleteFolder(filePath) {
  const info = path.parse(filePath);
  fs.rmSync(info.dir, { recursive: true, force: true });
}

function isRemoveLine(file) {
  return file.includes(DELETE_KEYS.LINE);
}
function isRemoveFolder(file) {
  return file.includes(DELETE_KEYS.FOLDER);
}
function isRemoveFile(file) {
  return file.includes(DELETE_KEYS.FILE);
}

function isScriptFile(name) {
  name === __filename;
}

function forEachFiles(TPath, cb, options) {
  const { recursive = true, filter = () => true } = options || {};

  const targetFiles = fs
    .readdirSync(TPath, { withFileTypes: true })
    .filter(filter);

  targetFiles.forEach((file) => {
    const filePath = path.resolve(TPath, file.name);
    if (recursive && file.isDirectory()) {
      forEachFiles(filePath, cb, { recursive, filter });
      return;
    }
    cb({ name: file.name, path: filePath });
  });
}
