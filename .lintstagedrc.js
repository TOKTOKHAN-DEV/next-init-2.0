const path = require('path');

const checkType = () => 'bash -c tsc --skipLibCheck --noEmit';

const checkLint = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const checkPrettier = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

module.exports = {
  '*.{ts,tsx,js,jsx}': [checkType, checkLint, checkPrettier],
};
