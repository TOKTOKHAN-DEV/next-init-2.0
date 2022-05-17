import { ChakraMultiPartComponentType } from '../type';

const parts = ['container', 'item', 'button', 'panel', 'icon'] as const;

export const Accordion: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
