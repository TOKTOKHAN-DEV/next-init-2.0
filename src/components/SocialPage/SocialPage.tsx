import React from 'react';

import { HStack, VStack } from '@chakra-ui/react';

import SocialButton from '@components/common/SocialButton';

import { CONFIG } from '@config';
import { SOCIAL } from '@constants/social';

const SOCIAL_REDIRECT_URL = `${CONFIG.DOMAIN}`;

const SOCIAL_LIST: any = [
  {
    social: 'kakao',
    link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
  },
  {
    social: 'naver',
    link: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${SOCIAL.NAVER_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=naver`,
  },
  {
    social: 'facebook',
    link: `https://www.facebook.com/v9.0/dialog/oauth?response_type=code&client_id=${SOCIAL.FACEBOOK_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=facebook`,
  },
  {
    social: 'google',
    link: `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=${SOCIAL.GOOGLE_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=google&scope=openid`,
  },
  {
    social: 'apple',
    link: `https://appleid.apple.com/auth/authorize?response_type=code&client_id=${SOCIAL.APPLE_CLIENT_ID}&redirect_uri={SOCIAL_REDIRECT_URL}&state=apple`,
  },
];

function SocialPage() {
  return (
    <>
      <VStack mt="150px">
        {SOCIAL_LIST.map((social: any) => {
          return <SocialButton data={social} size="md" />;
        })}
      </VStack>
      <HStack justifyContent="center" mt="80px">
        {SOCIAL_LIST.map((social: any) => {
          return <SocialButton data={social} size="sm" />;
        })}
      </HStack>
    </>
  );
}

export default SocialPage;
