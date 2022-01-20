import React from 'react';

import Link from 'next/link';
import { Box, Stack, VStack, Button } from '@chakra-ui/react';

import Auth from '0auth-sdk';

interface HomeLayoutProps {
  header?: JSX.Element;
  content?: JSX.Element;
}

const HomeLayout = ({ header, content }: HomeLayoutProps) => {
  return (
    <>
      {header}
      <Box w="100px" h="100px" />
      {content}
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
      <VStack alignItems="flex-start" mt="20px">
        <Link href="/counter" passHref>
          <Button colorScheme="primary" size="lg" borderRadius="50px" maxW="200px">
            Counter Page 이동
          </Button>
        </Link>

        <Button colorScheme="primary" size="lg" borderRadius="50px" maxW="200px" onClick={Auth.login}>
          로그인
        </Button>
        <Button colorScheme="primary" size="lg" borderRadius="50px" maxW="200px" onClick={() => Auth.initialize({ brand: 'test' })}>
          초기화
        </Button>
        <Button colorScheme="primary" size="lg" borderRadius="50px" maxW="200px" onClick={Auth.getProfile}>
          프로필 가져오기
        </Button>
      </VStack>
    </>
  );
};

export default HomeLayout;
