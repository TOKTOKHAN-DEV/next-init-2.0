import { ChakraMultiPartComponentType } from '@/types/module/chakra/chakra-multi-part-component-type';

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
