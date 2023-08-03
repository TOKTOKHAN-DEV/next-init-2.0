import { ChakraMultiPartComponentType } from '@/types/module/chakra/chakra-multi-part-component-type';

const parts = ['title', 'description', 'container', 'icon'] as const;

export const Alert: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
