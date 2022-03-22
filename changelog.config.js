/* eslint-disable @typescript-eslint/no-var-requires */
const { getFileNames } = require('./scripts/getFileNames');
const rootPath = process.env.PWD;

const files = getFileNames(rootPath, {
  isRecursive: true,
});

const scopes = {
  skip: [''],
  files,
  etc: ['commitizen', 'header'],
};

module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'issues'],
  scopes: [...scopes.skip, ...scopes.files, ...scopes.etc],
  types: {
    chore: {
      description: '자잘한 수정',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI 설정 파일 수정',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: '문서 관련',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '새로운 기능, 페이지 추가',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: '버그 수정',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: '성능 개선',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '코드 리팩토링',
      emoji: '💡',
      value: 'refactor',
    },
    style: {
      description: '스타일링, 마크업, 들여쓰기 등',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: '테스트 관련',
      emoji: '💍',
      value: 'test',
    },
  },
};
