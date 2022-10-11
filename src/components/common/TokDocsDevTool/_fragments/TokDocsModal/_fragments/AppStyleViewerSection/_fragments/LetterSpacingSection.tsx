import React from 'react';

import { Text, VStack } from '@chakra-ui/layout';

interface LetterSpacingSectionProps {
  letterSpacings: Record<string, string>;
}

const LetterSpacingSection = ({
  letterSpacings,
}: LetterSpacingSectionProps) => {
  return (
    <VStack align="start" wrap="wrap">
      {Object.keys(letterSpacings).map((key, idx) => {
        const letterSpacing = letterSpacings[key];
        return (
          <VStack p="16px" w="100%" align="start" key={idx} boxShadow="md">
            <Text fontWeight="bold" color="secondary.500">
              {key}: {letterSpacing}
            </Text>
            <Text
              letterSpacing={letterSpacing}
              textStyle="lg"
              fontWeight="bold"
              color="gray.600"
            >
              안녕하세요 똑똑한 개발자 입니다.
            </Text>
          </VStack>
        );
      })}
    </VStack>
  );
};

export default LetterSpacingSection;
