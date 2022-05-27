/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const minimatch = require('minimatch');
const { convertToSnakeCase } = require('./convertToSnakeCase');

/**
 * @callback formatKeyType
 * @description 파일 이름을 받아 key 값의 포맷을 결정하는 함수입니다
 * @param {string} string - 파일 이름
 * @return {string}
 */

/**
 * 특정경로의 파일을 폴더구조에 맞추어 객체로 변환하는 함수입니다.
 * 옵션을 통해서, 포함할 파일, 포함하지 않을 파일을 조정할 수 있고,
 * 키값과, 할당될 경로의 base-path 도 커스텀 가능합니다.
 *
 * @param {string} targetPath
 * @param {Object} options
 * @param {string[]} options.includingPattern - Object 에 포함될 파일이름을 판별하는 Glob 포멧입니다. 빈 배열일시, 모든 파일을 변환합니다.
 * @param {string[]} options.ignoredPattern - Object 에 포함되지 않을 파일이름을 판별하는 Glob 포멧입니다.
 * @param {boolean} options.isRecursive - 폴더안의 폴더에 대해 함수를 재귀적으로 수행할지의 여부입니다.
 * @param {boolean} options.basePath - Object 에 value 에 할당될 경로의 basePath 입니다.
 * @param {formatKeyType} options.formatKey - Object 에 할당될 키값의 포멧을 결정하는 함수입니다.
 */
function convertFilePathToObject(targetPath, options) {
  const {
    //
    includingPattern = [],
    ignoredPattern = [],
    isRecursive = true,
    basePath = '',
    formatKey = toUpperSnakeCase,
  } = options || {};

  const result = {};

  const setFile = (TPath, obj) => {
    fs.readdirSync(TPath, { withFileTypes: true }) //
      .forEach((file) => {
        const currentPath = path.resolve(TPath, file.name);
        const fileInfo = path.parse(currentPath);

        const isTargetFile = validateFilename({
          //
          filename: fileInfo.name + fileInfo.ext,
          ignored: ignoredPattern,
          include: includingPattern,
        });

        const key = formatKey(fileInfo.name);

        if (isTargetFile && !file.isDirectory()) {
          let resolvedPath = currentPath.replace(targetPath, basePath);
          if (resolvedPath[0] === '/') resolvedPath = resolvedPath.slice(1);
          obj[key] = resolvedPath;
          return;
        }
        if (isRecursive && file.isDirectory()) {
          obj[key] = {};
          setFile(currentPath, obj[key]);
        }
      });
  };

  setFile(targetPath, result);

  return result;
}

function validateFilename({ filename, include, ignored }) {
  const isIgnored = ignored.some((path) => minimatch(filename, path));
  const isInclude = include.some((path) => minimatch(filename, path));

  if (!include?.length) return !isIgnored;
  return isInclude && !isIgnored;
}

function toUpperSnakeCase(str) {
  return convertToSnakeCase(str).toUpperCase();
}

module.exports = {
  convertFilePathToObject,
};
