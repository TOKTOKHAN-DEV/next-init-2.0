import { extendTheme } from '@chakra-ui/react';

import { components } from './components';
import { foundations } from './foundations';
// Component style overrides
// Foundational style overrides
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
