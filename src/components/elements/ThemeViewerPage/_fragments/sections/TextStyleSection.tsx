/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Box, Text, VStack } from '@chakra-ui/layout';
import { ChakraProps } from '@chakra-ui/system';

import { mediaSize } from '@theme/foundations/breakpoints';
import themeTextStyle from '@theme/textStyles';

import useTextStyleUtils from '../../_hooks/useTextStyleUtils';

interface TextStyleSectionProps {
  textStyles: Record<string, ChakraProps>;
}

const TextStyleSection = ({ textStyles }: TextStyleSectionProps) => {
  const { getTextStyleList } = useTextStyleUtils();
  const textStyleList = getTextStyleList(textStyles as typeof themeTextStyle);
  return (
    <VStack align="start">
      {textStyleList.map(({ size, cssBySize }, idx) => {
        return (
          <VStack p="16px" w="100%" align="start" key={idx} boxShadow="md">
            <Text fontWeight="bold" color="secondary.500">
              {size}
            </Text>
            {Object.entries(cssBySize as any).map((v, c_idx) => {
              const [media, css] = v as any;
              return (
                <Box key={c_idx}>
                  <Text>
                    {media}{' '}
                    <Text as="span" textStyle="sm" color="gray.600">
                      (@media min-width:
                      {mediaSize[media as keyof typeof mediaSize]})
                    </Text>
                  </Text>
                  <Text textStyle="lg" color="gray.600" {...css}>
                    안녕하세요 똑똑한 개발자 입니다.
                  </Text>
                </Box>
              );
            })}
          </VStack>
        );
      })}
    </VStack>
  );
};

export default TextStyleSection;
