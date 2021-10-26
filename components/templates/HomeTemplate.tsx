import React from 'react';

import { Box, Stack, Button } from '@chakra-ui/react';

interface HomeTemplateProps {
  header?: JSX.Element;
}

const HomeTemplate = ({ header }: HomeTemplateProps) => {
  return (
    <>
      <Box flexGrow={1}>{header}</Box>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs" borderRadius="50px">
          Button
        </Button>
        <Button colorScheme="teal" size="sm" borderRadius="50px">
          Button
        </Button>
        <Button colorScheme="teal" size="md" borderRadius="50px">
          Button
        </Button>
        <Button colorScheme="teal" size="lg" borderRadius="50px">
          Button
        </Button>
      </Stack>
    </>
  );
};

export default HomeTemplate;
