import { ColorKey, ColorSchema, ColorToken } from './types/color';

/**
 * @brief CSS selectors 환경에 호환되는 semanticToken을 생성하는 함수입니다.
 * @see Docs https://chakra-ui.com/docs/styled-system/semantic-tokens
 * @param key - 대상 이름 (eg. primary, secondary..)
 * @param light  - 대상  Light Mode 색상 Hex code or Color schema object
 * @param dark  - 대상  Dark Mode 색상 Hex code or Color schema object
 * - color schema 를 정적으로 입력할 시 key값은 500이 메인 컬러이며, 필수 값 입니다.
 * - light color기준으로 Schema가 생성되므로 light key 값들은 dark mode key값들을 필수로 가지고 있어야 합니다. (Required)
 *  - case 1) colors = {light: "ffffff", dark: "eeeeee"} // success
 *  - case 2) colors = {light: "ffffff", dark: {500: '#eeeeee", 600: "#e2e2e2e"}} // success
 *  - case 3) colors = {light: {500: '#ffffff", 600: "#f2f2f2"}, dark: {500: '#eeeeee"}} // success
 *  - case 4) colors = {light: {500: '#ffffff"}, dark: {500: '#eeeeee", 600: "e2e2e2"}} // fail!!
 * @returns semantic Token schema 형태를 가지는 객체 모음으로 반환
 */

type GetColorTokenParams<T extends string | Partial<ColorSchema>> = {
  key: string;
  light: T;
  dark?: T extends string ? string : Partial<T>;
};

type ColorTokenRecord<T extends string = string> = Record<T, ColorToken>;

export const getColorToken = <T extends string | Partial<ColorSchema>>({
  key,
  dark,
  light,
}: GetColorTokenParams<T>): ColorTokenRecord => {
  const isObjAndStr = typeof light === 'object' && typeof dark === 'string';
  const isStrAndObj = typeof light === 'string' && typeof dark === 'object';
  const isObjAndObj = typeof light === 'object' && typeof dark === 'object';
  const isOutBoundDark =
    isObjAndObj && Object.keys(dark).some((key) => !light[key]);
  const isStringAndOptionalStr =
    typeof light === 'string' &&
    (typeof dark === 'undefined' || typeof dark === 'string');

  if (isObjAndStr || isStrAndObj)
    throw Error('should pass same type schema: obj,obj or str,str');
  if (isOutBoundDark)
    throw Error('The dark schema must be within the light schema');
  if (isStringAndOptionalStr) return createToken({ key, light, dark });

  const keyNumbers = Object.keys(light) as unknown as ColorKey[];

  const mainColor =
    '500' in (light as Object) &&
    createToken({
      key,
      light: light[500] || 'black',
      dark: dark?.[500] || light[500] || 'black',
    });

  const hasOnlyMainColor = keyNumbers.length === 1 && mainColor;
  if (hasOnlyMainColor) return mainColor;

  const semanticTokens = keyNumbers.reduce<Record<string, ColorToken>>(
    (acc, cur) => {
      const token = createToken({
        key: `${key}.${cur}`,
        light: light[cur] || 'black',
        dark: dark?.[cur] || light[cur] || 'black',
      });
      return { ...acc, ...token };
    },
    mainColor || {},
  );

  return semanticTokens;
};

export const createToken = (params: {
  key: string;
  light: string;
  dark?: string;
}): ColorTokenRecord => {
  return {
    [params.key]: {
      default: params.light,
      _dark: params.dark || params.light,
    },
  };
};
