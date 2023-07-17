import { numberInputAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { calc, cssVar } from '@chakra-ui/theme-tools';

import { runIfFn } from '@/utils/validate/run-if-fn';

import { inputTheme } from '../multi-parts/input';
import { sizes as inputSizes } from '../multi-parts/input/sizes';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const $stepperWidth = cssVar('number-input-stepper-width');

const $inputPadding = cssVar('number-input-input-padding');
const inputPaddingValue = calc($stepperWidth).add('0.5rem').toString();

const $bg = cssVar('number-input-bg');
const $fg = cssVar('number-input-color');
const $border = cssVar('number-input-border-color');

const baseStyleRoot = defineStyle({
  [$stepperWidth.variable]: 'sizes.6',
  [$inputPadding.variable]: inputPaddingValue,
});

const baseStyleField = defineStyle(
  (props) => runIfFn(inputTheme.baseStyle, props)?.field ?? {},
);

const baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference,
});

const baseStyleStepper = defineStyle({
  borderStart: '1px solid',
  borderStartColor: $border.reference,
  color: $fg.reference,
  bg: $bg.reference,
  [$fg.variable]: 'colors.chakra-body-text',
  [$border.variable]: 'colors.chakra-border-color',
  _dark: {
    [$fg.variable]: 'colors.whiteAlpha.800',
    [$border.variable]: 'colors.whiteAlpha.300',
  },
  _active: {
    [$bg.variable]: 'colors.gray.200',
    _dark: {
      [$bg.variable]: 'colors.whiteAlpha.300',
    },
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
});

const baseStyle = definePartsStyle((props) => ({
  root: baseStyleRoot,
  field: runIfFn(baseStyleField, props) ?? {},
  stepperGroup: baseStyleStepperGroup,
  stepper: baseStyleStepper,
}));

type FontSize = keyof typeof inputSizes;
function getSize(size: FontSize) {
  const sizeStyle = inputTheme.sizes?.[size];
  const radius: Partial<Record<FontSize, string>> = {
    lg: 'md',
    md: 'md',
    sm: 'sm',
    xs: 'sm',
  };

  const fontSize = (sizeStyle?.field?.fontSize ?? 'md') as FontSize;

  return definePartsStyle({
    field: {
      ...sizeStyle?.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: 'top',
    },
    stepper: {
      fontSize: calc(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size],
      },
      _last: {
        borderBottomEndRadius: radius[size],
        mt: '-1px',
        borderTopWidth: 1,
      },
    },
  });
}

const sizes = {
  xs: getSize('xs'),
  sm: getSize('sm'),
  md: getSize('md'),
  lg: getSize('lg'),
};

export const numberInputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps,
});