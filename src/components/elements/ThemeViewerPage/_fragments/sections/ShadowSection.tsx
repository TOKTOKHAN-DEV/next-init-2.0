import React from 'react';

import { Flex, Text, VStack } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/react';

interface ShadowSectionProps {
  boxShadows: Record<string, string>;
}

const ShadowSection = ({ boxShadows }: ShadowSectionProps) => {
  return (
    <Flex wrap="wrap">
      {Object.keys(boxShadows).map((key, idx) => {
        const boxShadow = boxShadows[key];
        return (
          <VStack align="start" key={idx} mb="20px" mr="20px">
            <Text textStyle="lg" fontWeight="bold" color="gray.600">
              {key}
            </Text>
            <ShadowBox boxShadow={boxShadow} />
          </VStack>
        );
      })}
    </Flex>
  );
};

export default ShadowSection;

const ShadowBox = chakra('div', {
  baseStyle: {
    borderRadius: 'md',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    w: '100px',
    h: '100px',
  },
});
