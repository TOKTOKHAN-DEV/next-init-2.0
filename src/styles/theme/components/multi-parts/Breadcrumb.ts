import { ChakraMultiPartComponentType } from '../type';

const parts = ['link', 'item', 'container', 'separator'] as const;

export const Breadcrumb: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
