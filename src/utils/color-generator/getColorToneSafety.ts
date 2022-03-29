import { getColorTone } from './getColorTone';

type GetColorToneSafetyArgs = {
  color: string;
  percent?: number;
  safetyLength?: {
    light: number;
    dark: number;
  };
};

/**
 * target color 를 기준으로 밝기를 조절하여 밝은 색상 배열, 어두운 색상 배열을 리턴합니다.
 * safetyLength 를 충족하지 못할경우,
 * safetyLength 를 충족할때 까지 더 낮은 퍼센테이지를 인자로 함수가 재귀적으로 실행됩니다.
 * @param {string} color - 대상 색상
 * @param {number} [percent = 5]
 * - target color 부터 색상 밝기 간격을 결정합니다.
 * @param {number} [safetyLength = {light:6, dark:5}]
 * - 꼭 가져와야할 어두운 톤과 밝은 톤 배열의 길이입니다.
 * @return target color 부터 점점 어두워지는 darkTones 배열과, 점점 밝아지는 lightTones 배열을 리턴합니다.
 */
export function getColorToneSafety({
  color, //
  percent = 5,
  safetyLength = { light: 6, dark: 5 },
}: GetColorToneSafetyArgs): { darkTones: string[]; lightTones: string[] } {
  const { light: lightMinLength, dark: darkMinLength } = safetyLength;

  const safetyPercent = Math.max(1, percent);
  const colorTone = getColorTone(color, safetyPercent);

  const isInValidDark = colorTone.darkTones.length < darkMinLength;
  const isInValidLight = colorTone.lightTones.length < lightMinLength;

  const isInValidLength = isInValidDark || isInValidLight;
  const isNeverValid = percent <= 0;

  if (isNeverValid)
    throw Error(`Please change the color(${color}).
  You can never get the right length(light: ${safetyLength.light}, dark: ${safetyLength.dark}).
   - color: ${color}
   - target length: light: ${safetyLength.light}, dark: ${safetyLength.dark}
   - current length: light: ${colorTone.lightTones.length}, dark: ${colorTone.darkTones.length}
  `);
  if (isInValidLength) {
    const nextPercentage = percent - 2;
    console.warn(`The correct length cannot be obtained from this color(${color}).
    Get the value again in the next percentage(${percent}% => ${nextPercentage}%).`);
    return getColorToneSafety({ color, percent: nextPercentage });
  }

  return colorTone;
}
