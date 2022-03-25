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
- config: "{{project_root_path}}/.env"
- output-path :
  -apis: "{{project_root_path}}/generated/apis"
  -mock: "{{project_root_path}}/generated/mock"

\*more info : "./template/README.md"
