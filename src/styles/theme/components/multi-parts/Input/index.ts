import { ChakraMultiPartComponentType } from '@theme/components/type';

import { sizes } from './sizes';
import { variants } from './variants';

const parts = ['addon', 'field', 'element'] as const;

export type InputThemeType = ChakraMultiPartComponentType<typeof parts>;

export const Input: InputThemeType = {
  parts,
  sizes,
  variants,
  baseStyle: {
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
