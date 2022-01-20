import { StyleObjectOrFn } from '@chakra-ui/styled-system';
import { getColor, mode } from '@chakra-ui/theme-tools';

const baseStyle: StyleObjectOrFn = {
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
};

const size: Record<string, any> = {
  lg: {
    fontSize: 'lg',
    px: 4,
    h: '54px',
  },

  md: {
    fontSize: 'md',
    px: 4,
    h: '54px',
  },

  sm: {
    fontSize: 'sm',
    px: 3,
    h: '54px',
  },

  xs: {
    fontSize: 'xs',
    px: 2,
    h: '54px',
  },
};

const sizes: Record<string, any> = {
  lg: {
    field: size.lg,
    addon: size.lg,
  },
  md: {
    field: size.md,
    addon: size.md,
  },
  sm: {
    field: size.sm,
    addon: size.sm,
  },
  xs: {
    field: size.xs,
    addon: size.xs,
  },
};

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode('black', 'black')(props),
    errorBorderColor: ec || mode('warning', 'warning')(props),
  };
}

const variantOutline: StyleObjectOrFn = (props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '1px solid',
      borderColor: 'inherit',
      borderRadius: 0,
      bg: 'inherit',
      _hover: {
        borderColor: mode('gray.300', 'whiteAlpha.400')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
      },
      _focus: {
        borderColor: getColor(theme, fc),
      },
    },
    addon: {
      border: '1px solid',
      borderRadius: 0,
      borderColor: mode('inherit', 'whiteAlpha.50')(props),
      bg: mode('gray.100', 'whiteAlpha.300')(props),
    },
  };
};

const variantFilled: StyleObjectOrFn = (props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '2px solid',
      borderColor: 'transparent',
      borderRadius: 0,
      bg: 'gray.100',
      _hover: {
        bg: 'gray.200',
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _invalid: {
        borderColor: `${getColor(theme, ec)} !important`,
      },
      _focus: {
        bg: 'gray.100',
        borderColor: getColor(theme, fc),
      },
    },
    addon: {
      border: '2px solid',
      borderColor: 'transparent',
      borderRadius: 0,
      bg: mode('gray.100', 'whiteAlpha.50')(props),
    },
  };
};

const variantFlushed: StyleObjectOrFn = (props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      borderBottom: '1px solid',
      borderColor: 'inherit',
      borderRadius: 0,
      px: 0,
      bg: 'transparent',
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _invalid: {
        borderColor: `${getColor(theme, ec)} !important`,
        boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`,
      },
      _focus: {
        borderColor: getColor(theme, fc),
      },
    },
    addon: {
      borderBottom: '2px solid',
      borderColor: 'inherit',
      borderRadius: 0,
      px: 0,
      bg: 'transparent',
    },
  };
};

const variantUnstyled: StyleObjectOrFn = {
  field: {
    bg: 'transparent',
    px: 0,
    height: 'auto',
  },
  addon: {
    bg: 'transparent',
    px: 0,
    height: 'auto',
  },
};

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled,
};

const defaultProps = {
  size: 'md',
  variant: 'filled',
};

const Input = {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};

export default Input;
