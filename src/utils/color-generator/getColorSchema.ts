import { getColorToneSafety } from './getColorToneSafety';

type ColorKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Options = {
  keys?: ColorKey[];
  percent?: number;
};

type Values = {
  default: string;
  _dark?: string;
};
/**
 * target color 를 기준으로 밝기를 조절하여 chakra 의 color schema 형태로 반환하는 함수입니다.
 * @param keyName - 대상 이름 (eg. primary, secondary..)
 * @param color - 대상 색상 (Light Mode)
 * @param darkColor - 대상 색상 (Dark Mode)
 * @param {Array} [options.keys = [50,100,200,300,400,500,600,700,800,900]]
 *  - 가져올 색상을 결정합니다. Default value: [50, 100, ...900].
 *  - ex) [500, 600, 700] = {500: #aaaaaa , 600: #bbbbbb, 700: #cccccc}
 * @param {number} [options.percent = 5]
 * - 기본컬러 부터(500)의 색상 밝기 간격을 결정합니다.
 * - ex) percent 가 5% 일때 400 은 밝기가  500 에서 +5% 된 색상이고, 300 컬러는 +10% 색상입니다.
 */
export function getColorSchema(
  keyName: string,
  lightColor: string,
  darkColor: string,
  options?: Options,
) {
  const {
    percent = 5,
    keys = [
      50, //
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
    ],
  } = options || {};

  const { darkTones, lightTones } = getColorToneSafety({
    color: lightColor, //
    percent,
    safetyLength: getSafetyLength(keys),
  });
  const { darkTones: darkTonesForDark, lightTones: lightTonesForDark } =
    getColorToneSafety({
      color: darkColor, //
      percent,
      safetyLength: getSafetyLength(keys),
    });

  const colorMap = {
    50: { default: lightTones[5], _dark: lightTonesForDark[5] },
    100: { default: lightTones[4], _dark: lightTonesForDark[4] },
    200: { default: lightTones[3], _dark: lightTonesForDark[3] },
    300: { default: lightTones[2], _dark: lightTonesForDark[2] },
    400: { default: lightTones[1], _dark: lightTonesForDark[1] },
    500: { default: lightColor, _dark: darkColor },
    600: { default: darkTones[1], _dark: darkTonesForDark[1] },
    700: { default: darkTones[2], _dark: darkTonesForDark[2] },
    800: { default: darkTones[3], _dark: darkTonesForDark[3] },
    900: { default: darkTones[4], _dark: darkTonesForDark[4] },
  };

  const colorSchema: Partial<Record<string, Values>> = {};
  colorSchema[keyName] = colorMap[500];
  for (const key of keys)
    colorSchema[keyName + '.' + key.toString()] = colorMap[key];
  return colorSchema;
}

function getSafetyLength(keys: ColorKey[]): { light: number; dark: number } {
  // 키 별 꼭 받아와야하는 부터의 색상 갯수 ex) [50] = [500, 400, 300, 200, 100, 50]  총  6개 필요
  const mappingLightColorSafetyLength = {
    50: 6,
    100: 5,
    200: 4,
    300: 3,
    400: 2,
  };

  const mappingDarkColorSafetyLength = {
    600: 2,
    700: 3,
    800: 4,
    900: 5,
  };

  const safetyLengthMap = {
    500: 1,
    ...mappingDarkColorSafetyLength,
    ...mappingLightColorSafetyLength,
  };

  const safetyLength = keys.reduce(
    // prev = 초깃값 :  { dark: 0, light: 0 }
    // cur =  key  값 : 100, 200, 300 ...
    (prev, cur) => {
      const updated = { ...prev };
      if (cur < 500) updated.dark = Math.max(safetyLengthMap[cur], prev.dark);
      if (cur > 500) updated.light = Math.max(safetyLengthMap[cur], prev.light);
      return updated;
    },
    { dark: 0, light: 0 },
  );

  return safetyLength;
}
