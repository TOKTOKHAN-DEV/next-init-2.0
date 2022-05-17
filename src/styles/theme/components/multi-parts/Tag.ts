import { ChakraMultiPartComponentType } from '../type';

const parts = ['container', 'label', 'closeButton'] as const;

export const Tag: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
