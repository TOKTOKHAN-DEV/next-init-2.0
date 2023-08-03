import { ChakraMultiPartComponentType } from '@/types/module/chakra/chakra-multi-part-component-type';

const parts = ['control', 'icon', 'container', 'label'] as const;

export const Checkbox: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
