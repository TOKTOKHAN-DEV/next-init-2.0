/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @description
 * run: yarn run clean-up
 * marking 된  파일을 자동으로 지워주는 스크립트입니다.
 * 아래 주석으로 marking 됩니다
 * - 라인 지우기: @delete:line : 마킹된 다음 라인의 코드를 지웁니다.
 * - 파일 지우기: @delete:file : 마킹된 파일을 지웁니다.
 * - 폴더 지우기: @delete:folder : 마킹된 파일의 부모 폴더를 지웁니다.
 */

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
  if (!fs.existsSync(d.path)) return;
  const file = fs.readFileSync(d.path, { encoding: 'utf-8' });
  if (isRemoveLine(file)) deleteLine(d.path);
  if (isRemoveFile(file)) deleteFile(d.path);
  if (isRemoveFolder(file)) deleteFolder(d.path);
});

function deleteLine(filePath) {
  if (!fs.existsSync(filePath)) return;
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
  if (!fs.existsSync(filePath)) return;
  fs.unlinkSync(filePath);
}
function deleteFolder(filePath) {
  if (!fs.existsSync(filePath)) return;
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
  return name === __filename;
}

function forEachFiles(TPath, cb, options) {
  if (!fs.existsSync(TPath)) return;
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
