// eslint-disable-next-line @typescript-eslint/no-var-requires
import tinycolor from 'tinycolor2';

/**
 * target color 를 기준으로 밝기를 조절하여 밝은 색상 배열, 어두운 색상 배열을 리턴합니다.
 * @param {string} color - 대상 색상
 * @param {number} [options.percent = 5]
 * - target color 부터 색상 밝기 간격을 결정합니다.
 * @return target color 부터 점점 어두워지는 darkTones 배열과, 점점 밝아지는 lightTones 배열을 리턴합니다.
 */
export function getColorTone(
  color: string,
  percent = 5,
): { darkTones: string[]; lightTones: string[] } {
  const t = tinycolor(color);
  // hsl(hue, saturation, lightness)
  const hsl = t.toHsl();
  // 색조
  const colorH = hsl['h'];
  // 채도 (0이면 회색, 100이면 원색)
  const colorS = hsl['s'] * 100;
  // 밝기 (0이면 검정색 100이면 흰색)
  const colorL = hsl['l'] * 100;

  const lightTones: string[] = [];
  const darkTones: string[] = [];

  for (let i = 0; i < 100; i = i + percent) {
    // 기존 밝기에서 (percent * n)% 만큼 올린값
    const lighten = colorL + i;
    const lightColor = tinycolor(
      'hsl(' + colorH + ', ' + colorS + '%, ' + lighten + '%)',
    );
    const lightHex = lightColor.toHexString();

    // 기존 밝기에서 (percent * n)%만큼 내린 값
    const darken = colorL - i;
    const darkColor = tinycolor(
      'hsl(' + colorH + ', ' + colorS + '%, ' + darken + '%)',
    );
    const darkHex = darkColor.toHexString();

    if (lighten <= 100) lightTones.push(lightHex);
    if (darken >= 0) darkTones.push(darkHex);
  }

  return { lightTones, darkTones };
}
