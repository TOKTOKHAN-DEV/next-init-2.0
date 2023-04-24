module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  importOrder: [
    '^react$', // react
    '^next.*', // next 로 시작하는 경로
    '^(react|lodash|msw|chakra|^@(?!chakra)[^/]|^[^./]*$).*', // 외부 라이브러리 경로
    '^@chakra.*', // @charka 로 시작하는 경로
    '^@/(apis|swagger).*', // api 관련
    '^@/(contexts|hooks|hocs|components|containers).*', // react 관련 선언
    '^@/.*', // 나머지 전역 레벨로 관리되는 경로
    '^[.].*/.*', //  상대 경로
    '.*', // 나머지 경로
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
