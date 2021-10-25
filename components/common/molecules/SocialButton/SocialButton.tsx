import { Button, Flex, Image, Text } from '@chakra-ui/react';

export type SocialType = 'kakao' | 'naver' | 'facebook' | 'google' | 'apple';

export interface SocialButtonProps {
  social: SocialType;
  haddleLogin: () => void;
}

const SOCIAL_DATA = Object.freeze({
  kakao: { icon: '/icons/social/kakao.png', text: '카카오 계정으로 로그인' },
  naver: { icon: '/icons/social/naver.png', text: '네이버 계정으로 로그인' },
  facebook: { icon: '/icons/social/facebook.png', text: 'Facebook으로 로그인' },
  google: { icon: '/icons/social/google.png', text: 'Google로 로그인' },
  apple: { icon: '/icons/social/apple.png', text: 'Apple로 로그인' },
});

export const SocialButton = ({ social, haddleLogin }: SocialButtonProps) => {
  return (
    <Button colorScheme={social} w="100%" h="45px" maxW="310px" onClick={haddleLogin} borderRadius="4px">
      <Flex alignItems="center" justifyContent="center">
        <Image position="absolute" w="24px" h="24px" left="27px" src={SOCIAL_DATA[social].icon} />
        <Text>{SOCIAL_DATA[social].text}</Text>
      </Flex>
    </Button>
  );
};
