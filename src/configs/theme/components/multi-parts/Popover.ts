import { ChakraMultiPartComponentType } from '@/types/module/chakra/chakra-multi-part-component-type';

const parts = [
  'content',
  'header',
  'body',
  'footer',
  'popper',
  'arrow',
  'closeButton',
] as const;

export const Popover: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
