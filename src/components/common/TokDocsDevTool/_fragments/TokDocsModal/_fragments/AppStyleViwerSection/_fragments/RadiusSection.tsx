import React from 'react';

import { AspectRatio, Box, SimpleGrid, Text } from '@chakra-ui/layout';

interface RadiusSectionProps {
  radii: Record<string, string>;
}

const RadiusSection = ({ radii }: RadiusSectionProps) => {
  return (
    <SimpleGrid spacing="40px" columns={{ base: 3, md: 5 }}>
      {Object.keys(radii).map((key, idx) => {
        const radius = radii[key];
        return (
          <AspectRatio
            borderRadius={radius}
            p="5px"
            key={idx}
            bg="secondary.50"
            ratio={1 / 1}
          >
            <Box
              h="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text fontWeight="bold" fontSize="lg" color="secondary.500">
                {key}
              </Text>
              <Text color="secondary.500">{radius}</Text>
            </Box>
          </AspectRatio>
        );
      })}
    </SimpleGrid>
  );
};

export default RadiusSection;
