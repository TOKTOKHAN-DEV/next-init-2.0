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
  const maxWidth = size !== 'sm' ? '410px' : '45px';
  const padding = size !== 'sm' ? '8px' : '0px';
  const router = useRouter();
  return (
    <Button
      colorScheme={data.social}
      variant={'solid'}
      w={width}
      h="45px"
      p={padding}
      maxW={maxWidth}
      onClick={() => router.push(data.link)}
      borderRadius="4px"
    >
      <Flex alignItems="center" justifyContent="space-between" gap={'8px'}>
        <Image
          w="24px"
          h="24px"
          src={SOCIALS[data.social].icon}
          loading="lazy"
          alt={`social-button-${data.social}`}
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
