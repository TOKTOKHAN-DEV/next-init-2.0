import { StyleFunctionProps, getColor, mode } from '@chakra-ui/theme-tools';

import { InputThemeType } from './index';

export const variants: InputThemeType['variants'] = {
  outline: (props) => {
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
  },
  filled: (props) => {
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
  },
  flushed: (props) => {
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
  },
  unstyled: {
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
  },
};

function getDefaults(props: StyleFunctionProps) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode('black', 'black')(props),
    errorBorderColor: ec || mode('warning', 'warning')(props),
  };
}
