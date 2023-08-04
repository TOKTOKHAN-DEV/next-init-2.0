module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['deploy', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'test'],
    ],
    'subject-case': [0],
    'header-max-length': [0],
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
  },
  helpUrl: `
  tokplate는 conventional commit 규칙을 따릅니다:
  https://www.conventionalcommits.org/en/v1.0.0/#summary
     
      [type(optional-scope): subject]
      [optional body]

  * tokript를 사용하면 수월하게 작성할 수 있습니다. -> yarn commit
  * pre-commit hooks를 우회하려면 'git commit --no-verify' 명령을 사용하세요. 
  `,
};
