import React from 'react';

import { useRouter } from 'next/router';

import {
  Box,
  Center,
  Code,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

import SocialButton from '@/components/SocialButton';

import { socialOAuthUrl } from '@/utils/social';

const SOCIAL_LIST = ['kakao', 'naver', 'facebook', 'google', 'apple'] as const;

function Login() {
  const router = useRouter();
  const { returnUrl } = router.query;

  return (
    <Center flexDirection="column">
      <Box p="20px" flexDirection="column">
        <Box>
          로그인 한 유저 Block: <Code color="primary.500">withUnAuthGard</Code>
          <Box px="20px">
            <Text>예시</Text>
            <UnorderedList fontSize="14px" px="20px">
              <ListItem>로그인 페이지</ListItem>
              <ListItem>회원가입 페이지</ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box>
          로그인 안 한 유저 Block: <Code color="primary.500">withAuthGard</Code>
          <Box px="20px">
            <Text>예시</Text>
            <UnorderedList fontSize="14px" px="20px">
              <ListItem>마이 페이지</ListItem>
              <ListItem>주문 페이지</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>

      <VStack w="100%">
        {SOCIAL_LIST.map((social) => {
          const socialLogin = socialOAuthUrl[social];
          return (
            <SocialButton
              key={social}
              data={{
                social,
                link: socialLogin(returnUrl?.toString()),
              }}
              size="md"
            />
          );
        })}
      </VStack>
      <HStack justifyContent="center" mt="80px">
        {SOCIAL_LIST.map((social) => {
          const socialLogin = socialOAuthUrl[social];
          return (
            <SocialButton
              key={social}
              data={{
                social,
                link: socialLogin(returnUrl?.toString()),
              }}
              size="sm"
            />
          );
        })}
      </HStack>
    </Center>
  );
}

export default Login;
