import { ChakraMultiPartComponentType } from '../type';

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
