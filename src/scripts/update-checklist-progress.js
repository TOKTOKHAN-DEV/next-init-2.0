/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const CHECK_LIST_MD_PATH = path.resolve(process.cwd(), 'CHECKLIST.md');
const PROGRESS_BAR_URL = 'https://geps.dev/progress';

function main() {
  const md = fs.readFileSync(CHECK_LIST_MD_PATH, { encoding: 'utf-8' });
  const parsedCheckList = md.split('\n').reduce(reducerForCheckList, []);

  const basicList = parsedCheckList
    .filter((line) => line.type === 'basic')
    .flatMap((item) => item.lines)
    .filter((line) => !hasAdvancedFlag(line));

  const advancedList = [
    ...parsedCheckList
      .filter((line) => line.type === 'basic')
      .flatMap((item) => item.lines)
      .filter(hasAdvancedFlag),
    ...parsedCheckList
      .filter((line) => line.type === 'advanced')
      .flatMap((item) => item.lines),
  ];

  const basicProgress = getProgressOfCheckList(basicList);
  const advancedProgress = getProgressOfCheckList(advancedList);

  loggerCheckList('Basic', basicProgress);
  loggerCheckList('Advanced', advancedProgress);

  const updated = md
    .split('\n')
    .map((line) => {
      if (isBasicProgressLine(line)) {
        return `![progress](${PROGRESS_BAR_URL}/${basicProgress.progress})`;
      }
      if (isAdvancedProgressLine(line)) {
        return `![advanced-progress](${PROGRESS_BAR_URL}/${advancedProgress.progress})`;
      }
      return line;
    })
    .join('\n');

  fs.writeFileSync(CHECK_LIST_MD_PATH, updated);
}

main();

function reducerForCheckList(prev, line) {
  const next = [...prev];
  if (isSectionStart(line)) {
    next.push({
      title: line,
      type: hasAdvancedFlag(line) ? 'advanced' : 'basic',
      lines: [],
    });
  }
  if (isCheckBox(line)) {
    next[next.length - 1].lines.push(line);
  }
  return next;
}

function getProgressOfCheckList(checkList) {
  const total = checkList.length;
  const checked = checkList.filter(isChecked).length;
  const progress = Math.round((checked / total) * 100);
  return {
    total,
    checked,
    progress,
  };
}

function loggerCheckList(title, info) {
  console.log(`
  ${title}
  - Total: ${info.total}
  - Checked: ${info.checked}
  - Progress: ${info.progress}%
  `);
}

function isSectionStart(line) {
  return line.includes('**✅');
}

function isBasicProgressLine(line) {
  return line.includes(PROGRESS_BAR_URL) && line.includes('[progress]');
}

function isAdvancedProgressLine(line) {
  return (
    line.includes(PROGRESS_BAR_URL) && line.includes('[advanced-progress]')
  );
}

function isChecked(line) {
  return line.includes('[x]');
}

function isCheckBox(line) {
  const checkboxRgx = /- \[(x|\s)\].*/g;
  return checkboxRgx.test(line);
}

function hasAdvancedFlag(line) {
  const flagRgx = /\*\*.*Advanced.*\*\*/g;
  return flagRgx.test(line);
}
