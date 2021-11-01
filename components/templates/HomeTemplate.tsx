import React from 'react';

import { Box, Stack, Button, useColorMode } from '@chakra-ui/react';

interface HomeTemplateProps {
  header?: JSX.Element;
}

const HomeTemplate = ({ header }: HomeTemplateProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box w="300px" h="300px" bg="custom.secondary" onClick={toggleColorMode}>
        colorMode : {colorMode}
      </Box>

      <Box w="100px" h="100px" />
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
