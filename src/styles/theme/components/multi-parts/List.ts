import { ChakraMultiPartComponentType } from '../type';

const parts = ['container', 'item', 'icon'] as const;

export const List: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
