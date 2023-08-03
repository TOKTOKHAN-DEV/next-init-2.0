import { useRouter } from 'next/router';

import { Button, Flex, Image, Text } from '@chakra-ui/react';

import { SOCIALS } from './constants/socials';

export type SocialType = 'kakao' | 'naver' | 'facebook' | 'google' | 'apple';
export interface SocialButtonProps {
  data: {
    social: SocialType;
    link: string;
  };
  size: 'md' | 'sm';
}

const SocialButton = ({ data, size }: SocialButtonProps) => {
  const width = size !== 'sm' ? '100%' : '45px';
  const maxWidth = size !== 'sm' ? '310px' : '45px';
  const left = size !== 'sm' ? '27px' : '9px';
  const router = useRouter();
  return (
    <Button
      colorScheme={data.social}
      w={width}
      h="45px"
      maxW={maxWidth}
      onClick={() => router.push(data.link)}
      borderRadius="4px"
    >
      <Flex alignItems="center" justifyContent="center">
        <Image
          position="absolute"
          w="24px"
          h="24px"
          left={left}
          src={SOCIALS[data.social].icon}
          loading="lazy"
          alt="img"
        />
        {size !== 'sm' && (
          <Text fontSize={['16px', '14px', '15px']}>
            {SOCIALS[data.social].text}
          </Text>
        )}
      </Flex>
    </Button>
  );
};

export default SocialButton;
