import { ChakraMultiPartComponentType } from '../type';

const parts = ['control', 'icon', 'container', 'label'] as const;

export const Checkbox: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
