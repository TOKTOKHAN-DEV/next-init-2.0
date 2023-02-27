import { useRouter } from 'next/router';
import React from 'react';

import { Center, Code, HStack, Text, VStack } from '@chakra-ui/react';

import SocialButton from '@components/common/SocialButton';

import withUnAuthGuard from '@hocs/withUnAuthGuard';
import { socialOAuthUrl } from '@utils/social';

const SOCIAL_LIST = ['kakao', 'naver', 'facebook', 'google', 'apple'] as const;

function LoginPage() {
  const router = useRouter();
  const { returnUrl } = router.query;

  return (
    <Center flexDirection="column">
      <Text>
        로그인 하지 않은 유저만 접근할 수 있는 페이지입니다.
        <Code>withUnAuthGard</Code>를 사용해주세요.
      </Text>
      <VStack w="100%" mt="150px">
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

export default withUnAuthGuard(LoginPage);
