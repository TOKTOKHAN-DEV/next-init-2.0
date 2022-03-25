import React from 'react';
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/layout';
import { mode } from 'src/styles/theme/foundations/colors';

export const ThemeColors = () => {
  const { light, dark } = mode;
  type KeyofLight = keyof typeof light;
  type KeyofDark = keyof typeof dark;

  return (
    <Box p="60px">
      <Divider w="100%" h="30px" bg="pink.300" />
      <Text textStyle="xl" mb="50px">
        LIGHT COLORS
      </Text>

      {Object.keys(light).map((key, idx) => {
        const targetColor = light[key as KeyofLight];
        return (
          <VStack align="start" key={idx} mb="20px">
            <Text textStyle="lg">{key}</Text>
            <HStack>
              {Object.keys(targetColor).map((colorTone, idx) => {
                const colorSchema = targetColor;
                type keyofSchema = keyof typeof colorSchema;
                return (
                  <Box key={idx} w="100px" h="100px" bg={colorSchema[colorTone as keyofSchema]}>
                    {colorTone}
                  </Box>
                );
              })}
            </HStack>
          </VStack>
        );
      })}

      <Divider w="100%" h="30px" bg="pink.300" />
      <Text textStyle="xl" mb="50px">
        DARK COLORS
      </Text>
      {Object.keys(dark).map((key, idx) => {
        const targetColor = dark[key as KeyofDark];
        return (
          <VStack align="start" key={idx} mb="20px">
            <Text textStyle="lg">{key}</Text>
            <HStack>
              {Object.keys(targetColor).map((colorTone, idx) => {
                const colorSchema = dark[key as KeyofDark];
                type keyofSchema = keyof typeof colorSchema;
                return (
                  <Box key={idx} w="100px" h="100px" bg={colorSchema[colorTone as keyofSchema]}>
                    {colorTone}
                  </Box>
                );
              })}
            </HStack>
          </VStack>
        );
      })}
    </Box>
  );
};
