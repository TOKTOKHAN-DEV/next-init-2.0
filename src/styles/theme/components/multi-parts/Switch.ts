import { ChakraMultiPartComponentType } from '../type';

const parts = ['container', 'track', 'thumb'] as const;

export const Switch: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
