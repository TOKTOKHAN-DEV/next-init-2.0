/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

exports.module = {
  'gen:icon': {
    /** 조회할 svg 파일 혹은 svg 파일이 포함되어있는 폴더 입니다. */
    inputPath: 'public/icons/svg',
    /** 생성될 파일이 위치할 경로입니다.*/
    outputPath: 'src/generated/icons/MyIcons.tsx',
    /** 생성될 Chakra Component 이름 뒤에 붙을 추가 텍스트 입니다 (기본적으로 Component 는 파일 이름을 따르게 됩니다.) */
    suffix: 'Icon',
    /** 생성될 Chakra Component 이름 앞에 붙을 추가 텍스트 입니다 (기본적으로 Component 는 파일 이름을 따르게 됩니다.) */
    prefix: '',
  },
  'gen:img': {
    /** 조회할 img 파일들이 포함되어있는 폴더 입니다. */
    inputPath: 'public',
    /** 생성될 파일이 위치할 경로입니다.*/
    outputPath: 'src/generated/path/images.ts',
    /** 생성될 image 객체의 이름입니다 */
    displayName: 'MY_IMAGES',
    /** 생성될 객체의 value 에 할당될 경로의 base-path 입니다 */
    basePath: '/',
    /** 생성될 이미지 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에만 객체에 포함됩니다. */
    includingPattern: ['*.jpg', '*.png', '*.svg', '*.jpeg', '*.webp'],
    /** 제외 될 이미지 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에 객체에서 제외 됩니다. */
    ignoredPattern: ['*node_module*'],
    /** key 값을 결정할 포멧함수입니다. 기본적으로, SNAKE_UPPER_CASE 로 생성됩니다. */
    // formatKey: (filename) => str
  },
  'gen:route': {
    /** 조회할 page 파일들이 포함되어있는 폴더 입니다. */
    inputPath: 'src/pages',
    /** 생성될 파일이 위치할 경로입니다.*/
    outputPath: 'src/generated/path/routes.ts',
    /** 생성될 route 객체의 이름입니다 */
    displayName: 'ROUTES',
    /** 포함할 route 의 glob 패턴입니다. */
    includingPattern: [],
    /** 제외될 route 의 glob 패턴입니다. */
    ignoredPattern: ['_app.tsx', '_document.tsx', '_error.tsx', 'api/**'],
  },
  'gen:source': {
    page: {
      /** 컴포넌트 생성시 Next Head 의 <title> 태그에 들어가게될 앱 이름입니다. */
      appName: process.env.NEXT_PUBLIC_APP_NAME || '똑똑한 개발자',
    },
  },
  'gen:font': {
    /** 조회할 font 파일들이 포함되어있는 폴더 입니다. */
    inputPath: 'public/fonts',
    /** 생성될 파일이 위치할 경로입니다.*/
    outputPath: 'src/generated/fonts/next-fonts.ts',
    /** 생성될 폰트 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에만 객체에 포함됩니다.
     * (default: ['*.otf', '*.ttf', '*.woff', '*.woff2'])
     */
    includingPattern: ['*.otf', '*.ttf', '*.woff', '*.woff2'],
    /** 제외 될 폰트 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에 객체에서 제외 됩니다.
     * (default: ['*node_module*'])
     */
    ignoredPattern: ['*node_module*'],
  },
  'convert:webp': {
    /** 조회할 img 파일들이 포함되어있는 폴더 입니다. */
    inputPath: 'public/images',
    /** 생성될 파일이 위치할 경로입니다.*/
    outputPath: 'public/webp',
    /** 제외 될 이미지 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에 제외 됩니다. */
    ignoredPattern: ['*.svg'],
    /** 생성될 이미지 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에만 생성됩니다. */
    includingPattern: ['*.png', '*.jpeg', '*.jpg', '*.webp'],
    /** 변환되는 이미지의 해상도를 결정합니다. */
    quality: 80,
  },
  'gen:api': {
    /** 조회할 스웨거의 url 혹은 file(yaml, json) 경로 입니다. 통상적으로
     * 백앤드 개발자에게 공유받은  api-swagger-url 의 '/openapi.json' 경로에 해당합니다.
     */
    swaggerSchemaUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/schema/`,
    /** 생성될 파일들이 위치할 경로입니다. */
    outputPath: 'src/generated/swagger',
    /** 생성되는 코드의 React Query 포함 여부 입니다.
     *  해당 옵션이 false 일경우 infiniteQuery 를 포함한 모든 Query 가 생성되지 않습니다. */
    includeReactQuery: true,
    /** 생성되는 코드의 InfiniteQuery 포함 여부 입니다. */
    includeReactInfiniteQuery: true,
    /** Api 의 axios 요청 instance 주소입니다 */
    axiosInstancePath: '@/configs/axios/instance',
    /**
     * infiniteQuery 를 생성할 함수 필터입니다.
     * - keywords:  api 의 queryParams key 에 keywords 가 포함되어 있는 항목만 생성됩니다. 키워드 배열은 AND 연산으로써 사용됩니다.
     * ex) [limit, offset] === limit && offset
     * - nextkey : InfiniteQuery 의 nextPage 와 nextPageParam 을 구하는 함수를 작성하기 위해 사용됩니다.
     *
     *  getNextPage 와 getNextPagePram 을 커스텀 하고 싶다면 넘겨지는 객체에 포함시켜 주세요,
     */
    paginations: [
      {
        keywords: ['cursor'],
        nextKey: 'cursor',
        /**
         * @type undefined | string | (param: {apiInstanceName: string; functionName: string, pagination: { keywords: string[], nextKey: string }}) => string
         */
        // getNextPage: "",
        /**
         * @type undefined | string | (param: {apiInstanceName: string; functionName: string, pagination: { keywords: string[], nextKey: string }}) => string
         */
        // getNextPageParam: ""
      },
    ],
  },
};
