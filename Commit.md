# Commit Convention

- feat: all changes that introduce completely new code or new features
- fix: changes that fix a bug (ideally you will additionally reference an issue if present)
- refactor: any code related change that is not a fix nor a feature
- style: all changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- perf: all changes that improves performance
- docs: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- build: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- test: all changes regarding tests (adding new tests or changing existing ones)
- ci: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
- chore: all changes to the repository that do not fit into any of the above categories

# Commitizen

#### commit 시 위의 컨벤션 사용을 강제하는 라이브러리 입니다.

### Description

- script : yarn run commit
- config_path: '/changelog.config.js'

### Scope 추가하기

- /changelog.config.js 의 scopes:[] 란에 추가할 수 있습니다.

# Reference

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [git-cz](https://www.npmjs.com/package/git-cz)
