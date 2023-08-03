import { DeclaredFontsType } from './fonts/types/declared-fonts-type';

/**
 * @issues
 * chakra-cli 에서 next-fonts import 실패
 * chakra-cli 를 제외한 모든 기능 동작 정상 작동
 *
 * chakra-cli 란? : theme 에서 정의한 선언들을 type 정의 해주는 툴
 *
 * 원인: next-fonts 에서 제공하는 함수가 next 실행 환경에서만 작동하는 것으로 보임
 * 해결 방법:
 *  - chakra-cli: 타입정의는 fonts 의 키 값 정도만 참조 하기때문에, 사용되는 next-fonts 의 key 값을 가진 Mock 데이터로 대체
 *  - next/fonts: 실제 적용되는 부분은 app-provider 이기 때문에 provider 에 theme 이 넘겨지기 전에 실제 fonts 데이터로 대체 후 넘겨줌
 *
 * @see https://github.com/chakra-ui/chakra-ui/discussions/7235#discussioncomment-5230995
 */
const declaredNextFontsMock: DeclaredFontsType = {
  Akronim: 'sans-serif',
  Pretendard: 'sans-serif',
};

const typography = {
  fonts: declaredNextFontsMock,
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};

export default typography;
