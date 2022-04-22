import React from 'react';

import { Box, Center, Divider, Flex, Text, VStack } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/react';

import { Brand, Dark, Dim, Light } from '@theme/foundations/colors';

export const ThemeColors = () => {
  return (
    <Box p="60px">
      <Divider w="100%" h="30px" bg="pink.300" />
      <BrandBox title="LIGHT COLORS" colors={Light} />
      <Divider w="100%" h="30px" bg="pink.300" />
      <BrandBox title="DARK COLORS" colors={Dark} />
      <Divider w="100%" h="30px" bg="pink.300" />
      <BrandBox title="BRAND COLORS" colors={Brand} />
      <Divider w="100%" h="30px" bg="pink.300" />
      <BrandBox title="DIM COLORS" colors={Dim} />
    </Box>
  );
};

const BrandBox = ({
  title,
  colors,
}: {
  title: string;
  colors: Record<any, any>;
}) => {
  return (
    <Box>
      <Text textStyle="xl" mb="50px">
        {title}
      </Text>
      {Object.keys(colors).map((key, idx) => {
        const targetColor = colors[key];
        return (
          <VStack align="start" key={idx} mb="20px">
            <Text textStyle="lg" fontWeight="bold">
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
                        <Center bg="white">{colorSchema[colorTone]}</Center>
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

const ColorBox = chakra('div', {
  baseStyle: {
    boxShadow: '1px 1px 1px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    w: '100px',
    h: '100px',
  },
});
