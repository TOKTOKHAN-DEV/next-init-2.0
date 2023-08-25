import breakpoints from './breakpoints';
import semanticTokens from './semantic-tokens';
import colorSchemes from './semantic-tokens/colorSchemes';
import sizes from './sizes';
import styles from './styles';
import textStyles from './text-styles';
import typography from './typography';
import zIndices from './z-index';

export const foundations = {
  zIndices,
  breakpoints,
  sizes,
  styles,
  textStyles,
  semanticTokens,
  ...typography,
};
