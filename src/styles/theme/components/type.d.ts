import { ComponentDefaultProps } from '@chakra-ui/theme';
import { PartsStyleInterpolation } from '@chakra-ui/theme-tools';

export type ChakraMultiPartComponentType<Parts extends readonly string[]> = {
  parts: Parts;
  baseStyle: PartsStyleInterpolation<{ __type: Parts[number] }>;
  variants: Record<string, PartsStyleInterpolation<{ __type: Parts[number] }>>;
  sizes: Record<string, PartsStyleInterpolation<{ __type: Parts[number] }>>;
  defaultProps: ComponentDefaultProps;
};
