import { theme as baseTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { StyleObjectOrFn } from '@chakra-ui/styled-system';

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
    color: 'black',
    hoverBg: 'kakao.600',
    activeBg: 'kakao.700',
  },
  google: {
    bg: 'google.500',
    color: '#808080',
    hoverBg: 'google.600',
    activeBg: 'google.700',
    border: '#DDDDDD',
  },
};

const variantSolid: StyleObjectOrFn = (props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    const bg = mode(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
    };
  }

  const { bg = `${c}.500`, color = 'white', hoverBg = `${c}.600`, activeBg = `${c}.700`, border = `${c}.500` } = accessibleColorMap[c] ?? {};

  const background = mode(bg, `${c}.200`)(props);
  const borderColor = mode(border, `${c}.500`)(props);

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    borderWidth: 1,
    borderColor: borderColor,
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  };
};

const Button = {
  baseStyle: {
    ...baseTheme.components.Button.baseStyle,
    _focus: { boxShadow: 'none' },
  },
  variants: {
    solid: variantSolid,
  },
  sizes: {
    lg: {
      h: '50px',
      fontSize: ['15px', '14px', '16px'],
      px: '15px',
    },
    md: {
      h: '40px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    sm: {
      h: '30px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    xs: {
      h: '26px',
      fontSize: ['12px', '10px', '12px'],
      px: '8px',
    },
  },
};

export default Button;
