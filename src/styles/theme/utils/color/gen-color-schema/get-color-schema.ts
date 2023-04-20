import { ColorKey, ColorSchema } from '../types/color';
import { getColorToneSafety } from './utils/get-color-tone-safety';
import { getSafetyLength } from './utils/get-safety-length';

type Options = {
  keys?: ColorKey[];
  percent?: number;
};

/**
 * target color 를 기준으로 밝기를 조절하여 chakra 의 color schema 형태로 반환하는 함수입니다.
 * @param color - 대상 색상
 * @param {Array} [options.keys = [50,100,200,300,400,500,600,700,800,900]]
 *  - 가져올 색상을 결정합니다. Default value: [50, 100, ...900].
 *  - ex) [500, 600, 700] = {500: #aaaaaa , 600: #bbbbbb, 700: #cccccc}
 * @param {number} [options.percent = 5]
 * - 기본컬러 부터(500)의 색상 밝기 간격을 결정합니다.
 * - ex) percent 가 5% 일때 400 은 밝기가  500 에서 +5% 된 색상이고, 300 컬러는 +10% 색상입니다.
 */
export function genColorSchema(color: string, options?: Options): ColorSchema {
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
    color, //
    percent,
    safetyLength: getSafetyLength(keys),
  });

  const colorMap = {
    50: lightTones[5],
    100: lightTones[4],
    200: lightTones[3],
    300: lightTones[2],
    400: lightTones[1],
    500: color,
    600: darkTones[1],
    700: darkTones[2],
    800: darkTones[3],
    900: darkTones[4],
  };

  const colorSchema = {} as ColorSchema;
  for (const key of keys) colorSchema[key] = colorMap[key];

  return colorSchema;
}
