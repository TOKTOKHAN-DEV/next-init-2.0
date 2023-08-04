import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

import { sizes } from './sizes';
import { variants } from './variants';

export const {
  definePartsStyle: defineInputPartsStyle,
  defineMultiStyleConfig,
} = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = defineInputPartsStyle({
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
});

const Input = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

export default Input;
