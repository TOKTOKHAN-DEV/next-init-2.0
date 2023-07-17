import breakpoints from './breakpoints';
import { etcComponents } from './etc';
import semanticTokens from './semantic-tokens';
import colors from './semantic-tokens/colors';
import sizes from './sizes';
import styles from './styles';
import textStyles from './text-styles';
import typography from './typography';
import zIndices from './z-index';

export const foundations = {
  etcComponents,
  zIndices,
  breakpoints,
  colors,
  sizes,
  styles,
  textStyles,
  semanticTokens,
  ...typography,
};
