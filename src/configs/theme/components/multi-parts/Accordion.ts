import { ChakraMultiPartComponentType } from '@/types/module/chakra/chakra-multi-part-component-type';

const parts = ['container', 'item', 'button', 'panel', 'icon'] as const;

export const Accordion: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
