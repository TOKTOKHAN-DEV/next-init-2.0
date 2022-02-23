// eslint-disable-next-line @typescript-eslint/no-var-requires
import tinycolor from 'tinycolor2';

export function getColorTone(color: string, percent = 5): { darkTones: string[]; lightTones: string[] } {
  const t = tinycolor(color);
  const hsl = t.toHsl(); // { h: 0, s:1, l: 0.5 }

  const colorH = hsl['h'];
  const colorS = hsl['s'] * 100;
  const colorL = hsl['l'] * 100;

  const lightTones: string[] = [];
  const darkTones: string[] = [];

  for (let i = 0; i < 100; i = i + percent) {
    const lighten = colorL + i;
    const lightColor = tinycolor('hsl(' + colorH + ', ' + colorS + '%, ' + lighten + '%)');
    const lightHex = lightColor.toHexString(); // 見本の色とカラーコード表示に

    const darken = colorL - i;
    const darkColor = tinycolor('hsl(' + colorH + ', ' + colorS + '%, ' + darken + '%)');
    const darkHex = darkColor.toHexString(); // 見本の色とカラーコード表示に

    if (lighten <= 100) {
      lightTones.push(lightHex);
    }

    if (darken >= 0) {
      darkTones.push(darkHex);
    }
  }

  return { lightTones, darkTones };
}
