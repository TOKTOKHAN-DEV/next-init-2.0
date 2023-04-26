import * as googleFonts from './google-fonts';
import * as localFont from './local-fonts';
import { mappingNextFontFamily } from './utils/mapping-next-font-family';

/**
 * @see https://nextjs.org/docs/basic-features/font-optimization
 * @see https://nextjs.org/docs/api-reference/next/font
 */
const nextFonts = mappingNextFontFamily({ ...googleFonts, ...localFont });

export default nextFonts;
