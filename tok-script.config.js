/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

exports.module = {
  'gen:api': {
    /** 조회할 스웨거의 url 혹은 file(yaml, json) 경로 입니다. 통상적으로
     * 백앤드 개발자에게 공유받은  api-swagger-url 의 '/openapi.json' 경로에 해당합니다.
     */
    swaggerSchemaUrl: process.env.NEXT_PUBLIC_API_BASE_URL + '/openapi.json',
    /** 생성될 파일들이 위치할 경로입니다. */
    outputPath: 'src/generated/apis',
    /** 생성되는 코드의 React Query 포함 여부 입니다.
     *  해당 옵션이 false 일경우 infiniteQuery 를 포함한 모든 Query 가 생성되지 않습니다. */
    includeReactQuery: true,
    /** 생성되는 코드의 InfiniteQuery 포함 여부 입니다. */
    includeReactInfiniteQuery: true,
    /** 생성되는 코드의 mock 파일 포함 여부 입니다. */
    includeMock: true,
    /** pagination 이 가능한 Api 의 query param 키 값으로써,
     * InfiniteQuery 를 생성하기위해 해당 키워드를 포함한 api를 조회합니다 */
    paginationKeywords: ['cursor'],
    /** 다음 페이지를 구분하는 query param 의 핵심 키워드로써.
     * paginationKeywords 를 통해 찾은 api 의 response 에서
     * Property "next" url 를 찾아 해당 키값을 조회 후에,
     * useInfiniteQuery 의 nextPageParam 을 통해 다음 페이지를 위한 param을 결정하게 됩니다.
     */
    paginationKey: 'cursor',
  },
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
    /** 생성될 이미지 파일의 확장자 목록으로써, 해당 목록에 포함된 확장자를 가진 파일만, 생성됩니다. */
    imageExtension: ['.png', '.jpg', '.svg'],
  },
};
