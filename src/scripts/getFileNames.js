/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const ignored = ['node_modules', '.next'];

const getFileNames = (targetPath, options) => {
  const { ignoredFiles = ignored, isRecursive = false, forEachFile } = options || {};

  const ignoredRgx = new RegExp(ignoredFiles.map((str) => `(${str})`).join('|'));
  const fileSet = new Set();

  const setFile = (TPath) => {
    fs.readdirSync(TPath, { withFileTypes: true }) //
      .forEach((file) => {
        const isIgnored = ignoredRgx.test(file.name);
        if (isIgnored) return;

        fileSet.add(file.name);
        forEachFile?.(file);

        if (file.isDirectory() && isRecursive) {
          const pathOnDirectory = path.resolve(TPath, file.name);
          setFile(pathOnDirectory);
        }
      });
  };

  setFile(targetPath);
  return Array.from(fileSet);
};

module.exports = { getFileNames };
