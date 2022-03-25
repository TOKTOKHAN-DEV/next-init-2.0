module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 160,
  importOrder: [
    '^(react|next).*',
    '^((?!/).)*$', // target: 외부 라이브러리 (문자열에 "/"" 가 포함되지 않을때)
    '^@chakra.*',
    '^(src/apis|src/features|src/contexts).*',
    '^src/components.*',
    '^[.].*/.*', //  target: 상대 경로 ( "." 로 시작하고 "/"" 가 포함되어 있을 때)
    '.*',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
