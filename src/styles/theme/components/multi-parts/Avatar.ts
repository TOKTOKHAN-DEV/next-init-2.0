import { ChakraMultiPartComponentType } from '../type';

const parts = ['label', 'badge', 'container', 'excessLabel', 'group'] as const;

export const Avatar: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
