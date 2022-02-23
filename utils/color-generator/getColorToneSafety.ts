import { getColorTone } from './getColorTone';

type GetColorToneSafetyArgs = {
  color: string;
  percent?: number;
  safetyLength?: {
    light: number;
    dark: number;
  };
};

export function getColorToneSafety({
  color, //
  percent = 5,
  safetyLength = { light: 6, dark: 5 },
}: GetColorToneSafetyArgs): ReturnType<typeof getColorTone> {
  const { light: lightMinLength, dark: darkMinLength } = safetyLength;

  const safetyPercent = Math.max(1, percent);
  const colorTone = getColorTone(color, safetyPercent);

  const isInValidDark = colorTone.darkTones.length < lightMinLength;
  const isInValidLight = colorTone.lightTones.length < darkMinLength;

  const isInValidLength = isInValidDark || isInValidLight;
  const isNeverValid = percent <= 0;

  if (isNeverValid) {
    return {
      lightTones: Array.from({ length: lightMinLength }).map(() => color), //
      darkTones: Array.from({ length: darkMinLength }).map(() => color),
    };
  }
  if (isInValidLength) {
    const nextPercentage = percent - 2;
    return getColorToneSafety({ color, percent: nextPercentage });
  }

  return colorTone;
}
