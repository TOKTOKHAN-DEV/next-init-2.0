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
    includingPattern: ['*.jpg', '*.png', '*.svg', '*.jpeg'],
    /** 제외 될 이미지 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에 객체에서 제외 됩니다. */
    ignoredPattern: ['*node_module*'],
    /** key 값을 결정할 포멧함수입니다. 기본적으로, SNAKE_UPPER_CASE 로 생성됩니다. */
    // formatKey: (filename) => str
  },
  'gen:source': {
    page: {
      /** 컴포넌트 생성시 Next Head 의 <title> 태그에 들어가게될 앱 이름입니다. */
      appName: process.env.NEXT_PUBLIC_APP_NAME || '똑똑한 개발자',
    },
  },
  'w:start': {
    /** 이슈 생성 권한을 가진 github 토큰입니다. 개인 계정 에서 발급가능합니다 */
    token: process.env.GITHUB_TOKEN,
    /**  해당 프로젝트의 github repository 이름입니다. 이슈 생성시 해당 이름으로 접근하기에, 정확히 기입해야 합니다 */
    repoName: process.env.GITHUB_REPO,
    /**  해당 프로젝트 repository 의 owner 로 써. organization 이름입니다 */
    owner: 'TOKTOKHAN-DEV',
    /**  이슈 생성시 이슈를 추적할 맴버의 아이디 목록 입니다 */
    assignees: ['ldu1020'],
    /**  이슈 생성시 이슈에 달릴 수 있는 이슈 label 의 목록입니다 */
    labels: ['bug', 'feature'],
  },
  'gen:font': {
    /** 조회할 font 파일들이 포함되어있는 폴더 입니다. */
    inputPath: 'public/fonts',
    /** 생성될 파일이 위치할 경로입니다.*/
    outputPath: 'src/generated/fonts/fonts.tsx',
    /** 생성될 font 객체의 이름입니다 */
    displayName: 'FONTS',
    /** 생성될 객체의 value 에 할당될 경로의 base-path 입니다 */
    basePath: '',
    /** 생성될 폰트 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에만 객체에 포함됩니다.
     * (default: ['*.otf', '*.ttf', '*.woff', '*.woff2'])
     */
    includingPattern: ['*.otf', '*.ttf', '*.woff', '*.woff2'],
    /** 제외 될 폰트 파일을 판별하는 패턴으로써, 파일이름이 패턴과 일치할 경우에 객체에서 제외 됩니다.
     * (default: ['*node_module*'])
     */
    ignoredPattern: ['*node_module*'],
  },
};
