import React from 'react';
import Router from 'next/router';

import { Box, Stack, Button, useColorMode } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';

interface HomeTemplateProps {
  header?: JSX.Element;
}

const HomeTemplate = ({ header }: HomeTemplateProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [, setCookie] = useCookies(['authCookie']);

  // Test
  const setLogin = () => {
    const data = {
      brand: 'tokotkhan.dev',
    };
    setCookie('authCookie', data, { domain: '.toktokhan.dev' });
    setCookie('authCookie', data);
    Router.replace(`https://auth.toktokhan.dev/?next=${window.location.href}`);
  };
  return (
    <>
      {header}
      <Box w="300px" h="300px" bg="secondary" onClick={toggleColorMode}>
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
      <Button colorScheme="primary" size="lg" borderRadius="50px" maxW="200px" onClick={setLogin}>
        로그인
      </Button>
      <iframe src="https://auth.toktokhan.dev/set-cookie?brand=toktokhan" />
    </>
  );
};

export default HomeTemplate;
