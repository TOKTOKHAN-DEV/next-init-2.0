import React from 'react';

import { Text, VStack } from '@chakra-ui/layout';

interface FontWeightSectionProps {
  fontWeights: Record<string, string>;
}

const FontWeightSection = ({ fontWeights }: FontWeightSectionProps) => {
  return (
    <VStack align="start">
      {Object.keys(fontWeights).map((key, idx) => {
        const fontWeight = fontWeights[key];
        return (
          <VStack p="16px" w="100%" align="start" key={idx} boxShadow="md">
            <Text fontWeight="bold" color="secondary.500">
              {key}: {fontWeight}
            </Text>
            <Text fontWeight={fontWeight} textStyle="lg" color="gray.600">
              안녕하세요 똑똑한 개발자 입니다.
            </Text>
          </VStack>
        );
      })}
    </VStack>
  );
};

export default FontWeightSection;
