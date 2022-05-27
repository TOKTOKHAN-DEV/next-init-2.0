### 폴더 구조

    .
    ├── ...
    ├── src
    │ ├── swagger : swagger 파일이 들어가는 폴더 입니다.
    │ ├── template: 사용되는 eta template 들을 모아놓은 폴더 입니다.
    │ └── ...
    └── ...

### 실행 방법

기본적으로 .env 의 'API_BASE_URL' 과 'SWAGGER_SCHEMA_PATH_NAME' 를 조회하고,
src/generated/apis 경로에 생성 됩니다.

```bash
npm(or yarn) run gen:api

// 생성되는 위치와 타켓 Swagger는 arguments 를 넘겨주어 변경할 수 있습니다.

npm run gen:apis -- -o myFolder/myApis
npm run gen:apis -- -i https://myapi.co.kr/openapi.json

// yaml, json  파일을 넘길 수 있습니다.
npm run gen:apis -- -i swagger/info.yaml

```

### options

- -i, -input : Swagger url, Swagger file(yaml,json)
- -o, -output : 생성 경로 위치

\*more info : "./template/README.md"
