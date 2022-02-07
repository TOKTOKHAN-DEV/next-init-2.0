### 폴더 구조

.
├── ...
├── src
│ ├── target : swagger 파일이 들어가는 폴더 입니다.
│ ├── init.js: orval에게 넘겨줄 타겟 swagger 파일을 정의하고, 폴더를 생성합니다.
│ └── orval.config.js: orval 실행에 필요한 설정파일입니다.
└── ...

### 실행 방법

- **Script**

```
 npm(or yarn) run gen:api
 // === "orval --config swagger/orval.config.js "
```

- **By swagger-file**

> 1. 해당 스웨거 홈페이지 상단의 제목 밑의 링크클릭
> 2. 다운로드된 파일을 "swagger/target" 폴더에 넣어주기
> 3. 스크립트 실행

- **By swagger-url**

> 1.  해당 스웨거 홈페이지의 swagger link 찾기 (json or yaml 링크)
>     // swagger 자체의 링크가 아님을 주의하기
> 2.  "swagger/orval.config.js" SWAGGER_INFO_URL 값 수정
> 3.  스크립트 실행

- **output-path** : generated/api/{swagger-name}

### Mock 데이터 사용하기

스크립트 실행 후, 성공적으로 파일이 생성되면,
output-path에 target 파일과 ".msw" 확장자를 가진 mock 데이터 관련 파일이 생성됩니다.
".msw" 확장자에서 mock 데이터를 사용할 수 있습니다. faker로 구성되어 있으며, 수정 가능합니다.

- 단순 mock 데이터 사용시
  > : ".msw" 에서 "get~Mock" 으로 생성된 함수를 사용
- 네트워크 요청응답을 mock 데이터로 대신하고 싶을시(MSW 사용)
  > :".msw"에서 get~Msw 으로 생성된 함수의 리턴값을 setUpMockServiceWorker 함수의 인자로 넣어 줌
  >
  > - example
  >
  > ```
  >  // _app.tsx
  >  ...
  > setUpMockServiceWorker({
  >   handlers: [
  >    ...getNoticeMSW(),
  >    ...getNewsMSW(),
  >    ...getPostMSW(),
  >    ...getStockMSW(),
  >   ],
  > });
  >  ...
  > ```

### 그밖의 설정 사항

- .env 에 api base-url을 설정해주세요 // 참고: apis/axios/customInstance.ts

### 참고

orval: https://orval.dev/reference/configuration/overview
prompt: https://www.npmjs.com/package/enquirer
faker : https://github.com/faker-js/faker
