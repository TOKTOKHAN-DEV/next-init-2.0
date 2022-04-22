import React from 'react';

import { Box, Center, Flex, Text, VStack } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/react';

interface ColorSectionProps {
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: Record<any, any>;
}

const ColorSection = ({ title, colors }: ColorSectionProps) => {
  return (
    <Box>
      <Text textStyle="xl" mb="50px">
        {title}
      </Text>
      {Object.keys(colors).map((key, idx) => {
        const targetColor = colors[key];
        return (
          <VStack align="start" key={idx} mb="20px">
            <Text textStyle="lg" fontWeight="bold" color="gray.600">
              {key}
            </Text>
            <Flex flexWrap="wrap" justify="center">
              {typeof targetColor === 'object' ? (
                Object.keys(targetColor).map((colorTone, idx) => {
                  const colorSchema = targetColor;
                  return (
                    <Box key={idx} mr="10px">
                      <Text>{colorTone}</Text>
                      <ColorBox bg={colorSchema[colorTone]}>
                        <Center bg="white" borderBottomRadius="md">
                          {colorSchema[colorTone]}
                        </Center>
                      </ColorBox>
                    </Box>
                  );
                })
              ) : (
                <ColorBox bg={targetColor}>
                  <Center bg="white">{targetColor}</Center>
                </ColorBox>
              )}
            </Flex>
          </VStack>
        );
      })}
    </Box>
  );
};

export default ColorSection;

const ColorBox = chakra('div', {
  baseStyle: {
    boxShadow: 'md',
    borderRadius: 'md',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    w: '100px',
    h: '100px',
  },
});
