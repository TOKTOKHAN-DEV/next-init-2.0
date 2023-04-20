import { ColorKey } from '../../types/color';

export function getSafetyLength(keys: ColorKey[]): {
  light: number;
  dark: number;
} {
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
