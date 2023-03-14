import { getColorSchema } from '@utils/color-generator';
import { getColorToken } from '@utils/color-generator/getColorSemanticToken';
import { ColorSchema, ColorToken } from '@utils/color-generator/types';

type Colors = {
  [key: string]: {
    /** 넘겨준 ColorSchema를 기준으로 ColorToken 을 생성합니다.*/
    default?: Partial<ColorSchema> | string;
    /** 넘겨준 ColorSchema를 기준으로 ColorToken 을 생성합니다.*/
    dark?: Partial<ColorSchema> | string;
    /** 넘겨준 단일 컬러를 기준으로 50-900 범위의 ColorToken 을 생성합니다.*/
    default_gen?: string;
    /** 넘겨준 단일 컬러를 기준으로 50-900 범위의 ColorToken 을 생성합니다.*/
    dark_gen?: string;
  };
};

const colors: Colors = {
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
      500: '#000000',
      600: '#111111',
      700: '#222222',
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

const convertToColorToken = (colors: Colors) =>
  Object.keys(colors).reduce<Record<string, ColorToken>>((prev, key) => {
    const color = colors[key];
    const getLight = () => {
      if (color.default) return color.default;
      if (color.default_gen) return getColorSchema(color.default_gen);
      throw Error(`should set default color on: ${key}`);
    };
    const getDark = () => {
      if (color.dark) return color.dark;
      if (color.dark_gen) return getColorSchema(color.dark_gen);
    };
    const token = getColorToken({
      key,
      light: getLight(),
      dark: getDark(),
    });
    return { ...prev, ...token };
  }, {});

export default convertToColorToken(colors);
