import { extendTheme } from '@chakra-ui/react';

// Component style overrides
import components from './components';
// Foundational style overrides
import foundations from './foundations';
// Global style overrides
import styles from './styles';
// TextStyles
import textStyles from './textStyles';

const overrides = {
  ...foundations,
  components,
  styles,
  textStyles,
};

export default extendTheme(overrides);
