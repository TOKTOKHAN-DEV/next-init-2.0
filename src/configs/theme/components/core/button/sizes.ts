import { defineStyle } from '@chakra-ui/react';

export const sizes = {
  lg: defineStyle({
    h: '12',
    minW: '12',
    fontSize: 'lg',
    px: '6',
  }),
  md: defineStyle({
    h: '10',
    minW: '10',
    fontSize: 'md',
    px: '4',
  }),
  sm: defineStyle({
    h: '8',
    minW: '8',
    fontSize: 'sm',
    px: '3',
  }),
  xs: defineStyle({
    h: '6',
    minW: '6',
    fontSize: 'xs',
    px: '2',
  }),
};
