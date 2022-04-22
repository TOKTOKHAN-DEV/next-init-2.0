import React from 'react';

import { Box, BoxProps, Text } from '@chakra-ui/layout';

interface SummaryCardProps extends BoxProps {
  title: string;
  description: string;
}

const SummaryCard = ({
  title,
  description,
  ...basisProps
}: SummaryCardProps) => {
  return (
    <Basis
      _hover={{ boxShadow: 'xl', translateY: '-10px', transform: 'auto' }}
      transition="all 0.2s"
      display="flex"
      flexDirection="column"
      p="20px"
      justifyContent="space-between"
      boxShadow="md"
      bg="gray.100"
      borderRadius="sm"
      {...basisProps}
    >
      <Text textStyle="lg">{title}</Text>
      <Text textStyle="md" color="gray.600">
        {description}
      </Text>
    </Basis>
  );
};

export default SummaryCard;

const Basis = Box;
