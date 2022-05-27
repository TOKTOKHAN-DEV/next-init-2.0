# 스크립트 활용하기

next-init-2 에는 업무를 도와줄 유용한 스크립트가 있습니다.

## Overview

```jsx
// script
yarn run gen:api // swagger ⇒ axios-api, react-query-hook, mock-files
yarn run gen:icon // svg ⇒ chakra-icon
yarn run gen:img // 특정 경로(public)의 특정확장자(jpg,svg,png ...)를 가진 파일의 경로를 Javascript Object 로 접근 가능하게 만들어줍니다
```

```jsx
// configuration

// tok-script.config.js
exports.module = {
	 ...
  'gen:api': {
		...
    /** 조회할 스웨거의 url 혹은 file(yaml, json) 경로 입니다. 통상적으로
     * 백앤드 개발자에게 공유받은  api-swagger-url 의 '/openapi.json' 경로에 해당합니다.
     */
    swaggerSchemaUrl: process.env.NEXT_PUBLIC_API_BASE_URL + '/openapi.json',
    /** 생성될 파일들이 위치할 경로입니다. */
    outputPath: 'src/generated/apis',
  },
  'gen:icon': {
		...
    /** 조회할 svg 파일 혹은 svg 파일이 포함되어있는 폴더 입니다. */
    inputPath: 'public/icons/svg',
    /** 생성될 파일이 위치할 경로입니다.*/
    outputPath: 'src/generated/icons/MyIcons.tsx',
		...
  },
	'gen:img': {
		...
	  /** 조회할 img 파일들이 포함되어있는 폴더 입니다. */
    inputPath: 'public',
    /** 생성될 파일이 위치할 경로입니다.*/
    outputPath: 'src/generated/path/images.ts',
    /** 생성될 이미지 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에만 객체에 포함됩니다. */
    includingPattern: ['*.jpg', '*.png', '*.svg', '*.jpeg'],
		...
	  },
};
```

## Detail

- 🍔 **gen:api**

  ## gen:api

  swagger 파일, 혹은 url 을 기준으로 client 단의 api를 생성해주는 스크립트입니다.

  ## Scripts

  ```jsx
  yarn(or npm) run gen:api
  ```

  ***

  ## Cli-Options

  npm script 를 실행할 때 옵션을 넘길 수 있습니다.

  - **-i, -input:**
    조회할 스웨거의 url 혹은 file(yaml, json) 경로 입니다. 기본적으로 .env 에 설정된 api-base-url 의 openapi.json 경로를 조회합니다. ex) https://yourapibaseurl/openapi.json
  - **-o, -output:**
    생성될 파일들이 위치할 경로입니다. 기본적으로 src/generated/apis 에 생성됩니다.

  ### Example

  ```jsx
  yarn(or npm) run gen:api -- -i "https://another-url.api.net/openapi.json" -o "src/generated/another-apis"
  ```

  ℹ️  npm 스크립트에 arguments 를 전달하기 위해서는 스크립트와 옵션 사이에 “—” 가 추가되어야합니다.

  ***

  ## Output

  - **http-client:**
    스웨거 태그별로 나뉘어진 axios class 가 상속하는 부모 class 입니다.
  - **types**:
    타입관련 정의가 포함된 폴더입니다.
  - @**mocks**:
    각 태그별 mock-data 가 포함된 폴더 입니다.
  - **[swagger-tag] :**
    스웨거 각 태그명으로 폴더가 만들어지고 axios class, react-hook, query-key 가 포함되어있습니다.

  ***

  ## Configuration : tok-script.config.js

  - **swaggerSchemaUrl (string): defalut = “{{env.API_BASE_URL}}/openapi.json”**
    조회할 스웨거의 url 혹은 file(yaml, json) 경로 입니다. 통상적으로 백앤드 개발자에게 공유받은 api-swagger-url 의 '/openapi.json' 경로에 해당합니다.
  - **outputPath (string): default = src/generated/apis**
    생성될 파일들이 위치할 경로입니다.
  - **includeReactQuery (boolean):**
    생성되는 코드의 React Query 포함 여부 입니다. 해당 옵션이 false 일경우 infiniteQuery 를 포함한 모든 Query 가 생성되지 않습니다.
  - **includeReactInfiniteQuery (boolean):**
    생성되는 코드의 InfiniteQuery 포함 여부 입니다.
  - **includeMock (boolen):**
    생성되는 코드의 mock 파일 포함 여부 입니다.
  - **paginationKeywords (string[]):**
    pagination 이 가능한 Api 의 query param 키 값으로써 InfiniteQuery 를 생성하기위해 해당 키워드를 포함한 api를 조회합니다
  - **paginationKey (string):**
    다음 페이지를 구분하는 query param 의 핵심 키워드로써. paginationKeywords 를 통해 찾은 api 의 response 에서 Property "next" url 를 찾아 해당 키값을 조회 후에, useInfiniteQuery 의 nextPageParam 을 통해 다음 페이지를 위한 param을 결정하게 됩니다.

  ***

  ## Using Mock Data

  configuration 의 includeMock 이 true 일 경우 스웨거 스키마를 조회하여 output-path/@mock 경로에 생성 됩니다.
  mock data 는 총 2 가지 종류로 faker.js 를 기반으로 만들어집니다.

  1. **단순 데이터를 반환하는 함수:**
     빠르게 사용가능하고, faker.js 문서를 참고해 mock-data 를 원하는대로 변경할 수 있습니다.
  2. **네트워크 요청을 가로채어 해당 주소 요청의 결과값을 핸들링 하는 함수**:
     간단한 msw(Mock-Service-Worker) 세팅이 필요하며, 리액트 쿼리 등 네트워크 요청 테스트에 편리합니다.

  ### Example

  ```jsx
  import { rest } from 'msw';

  import faker from 'faker';

  // 단순 데이터 반환
  // 객채배열을 리턴 하는경우엔, 아래의 경우처럼 빈 객채가 작성되니 해당 목데이터를 반환해주는 함수를 찾아
  // 수정해줄 수 있습니다.
  export const getBugetSolutionListMock = () => [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({}));

  export const getBugetSolutionCreateMock = () => ({
    id: faker.datatype.number(),
    fish: faker.helpers.randomize([faker.helpers.randomize([faker.datatype.number(), null]), undefined]),
    name: faker.helpers.randomize([faker.helpers.randomize([faker.random.word(), null]), undefined]),
    buget: faker.datatype.number(),
    ownArea: faker.datatype.number(),
    isGoverLoan: faker.datatype.boolean(),
    byBuget: faker.random.word(),
    byLand: faker.random.word(),
    landUnit: faker.helpers.randomize(['P', 'M']),
    created: faker.random.word(),
  });

  // 네트워크 요청 목 데이터로 가로채어 반환
  export const getBugetSolutionMSW = () => [
    rest.get('*/v1/buget_solution', (_req, res, ctx) => {
      return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getBugetSolutionListMock()));
    }),
    rest.post('*/v1/buget_solution', (_req, res, ctx) => {
      return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getBugetSolutionCreateMock()));
    }),
  ];
  ```

  ### Mock Service Worker

  ```jsx
  // _app.tsx

  setUpMockServiceWorker({
    condition: {
      server: 'off',
      client: 'on', //  service worker 가 동작하기 위해 client 값을 on 으로 변경합니다.
    },
    handlers: [
      ...getBugetSolutionMSW(), // 생성된 msw 함수를 구조 분해 하여 넣어줍니다. handlers 가 조회하고 있는 경로의 api 만 목데이터로 반환됩니다.
      // ...getNewsMSW(), // 복수개로 가능합니다.
      // ...getPostMSW(),
      // ...getStockMSW(),
    ],
  });
  ```

- 🍔 **gen:icon**

  ## gen:icon

  svg 파일 을 기준으로 chakra-icon 을 생성해 주는 스크립트 입니다.

  ## Scripts

  ```jsx
  yarn(or npm) run gen:icon
  ```

  ***

  ## Cli-Options

  npm script 를 실행할 때 옵션을 넘길 수 있습니다.

  - **-i, -input:**
    조회할 svg 파일 혹은 폴더 경로 입니다.
  - **-o, -output:**
    생성될 파일들이 위치할 경로입니다.

  ## Example

  ```jsx
  yarn(or npm) run gen:icon -- -i "src/myicons" -o "src/generated/MyIcon.tsx"
  ```

  ℹ️  npm 스크립트에 arguments 를 전달하기 위해서는 스크립트와 옵션 사이에 “—” 가 추가되어야합니다.
  ℹ️  단일 파일로 생성되기 때문에 output-path 에는 .tsx 확장자를 가진 파일 명을 입력해주어야 합니다.

  ***

  ## Output

  ### Example

  - inputPath: public/icons/svg (Default)
    ![스크린샷 2022-03-30 오후 12.50.46.png](%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20%2040908/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.50.46.png)

  ```jsx
  // src/generated/icons/MyIcons.tsx
  import { Icon, IconProps } from '@chakra-ui/react';

  export const MoonIcon = (props: IconProps) => (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Icon>
  );
  export const SunIcon = (props: IconProps) => (
    <Icon viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={5} />
      <line x1={12} y1={1} x2={12} y2={3} />
      <line x1={12} y1={21} x2={12} y2={23} />
      <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
      <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
      <line x1={1} y1={12} x2={3} y2={12} />
      <line x1={21} y1={12} x2={23} y2={12} />
      <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
      <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
    </Icon>
  );
  ```

  ***

  ## Configuration : tok-script.config.js

  - **inputPath (string): default = public/icons/svg**
    조회할 svg 파일 혹은 svg 파일이 포함되어있는 폴더 입니다
  - **outputPath (string): default = src/generated/icons/MyIcons.tsx**
    생성될 파일들이 위치할 경로입니다.
  - **suffix (string): default = Icon**
    생성될 Chakra Component 이름 뒤에 붙을 추가 텍스트 입니다 (기본적으로 Component 는 파일 이름을 따르게 됩니다.)
  - **prefix (string):**
    생성될 Chakra Component 이름 앞에 붙을 추가 텍스트 입니다 (기본적으로 Component 는 파일 이름을 따르게 됩니다.)

- 🍔 **gen:img**
  ## gen:img
  특정 경로(public)의 특정확장자(jpg,svg,png ...)를 가진 파일의 경로를 Javascript Object 로 접근 가능하게 만들어줍니다
  ## Scripts
  ```jsx
  yarn(or npm) run gen:img
  ```
  ***
  ## Cli-Options
  npm script 를 실행할 때 옵션을 넘길 수 있습니다.
  - **-i, -input:**
    조회할 img 들이 위치한 폴더 경로 입니다.
  - **-o, -output:**
    생성될 파일이 위치할 경로입니다.
  ## Example
  ```jsx
  yarn(or npm) run gen:img -- -i "src/my-images" -o "src/generated/MyImages.ts"
  ```
  ℹ️  npm 스크립트에 arguments 를 전달하기 위해서는 스크립트와 옵션 사이에 “—” 가 추가되어야합니다.
  ℹ️  단일 파일로 생성되기 때문에 output-path 에는 .ts 확장자를 가진 파일 명을 입력해주어야 합니다.
  ***
  ## Output
  ### Example
  - inputPath: public (Default)
    ![스크린샷 2022-04-06 오후 4.39.58.png](%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20%2040908/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-06_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.39.58.png)
  ```jsx
  // src/generated/path/images.tsx
  export const MY_IMAGES = {
    ICONS: {
      120: 'icons/120.png',
      152: 'icons/152.png',
      167: 'icons/167.png',
      180: 'icons/180.png',
      192: 'icons/192.png',
      384: 'icons/384.png',
      512: 'icons/512.png',
      LOGO: 'icons/LOGO.png',
      SOCIAL: {
        APPLE: 'icons/social/apple.png',
        FACEBOOK: 'icons/social/facebook.png',
        GOOGLE: 'icons/social/google.png',
        KAKAO: 'icons/social/kakao.png',
        NAVER: 'icons/social/naver.png',
      },
      SVG: { MOON: 'icons/svg/moon.svg', SUN: 'icons/svg/sun.svg' },
    },
    IMAGES: { NEW_OG: 'images/new_og.png' },
    VERCEL: 'vercel.svg',
  };
  ```
  ***
  ## Configuration : tok-script.config.js
  - **inputPath (string): default = public**
    조회할 img 파일들이 포함되어있는 폴더 입니다
  - **outputPath (string): default = src/generated/path/images.ts**
    생성될 파일들이 위치할 경로입니다.
  - **displayName (string): default = MY_IMAGES**
    생성될 image 객체의 이름입니다
  - **basePath (string):**
    _생성될 객체의 value 에 할당될 경로의 base-path 입니다_
  - i**ncludingPattern (string[]): default = ['*.jpg', '*.png', '*.svg', '*.jpeg']**
    생성될 이미지 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에만 객체에 포함됩니다.
  - **ignoredPattern (string[]): default = ['*node_module*']**
    _제외 될 이미지 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에 객체에서 제외 됩니다._
  - **formatKey ((filename: string) ⇒ string ):**
    key 값을 결정할 포멧함수입니다. 기본적으로, SNAKE_UPPER_CASE 로 생성됩니다.
