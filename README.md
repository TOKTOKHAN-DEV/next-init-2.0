# Next.js starter2 [![](https://img.shields.io/badge/node-v19+-blue)](https://nodejs.org/en/) [![](https://img.shields.io/badge/yarn-v1.22+-green.svg)](https://yarnpkg.com/)

똑똑한개발자에서 진행하는 프로젝트의 스타터 프로젝트 next-init 2.0입니다.

# 🚀 Quick Start

Use this template 버튼을 활용해서 프로젝트의 repository를 생성해주세요.

# Scripts

프로젝트 시작 스크립트 부터, 업무를 위한 유용한 스크립트에 대한 설명입니다. 패키지 매니져는 yarn 을 사용합니다.

### 개발 모드 시작하기

```
yarn run dev
```

### 프로덕션 모드 시작하기

개발 모드와 다르게, build 된 파일로 프로젝트를 시작합니다. 아래와 같은 차이점이 있습니다.

- 번들된 파일로 진행하기 때문에, 소스 파일 용량 최적화
- fast-refresh 불가능
- NODE_ENV 환경 변수 "production"

```
yarn run start
```

### Build

보통 배포 과정에서 하게되는 build 를 local 환경에서 실행 할 수 있습니다.
빌드 에러를 조기에 확인할수 있습니다.

```
yarn run build
```

### Commit

똑똑한 개발자에는 커밋 컨벤션이 존재합니다. 해당 컨벤션에 맞게 커밋메시지 작성을 도와주는 스크립트 입니다.

```
yarn run commit
```

### Lint

lint 와 prettier 설정에 기반하여 파일을 검사합니다.
lint:staged 경우 lint-stage 설정에 기반하여 스테이징된 파일만 검사합니다.

```
yarn run lint
```

```
yarn run lint:staged
```

### Format

prettier 설정에 기반하여 파일수정합니다.

```
yarn run format
```

### Clean-Up

@delete:line 와 같은 주석이 포함된 파일이나, 라인을 제거해줍니다. 해당 주석은 예시 파일이나, 개발시에만 필요한 파일에 포함되어 있습니다.

- 주석 종류: @delete:line, @delete:file, @delete:folder

```
yarn run clean-up
```

### Generate

#### Theme

Chakra Theme 설정사항을 조회하여 타입정의를 생성합니다.
custom color 와 같은 테마 적용시 자동완성을 위하여 사용을 권장합니다.

생성된 파일은 theme:open 으로 확인이 가능합니다.

```
yarn run theme
```

```
yarn run theme:open
```

> theme:open 은 code 커멘드가 실행환경에 설치 되어 있어야 합니다.
> cmd + shift + p 로 개발자 콘솔을 열고, code 를 검색해 code 명령어를 설치해 주세요

### Tokript

업무를 도와주는 사내 cli-tool 입니다.
아이콘, 이미지, 폰트, api, page template 등 다양한 작업에 도움을 줍니다.

- [Tokript npm](https://www.npmjs.com/package/tokript)

#### Source

page, dynamic-page, api 에 대한 탬플릿을 생성해 줍니다.

```
yarn run gen:source
```

#### Api

swagger 를 조회하여 api 함수와 schema type, react-query 의 query,mutation 을 생성해 줍니다.

```
yarn run gen:api
```

#### Icon

asset 폴더를 조회하여 svg 파일을 사용가능한 chakra-icon 컴포넌트로 생성해줍니다.

```
yarn run gen:icon
```

> color props 로 제어를 해야한다면, svg 파일의 fill 이나 stroke 의 컬러를 "currentColor" 로 변경후 실행 해주세요

#### Image

asset 폴더를 조회하여 img 파일경로를 담은 Object 를 생성해줍니다.

```
yarn run gen:img
```

#### Font

asset 폴더를 조회하여 font 파일을 next-local 폰트로 생성해줍니다.

```
yarn run gen:font
```

#### Icon

asset 폴더를 조회하여 svg 파일을 사용가능한 chakra-icon 컴포넌트로 생성해줍니다.

```
yarn run gen:icon
```

#### Route

pages 폴더를 조회하여 route 경로를 담은 오프젝트를 생성해줍니다.

```
yarn run gen:route
```

#### Webp

asset 폴더를 조회하여, png, jpg 확장자를 webp 로 변환해 줍니다. 변환하여 사용하기전에, next/image 사용을 고민해주세요. 다른 확장자를 사용하더라도 자동으로 webp 변환 해줍니다.

```
yarn run convert:webp
```

### Test

src 폴더 안에 있는 모든 {filename}.test.ts 을 테스트 합니다. 와치 모드에 경우 항상 실행되어, 변경사항을 즉시 감지 하고, 변경사항이 있는 테스트만 테스트 합니다.

```
yarn run test
```

```
yarn run test:watch
```

# Git Hooks, Life Cycle Script

### pre-commit

commit 이 실행되기 전에 실행되는 스크립트입니다.
lint-stage 는 스테이징된 파일에 대해 next-lint 와, prettier --fix 스크립트를 순차적으로 실행합니다.
commit 로그를 통해 특정 commit 으로 언제든 돌아갈 수 있으므로 commit 마다의 무결성을 위해 실행합니다.
.husky, .lintstagedrc 에서 관리합니다.

```
npx lint-staged
```

### pre-push

프로젝트가 github remote 저장소에 push 되기 전에 실행되는 스크립트입니다. push 는 배포와 직결 될 수 있어서, push 되기전 local 환경에서 미리 build 를 함으로써 문제를 조기 파악하기 위함 입니다.
.husky 폴더에서 관리합니다.

```
npm run build
```

### post-install

패키지를 install 한 후 실행되는 스크립트 입니다.
chakra theme 타입 정의를 생성합니다.
package.json 에서 관리합니다.

```
yarn run theme
```

### prepare

패키지를 인수 없이 install 할 시 실행하는 스크립트입니다. (전체 페키지 install)
husky 를 세팅하고, ls-engines 를 통해 유효한 node 버젼을 체크합니다.
package.json 에서 관리합니다.

```
husky install && node_modules/.bin/ls-engines
```

# 📁 Folder Structure

폴더 구성을 확인해보세요.

### Root directory layout

루트 폴더의 구조입니다.

    ├── public                  # static assets
    ├── src
        ├── apis                # api 정의
        ├── components          # 공용 컴포넌트
        ├── configs             # 앱 설정 파일
        ├── constants           # 상수, 상수 집합
        ├── containers          # page level component
        ├── contexts            # react context 집합
        ├── generated           # 스크립트로 생성, 관리되는 파일
        ├── hocs                # 고차 컴포넌트
        ├── hooks               # 공용 hooks
        ├── pages               # 파일명에 기반한 route
        ├── scripts             # 공용 script
        ├── types               # 공용 types
        ├── utils               # 공용 utils
    ├── README.md
    └── ...

### Public

public 폴더를 사용하여 주로 사용하는 fonts, image, svg 와 같은 정적인 파일들을 client 에 제공할 수 있습니다. url 로 접근이 가능하므로, page 라우트와 겹치지 않게 주의해주세요

    public
    ├── fonts
    │   └── pretendard
    │    ├── ...
    │    ├── Pretendard-Bold.woff
    │    ├── Pretendard-Thin.woff
    │    └── ...
    ├── icons
    │   └── svg
    │    ├── ...
    │    ├── arrow-left.svg
    │    ├── arrow-right.svg
    │    └── ...
    ├── images
    │   └── new_og.png
    └── ...

### Configs

앱 내의 전반적인 설정을 관리하는 폴더 입니다.

    configs
    ├── axios                   # instance, interceptor 등
    ├── env.ts                  # 환경 변수
    ├── react-query.ts          # 라이브러리 전역 옵션 설정 등
    ├── theme                   # global css, theming 등
    └── ...

### Apis

네트워크 통신 관련 api 를 정의하는 폴더 입니다.

    apis
    ├── example
    │   ├── ExampleApi.mutation.ts      # react-query mutation 집합
    │   ├── ExampleApi.query.ts         # react-query query 집합
    │   ├── ExampleApi.ts               # api 정의
    │   └── types                       # 요청, 응답 스키마 정의
    │       ├── dto
    │       │   ├── create-example-dto.ts
    │       │   ├── get-example-dto.ts
    │       │   └── update-example-dto.ts
    │       └── model
    │           └── example.ts
    └── ...

### Pages

각 폴더구조와, 파일명은 routing 과 직결 됩니다.

    pages
    ├── index.tsx               # main page
    ├── \_app.tsx               # 각 페이지의 공용 initializing 담당
    ├── \_document.tsx          # meta tag 와 같은 head 작업
    ├── auth                    # page routing
    │   └── index.tsx
    ├── login
    │   └── index.tsx
    └── ...

### Containers

pages 의 폴더 구조는 라우팅에 직결되기 때문에, 페이지 레벨의 컴포넌트와 하위 정의들을 container 에서 관리힙니다.

    containers
    ├── Auth
    │   ├── components
    │   │   └── ...
    │   ├── Auth.tsx
    │   └── index.ts
    ├── Home
    │   ├── Home.tsx
    │   └── index.ts
    └── ...

### Generated

스크립트로 생성되고 관리되는 파일의 집합입니다.
스크립트로 생성되는 파일은 스크립트에 의해서 덮어씌워 질 수 있기 때문에 수정시
주의가 필요합니다.

    generated
    ├── apis
    ├── fonts
    ├── icons
    └── ...

### Components

공용 컴포넌트를 정의하는 폴더 입니다.
@ 이 붙은 폴더는 특정 주제의 컴포넌트 집합입니다.

    components
    ├── @Alert                  # Alert 집합
    │   ├── ...
    │   ├── AlertBasis.tsx
    │   ├── ControlledConfirmAlert.tsx
    │   └── ...
    ├── AnyComponent.tsx
    └── ...

### Hooks

공용 hooks 의 집합 폴더 입니다.

    hooks
    ├── ...
    ├── useSyncWebStorage.ts
    └── ...

### Constants

상수 및, 상수 집합 폴더입니다.

    constants
    ├── layout.ts
    ├── outer-links.ts
    ├── routes.ts
    └── ...

### Contexts

React Context 의 집합 폴더입니다.
컴포넌트 및 hooks 의 순수성을 위해서 되도록 전역과, Page 레벨의 정의를 권장합니다.

    contexts
    ├── global                  # 전역
    └── pages                   # page
        └── home

### Contexts

공용 고차 컴포넌트 집합 폴더 입니다.

    hocs
    ├── withAppProvider.tsx
    ├── withAuthGuard.tsx
    ├── withHomePageProvider.tsx
    ├── withUnAuthGuard.tsx
    └── ...

### Types

공용 util 함수를 정의하는 폴더입니다.
어떤 타입정의가 있는지 한눈에 확인 하기 위해, 1 정의 1 파일로 구성해주세요

    types
    ├── global.ts               # global this(window)
    ├── module                  # 라이브러리 관련 타입정의
    │   ├── chakra
    │   ├── react-query
    │   └── ...
    ├── static                  # 정적인 타입 정의
    │   ├── fn.ts
    │   ├── obj.ts
    │   └── ...
    └── utility                 # utility 성 타입 정의 (주로 Generic)
        ├── async-fn-return.ts
        ├── item-of.ts
        ├── nullable.ts
        └── ...

### Utils

공용 util 함수를 정의하는 폴더입니다.
어떤 함수가 있는지 한눈에 확인 하기 위해, 1 정의 1 파일로 구성해주세요.
되도록 테스트 코드를 추가해주세요.

### Sub directory layout

파일 하나의 내용이 길어진다면 하위 폴더로 파일 분리를 권장합니다.
파일 분리시의 폴더 구조 입니다. 각 폴더는 선택적으로 생성합니다.
각 폴더의 역할은 위의 명시된 폴더별 설명과 동일 합니다.

index 파일이 필요한 이유는 이 컴포넌트가 하나의 모듈임을 명시적으로 나타내기 위함입니다.
js 에선 index file 사용시, 모듈 탐색시, index 파일을 우선적으로 탐색하기 때문에
SomeComponent/index.ts 가 아닌 SomeComponent 로 접근이 가능합니다.

    SomeComponent
    ├── __test__
    ├── components
    ├── hooks
    ├── constants
    ├── utils
    ├── types
    ├── SomeComponent.tsx       # 파일 본문
    └── index.ts                # export 를 담당
