import { ComponentDefaultProps } from '@chakra-ui/react';
import { PartsStyleInterpolation } from '@chakra-ui/theme-tools';

import { ItemOf } from '@/types/utility/item-of';

export type ChakraMultiPartComponentType<Parts extends readonly string[]> = {
  parts: Parts;
  baseStyle: PartsStyleInterpolation<{ keys: ItemOf<Parts>[] }>;
  variants: Record<string, PartsStyleInterpolation<{ keys: ItemOf<Parts>[] }>>;
  sizes: Record<string, PartsStyleInterpolation<{ keys: ItemOf<Parts>[] }>>;
  defaultProps: ComponentDefaultProps;
};
