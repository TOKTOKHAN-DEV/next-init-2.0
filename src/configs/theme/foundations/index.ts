import colors from '../semantic-tokens/colors';
import breakpoints from './core/breakpoints';
import sizes from './core/sizes';
import zIndices from './core/z-index';
import blur from './misc/blur';
import borders from './misc/borders';
import radii from './misc/radius';
import shadows from './misc/shadows';
import { spacing } from './misc/spacing';
import transition from './misc/transition';
import typography from './typography';

export const foundations = {
  breakpoints,
  zIndices,
  radii,
  blur,
  colors,
  sizes,
  shadows,
  space: spacing,
  borders,
  transition,
  ...typography,
};
