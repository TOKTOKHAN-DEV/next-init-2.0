### 폴더 구조

.
├── ...
├── src
│ ├── swagger : swagger 파일이 들어가는 폴더 입니다.
│ ├── template: 사용되는 eta template 들을 모아놓은 폴더 입니다.
│ └── ...
└── ...

### 실행 방법

- script: npm(or yarn) run gen:api
- output-path : generated/api/{{swagger-name}}

### 그밖의 설정 사항

- .env 에 api base-url을 설정해주세요
- 참고: {{output-path}}/http-client/index.ts
