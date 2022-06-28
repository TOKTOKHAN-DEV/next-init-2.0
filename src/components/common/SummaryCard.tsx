import React from 'react';

import { Box, BoxProps, Text } from '@chakra-ui/layout';

interface SummaryCardProps extends Omit<BoxProps, 'title'> {
  title: string | JSX.Element;
  description: string | JSX.Element;
}

const SummaryCard = ({
  title,
  description,
  ...basisProps
}: SummaryCardProps) => {
  return (
    <Basis
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="20px"
      bg="gray.100"
      borderRadius="sm"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{ boxShadow: 'xl', translateY: '-10px', transform: 'auto' }}
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
