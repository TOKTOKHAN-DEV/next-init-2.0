import { VStack } from '@chakra-ui/react';

import SocialButton from 'components/common/molecules/SocialButton';
import { SocialType } from 'components/common/molecules/SocialButton';

export interface SocialLoginProps {
  haddleSocialLogin: (val: SocialType) => void;
}

export const SocialLogin = ({ haddleSocialLogin }: SocialLoginProps) => {
  return (
    <VStack>
      <SocialButton social="kakao" haddleLogin={() => haddleSocialLogin('kakao')} />
      <SocialButton social="naver" haddleLogin={() => haddleSocialLogin('naver')} />
      <SocialButton social="facebook" haddleLogin={() => haddleSocialLogin('facebook')} />
      <SocialButton social="google" haddleLogin={() => haddleSocialLogin('google')} />
      <SocialButton social="apple" haddleLogin={() => haddleSocialLogin('apple')} />
    </VStack>
  );
};
