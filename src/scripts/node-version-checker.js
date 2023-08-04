// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

// 현재 내 process의 노드 버전
const currentVersion = process.versions.node;

fs.readFile('package.json', 'utf8', (err, data) => {
  // package.json 파일이 있는지 확인
  if (err) {
    styledConsole(`Failed to read package.json: ${err}`, 'red');
    process.exit(1);
  }

  try {
    // package.json 파싱
    const packageJson = JSON.parse(data);
    // package.json에 engines 필드가 있는지 확인
    if (!packageJson.engines || !packageJson.engines.node) {
      styledConsole('No "engines" field found in package.json.', 'red');
      process.exit(1);
    }
    // package.json에 명시된 노드 버전 가져오기
    const requiredVersion = packageJson.engines.node;
    // 현재 노드 버전과 명시된 노드 버전 비교
    if (compareVersions(currentVersion, requiredVersion)) {
      styledConsole(
        `Required Node.js version is ${requiredVersion}, but current version is ${currentVersion}`,
        'red',
      );
      process.exit(1);
    }
    // 버전 체크 통과!
    styledConsole(
      'Node.js version check passed. Script execution successful.',
      'green',
    );
    styledConsole('----------------------------------------------------------');
  } catch (error) {
    // package.json 파싱 에러
    styledConsole(`Error parsing package.json: ${error}`, 'red');
    process.exit(1);
  }
});

/**
 * 두 버전 비교 유틸함수
 * @param { string } current 현재 내가 사용하고 있는 버전
 * @param { string } required 프로젝트에서 요구하고 있는 버전
 * @returns { boolean }
 */
function compareVersions(current, required) {
  const reg = /[\\{\\}\\[\]\\/?,;:|\\)*~`!^\-_+<>@\\#$%&\\\\=\\(\\'\\"]/gi;
  const currentArr = current.replace(reg, '').split('.').map(Number);
  const requiredArr = required.replace(reg, '').split('.').map(Number);

  for (let i = 0; i < Math.max(currentArr.length, requiredArr.length); i++) {
    const currentVer = currentArr[i] || 0;
    const requiredVer = requiredArr[i] || 0;
    return currentVer < requiredVer;
  }
}

/**
 * 컬러 콘솔 유틸함수
 * @param { string } text
 * @param { 'red' | 'yellow' | 'green' | undefined } type
 */
function styledConsole(text, type) {
  switch (type) {
    case 'red':
      return console.log('\x1b[31m%s', text);
    case 'yellow':
      return console.log('\x1b[33m%s', text);
    case 'green':
      return console.log('\x1b[32m%s', text);
    default:
      return console.log(text);
  }
}
