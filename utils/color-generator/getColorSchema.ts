import { getColorToneSafety } from './getColorToneSafety';

type ColorKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export function getColorSchema(
  color: string,
  keys: ColorKey[] = [
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
) {
  const { darkTones, lightTones } = getColorToneSafety({
    color, //
    percent: 5,
    safetyLength: { light: 6, dark: 5 },
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

  const colorSchema: Partial<Record<ColorKey, string>> = {};
  for (const key of keys) colorSchema[key] = colorMap[key] || 'black';

  return colorSchema;
}
