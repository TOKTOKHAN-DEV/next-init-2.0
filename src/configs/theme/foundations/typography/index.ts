import { NextFont } from 'next/dist/compiled/@next/font';

import * as googleFonts from './fonts/google-fonts';
import * as localFonts from './fonts/local-fonts';

const getFontFamily = (font: NextFont) => {
  return font.style.fontFamily;
};

const fonts = Object.entries({ ...localFonts, ...googleFonts }).reduce(
  (prev, curr) => {
    const [key, value] = curr;
    return {
      ...prev,
      [key]: getFontFamily(value),
    };
  },
  {},
);

const typography = {
  fonts,
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};

export default typography;
