import { mappingNextFontFamily } from '@/configs/theme/utils/mapping-next-font-family';

import * as googleFonts from './next-fonts/google-fonts';
import * as localFont from './next-fonts/local-fonts';

const fonts = mappingNextFontFamily({ ...googleFonts, ...localFont });

export default fonts;
