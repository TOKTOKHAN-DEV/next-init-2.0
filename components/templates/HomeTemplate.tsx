import React from 'react';
import Router from 'next/router';

import { Box, Stack, Button } from '@chakra-ui/react';

interface HomeTemplateProps {
  header?: JSX.Element;
}

const HomeTemplate = ({ header }: HomeTemplateProps) => {
  // Test
  const setLogin = () => {
    Router.replace(`https://test.celeb-picks.com/?next=${window.location.href}`);
  };
  return (
    <>
      {header}
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
      <Button colorScheme="primary" size="lg" borderRadius="50px" maxW="200px" onClick={setLogin}>
        로그인
      </Button>
    </>
  );
};

export default HomeTemplate;
