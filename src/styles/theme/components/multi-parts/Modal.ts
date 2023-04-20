import { ChakraMultiPartComponentType } from '@/types/module/chakra/chakra-multi-part-component-type';

const parts = [
  'overlay',
  'dialogContainer',
  'dialog',
  'header',
  'closeButton',
  'body',
  'footer',
] as const;

export const Modal: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
