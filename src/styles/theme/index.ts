import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Foundational style overrides
import foundations from './foundations';

// Component style overrides
import components from './components';

// TextStyles
import textStyles from './textStyles';

const overrides = {
  ...foundations,
  components,
  styles,
  textStyles,
};

export default extendTheme(overrides);
