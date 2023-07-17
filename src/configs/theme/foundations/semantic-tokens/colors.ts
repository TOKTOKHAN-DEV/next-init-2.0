import { genColorSchema } from '@/theme/utils/color/gen-color-schema';
import { getColorToken } from '@/theme/utils/color/get-color-semantic-token';
import { ColorSchema, ColorToken } from '@/theme/utils/color/types/color';

/**
 * theme color 를 정의하는 곳입니다.
 * dark 모드를 대응하기 위해 semantic token 을 사용해서 정의합니다.
 * 500에 정의된 color 는 기본 컬러로써, 접근 시 500 을 붙이지 않고도 접근할 수 있습니다.
 * ex) primary.500 => primary
 *
 *  @see https://chakra-ui.com/docs/styled-system/semantic-tokens
 */
type CustomColors = {
  [key: string]: {
    /**
     * 50-900 까지의 Color Scheme 혹은 컬러 값으로 색상을 정의합니다.
     */
    default?: Partial<ColorSchema> | string;
    /**
     * 50-900 까지의 Color Scheme 혹은 컬러 값으로 색상을 정의합니다.
     * 범위는, default 에 정의된 Schema 범위 안에서만 정의 할 수 있습니다.
     * 정의하지 않은 schema 범위에 대해선, default 에 적용된 schema 값이 적용됩니다.
     * ex) dark 엔 900을 정의했다면, default Schema 에도 해당 키가 존재 해야합니다.
     */
    dark?: Partial<ColorSchema> | string;
    /**
     * 넘겨준 단일 컬러를 기준으로 50-900 범위의 ColorToken 을 생성합니다.
     * default 의 대안입니다.
     */
    default_gen?: string;
    /** 넘겨준 단일 컬러를 기준으로 50-900 범위의 ColorToken 을 생성합니다.
     *  dark 의 대안 입니다.
     */
    dark_gen?: string;
  };
};

const colors: CustomColors = {
  primary: {
    default_gen: '#4850FF',
  },
  secondary: {
    default_gen: '#7B61FF',
  },
  tertiary: {
    default: {
      100: '#ffc179',
      200: '#ffb55f',
      300: '#ffaa46',
      400: '#ff9e2c',
      500: '#FF9213',
      600: '#f88600',
      700: '#df7800',
      800: '#c56a00',
      900: '#ac5d00',
    },
    dark: {
      500: '#F9BC00',
      600: '#dfa900',
      700: '#c69500',
    },
  },
  gray: {
    default: {
      50: '#FAFAFA',
      100: '#F7F7F7',
      200: '#F2F3F4',
      300: '#E5E7EC',
      400: '#D1D4DD',
      500: '#B8BCC8',
      600: '#8C919F',
      700: '#757983',
      800: '#4A4D55',
      900: '#292A2E',
    },
  },
  success: {
    default_gen: '#4850FF',
  },
  warning: {
    default_gen: '#FF6060',
  },
  background: {
    default: {
      primary: '#FFFFFF',
      secondary: '#FAFAFA',
      tertiary: '#F0F0F0',
    },
  },
  white: {
    default: '#FFFFFF',
  },
  black: {
    default: '#1A1A1A',
  },
  modal: {
    default: '#FFFFFF',
  },
  kakao: {
    default: {
      500: '#FEE500',
      600: '#FEE500',
      700: '#FEE500',
    },
  },
  naver: {
    default: {
      500: '#20CF5D',
      600: '#17c554',
      700: '#14bf50',
    },
  },
  facebook: {
    default: {
      500: '#1877F3',
      600: '#1874eb',
      700: '#146cdf',
    },
  },
  google: {
    default: {
      500: '#FFFFFF',
      600: '#F5F5F5',
      700: '#EEEEEE',
    },
  },
  apple: {
    default: {
      500: '#000000',
      600: '#111111',
      700: '#222222',
    },
  },
  dim: {
    default: {
      primary: '#1A1A1A80',
      secondary: '#1A1A1A33',
    },
  },
};

const convertToColorToken = (colors: CustomColors) =>
  Object.keys(colors).reduce<Record<string, ColorToken>>((prev, key) => {
    const color = colors[key];
    const getLight = () => {
      if (color.default) return color.default;
      if (color.default_gen) return genColorSchema(color.default_gen);
      throw Error(`should set default color on: ${key}`);
    };
    const getDark = () => {
      if (color.dark) return color.dark;
      if (color.dark_gen) return genColorSchema(color.dark_gen);
    };
    const token = getColorToken({
      key,
      light: getLight(),
      dark: getDark(),
    });
    return { ...prev, ...token };
  }, {});

export default convertToColorToken(colors);
