/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { ChakraProps } from '@chakra-ui/system';

import themeTextStyle from '@theme/textStyles';
import textStyles from '@theme/textStyles';

const useTextStyleUtils = () => {
  return React.useMemo(
    () => ({
      getTextStyleList,
      getTextStyleWithResponsiveObject,
      convertCssToResponsiveObject,
    }),
    [],
  );
};

export default useTextStyleUtils;

function getTextStyleList(styles: typeof textStyles) {
  const converted = getTextStyleWithResponsiveObject(styles);

  return Object.entries(converted).map(([size, css]) => {
    const cssBySize: Partial<Record<MediaQueryKeyType, ChakraProps>> = {};
    Object.entries(css).forEach((entry) => {
      const [property, responsiveCss] = entry;
      for (const media in responsiveCss) {
        cssBySize[media as MediaQueryKeyType] = {
          ...cssBySize[media as MediaQueryKeyType],
          [property]: responsiveCss[media as MediaQueryKeyType],
        };
      }
    });
    return {
      size,
      cssBySize,
    };
  });
}

type TextStyleKeyType = keyof typeof themeTextStyle;
type ResponsiveCssType = Record<
  string,
  ReturnType<typeof convertCssToResponsiveObject>
>;
type ResponsiveTextStyleType = Record<TextStyleKeyType, ResponsiveCssType>;
function getTextStyleWithResponsiveObject(styles: typeof themeTextStyle) {
  const result: Partial<ResponsiveTextStyleType> = {};

  for (const key in styles) {
    const textStyle = styles[key as TextStyleKeyType];
    const cssBySize = {} as ResponsiveTextStyleType;
    for (const property in textStyle) {
      const declared = textStyle[property as keyof typeof textStyle];
      const responsiveCss = convertCssToResponsiveObject(declared);
      cssBySize[property as keyof typeof cssBySize] = responsiveCss;
    }
    result[key as keyof typeof result] = cssBySize;
  }

  return result;
}

type MediaQueryKeyType = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type MediaQueryObjectType = Record<MediaQueryKeyType, any>;
function convertCssToResponsiveObject(css: any): Partial<MediaQueryObjectType> {
  const isPrimitive = typeof css !== 'object';
  const isArray = Array.isArray(css);
  const isObject = typeof css === 'object' && !isArray;

  let result: Partial<MediaQueryObjectType> = { base: null };

  if (isPrimitive) {
    result.base = css;
    return result;
  }
  if (isObject) {
    result = css;
    return result;
  }

  if (isArray) {
    const [base, sm, md, lg, xl, twoXL] = css;
    if (base) result.base = base;
    if (sm) result.sm = sm;
    if (md) result.md = md;
    if (lg) result.lg = lg;
    if (xl) result.xl = xl;
    if (twoXL) result['2xl'] = twoXL;
    return result;
  }

  return result;
}
