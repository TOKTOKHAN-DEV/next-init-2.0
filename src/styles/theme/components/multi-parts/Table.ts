import { ChakraMultiPartComponentType } from '../type';

const parts = [
  'table',
  'thead',
  'tbody',
  'tr',
  'th',
  'td',
  'tfoot',
  'caption',
] as const;

export const Table: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
