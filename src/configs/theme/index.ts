import { extendTheme } from '@chakra-ui/react';

// Component style overrides
import components from './components';
// Foundational style overrides
import foundations from './foundations';
// SemanticTokens
import semanticTokens from './semantic-tokens';
// Global style overrides
import styles from './styles';
// TextStyles
import textStyles from './text-styles';

const overrides = {
  ...foundations,
  semanticTokens,
  components,
  styles,
  textStyles,
};

export default extendTheme(overrides);
