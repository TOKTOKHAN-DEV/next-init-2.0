import { ChakraMultiPartComponentType } from '../type';

const parts = [
  'button',
  'list',
  'item',
  'groupTitle',
  'command',
  'divider',
] as const;

export const Menu: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
