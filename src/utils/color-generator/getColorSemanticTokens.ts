import { extend } from 'lodash';

import { getColorSchema } from './getColorSchema';

type ColorKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type LightColorValues = Required<DarkColorValues>;
type DarkColorValues = Partial<Record<ColorKey, string>> & Record<500, string>;

type SemanticTokenValue = {
  default?: string;
  _dark?: string;
};

/**
 * @brief CSS selectors 환경에 호환되는 semanticToken을 생성하는 함수입니다.
 * @see Docs https://chakra-ui.com/docs/styled-system/semantic-tokens
 * @param keyName - 대상 이름 (eg. primary, secondary..)
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

const getColorSemanticTokens = (
  keyName: string,
  light: string | LightColorValues,
  dark: string | DarkColorValues,
) => {
  const lightSchema = typeof light === 'string' ? getColorSchema(light) : light;
  const darkSchema = typeof dark === 'string' ? getColorSchema(dark) : dark;

  const keyNumbers = Object.keys(lightSchema) as unknown as ColorKey[];

  const mainColor = {
    [keyName]: { default: lightSchema[500], _dark: darkSchema[500] },
  };
  const semanticTokens = keyNumbers.reduce<Record<string, SemanticTokenValue>>(
    (acc, cur) => {
      acc[`${keyName}.${cur}`] = {
        default: lightSchema[cur],
        _dark: darkSchema[cur] || lightSchema[cur],
      };

      return acc;
    },
    { ...mainColor },
  );

  return semanticTokens;
};

export default getColorSemanticTokens;
