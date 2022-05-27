/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const ignored = ['node_modules', '.next'];

/**
 * @callback forEachFilesCallbackType
 * @param {fs.Dirent} data
 * @param {number} [index]
 * @param {string} currentPath
 */

/**
 * @param {string} targetPath
 * @param {forEachFilesCallbackType} callback
 * @param {Object} options
 * @param {string[]} options.ignoredFiles
 * @param {boolean} options.isRecursive
 */
const forEachFiles = (targetPath, callback, options) => {
  const { ignoredFiles = ignored, isRecursive = false } = options || {};
  const ignoredRgx = new RegExp(
    ignoredFiles.map((str) => `(${str})`).join('|'),
  );

  const setFile = (TPath) => {
    fs.readdirSync(TPath, { withFileTypes: true }) //
      .forEach((file, index) => {
        const isIgnored = ignoredRgx.test(file.name);
        if (isIgnored) return;
        const currentPath = path.resolve(TPath, file.name);
        callback(file, index, currentPath);

        if (file.isDirectory() && isRecursive) {
          const currentPath = path.resolve(TPath, file.name);
          setFile(currentPath);
        }
      });
  };

  setFile(targetPath);
};

module.exports = { forEachFiles };
