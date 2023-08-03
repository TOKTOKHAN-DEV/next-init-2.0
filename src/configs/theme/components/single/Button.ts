import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import { defineStyle } from '@chakra-ui/styled-system';

import { runIfFn } from '@/utils/validate/run-if-fn';

/**
 * Light & Dark mode
 * @example
 *  const bg = mode(`gray.100`, `whiteAlpha.200`)(props)
 * @see Example https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/button.ts
 */

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
  border?: string;
};

const accessibleColorMap: { [key: string]: AccessibleColor } = {
  kakao: {
    bg: 'kakao.500',
    color: '#1A1A1A',
    hoverBg: 'kakao.600',
    activeBg: 'kakao.700',
  },
  naver: {
    bg: 'naver.500',
    color: '#FFFFFF',
    hoverBg: 'naver.600',
    activeBg: 'naver.700',
  },
  facebook: {
    bg: 'facebook.500',
    color: '#FFFFFF',
    hoverBg: 'facebook.600',
    activeBg: 'facebook.700',
  },
  apple: {
    bg: 'apple.500',
    color: '#FFFFFF',
    hoverBg: 'apple.600',
    activeBg: 'apple.700',
  },
  google: {
    bg: 'google.500',
    color: '#808080',
    hoverBg: 'google.600',
    activeBg: 'google.700',
    border: '#DDDDDD',
  },
};

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    const bg = 'gray.100';

    return {
      bg,
      _hover: {
        bg: 'gray.100',
        _disabled: {
          bg,
        },
      },
      _active: { bg: 'gray.300' },
    };
  }

  const {
    bg = `${c}.500`,
    color = 'white',
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
    border = `${c}.500`,
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,
    borderColor: borderColor,
    _hover: {
      bg: hoverBg,
      borderColor: hoverBg,
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: activeBg, borderColor: activeBg },
  };
});

const variantGhost = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    return {
      color: 'inherit',
      _hover: {
        bg: `gray.100`,
      },
      _active: `gray.200`,
    };
  }

  return {
    color: `${c}.600`,
    bg: 'transparent',
    _hover: {
      bg: `${c}.50`,
    },
    _active: {
      bg: `${c}.100`,
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = `gray.200`;
  return {
    border: '1px solid',
    borderColor: c === 'gray' ? borderColor : `${c}.500`,
    ...runIfFn(variantGhost, props),
  };
});

const variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    verticalAlign: 'baseline',
    color: `${c}.500`,
    _hover: {
      textDecoration: 'underline',
      _disabled: {
        textDecoration: 'none',
      },
    },
    _active: {
      color: `${c}.700`,
    },
  };
});

const variantUnstyled = defineStyle({
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: '0',
  p: '0',
});

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
};

const baseStyle = defineStyle({
  w: 'fit-content',
  h: 'fit-content',
  _focus: { boxShadow: 'none' },
});

const sizes = {
  lg: defineStyle({
    w: ['100px', '280px', '310px'],
    h: '50px',
    fontSize: ['16px', '14px', '15px'],
    px: '15px',
  }),
  md: defineStyle({
    w: ['100px', '280px', '310px'],
    h: '40px',
    fontSize: ['12px', '10px', '12px'],
    px: '15px',
  }),
  sm: defineStyle({
    w: ['80px', '130px', '150px'],
    h: '30px',
    fontSize: ['12px', '10px', '12px'],
    px: '15px',
  }),
  xs: defineStyle({
    w: ['60px', '70px', '80px'],
    h: '26px',
    fontSize: ['12px', '10px', '12px'],
    px: '10px',
  }),
};

export const Button: ComponentSingleStyleConfig = {
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'primary',
  },
};
