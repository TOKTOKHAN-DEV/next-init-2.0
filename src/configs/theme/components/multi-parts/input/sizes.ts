import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const size = {
  lg: defineStyle({
    fontSize: 'lg',
    px: '4',
    h: '12',
    borderRadius: 'md',
  }),
  md: defineStyle({
    fontSize: 'md',
    px: '4',
    h: '10',
    borderRadius: 'md',
  }),
  sm: defineStyle({
    fontSize: 'sm',
    px: '3',
    h: '8',
    borderRadius: 'sm',
  }),
  xs: defineStyle({
    fontSize: 'xs',
    px: '2',
    h: '6',
    borderRadius: 'sm',
  }),
};

export const sizes = {
  lg: definePartsStyle({
    field: size.lg,
    addon: size.lg,
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm,
  }),
  xs: definePartsStyle({
    field: size.xs,
    addon: size.xs,
  }),
};
