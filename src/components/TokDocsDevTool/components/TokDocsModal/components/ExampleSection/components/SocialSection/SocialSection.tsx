import React from 'react';

import { HStack, VStack } from '@chakra-ui/react';

import SocialButton from '@/components/SocialButton';

import { socialOAuthUrl } from '@/utils/social';

const SOCIAL_LIST = ['kakao', 'naver', 'facebook', 'google', 'apple'] as const;

function SocialSection() {
  return (
    <>
      <VStack mt="150px">
        {SOCIAL_LIST.map((social) => {
          return (
            <SocialButton
              key={social}
              data={{ social, link: socialOAuthUrl[social]() }}
              size="md"
            />
          );
        })}
      </VStack>
      <HStack justifyContent="center" mt="80px">
        {SOCIAL_LIST.map((social) => {
          return (
            <SocialButton
              key={social}
              data={{ social, link: socialOAuthUrl[social]() }}
              size="sm"
            />
          );
        })}
      </HStack>
    </>
  );
}

export default SocialSection;
