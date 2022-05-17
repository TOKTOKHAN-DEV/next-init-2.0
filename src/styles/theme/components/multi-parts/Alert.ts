import { ChakraMultiPartComponentType } from '../type';

const parts = ['title', 'description', 'container', 'icon'] as const;

export const Alert: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
