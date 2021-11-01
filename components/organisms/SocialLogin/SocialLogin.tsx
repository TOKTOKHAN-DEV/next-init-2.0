import { VStack, HStack } from '@chakra-ui/react';

import SocialButton from 'components/molecules/SocialButton';

import { SOCIAL_DATA } from 'settings/socialLogin';

export interface SocialLoginProps {
  size?: 'md' | 'sm';
}
export const SocialLogin = ({ size = 'md' }: SocialLoginProps) => {
  if (size === 'sm') {
    return (
      <HStack justifyContent="center" spacing="20px">
        {SOCIAL_DATA.map((social, idx) => {
          return <SocialButton key={idx} size={size} data={social} />;
        })}
      </HStack>
    );
  }
  return (
    <VStack>
      {SOCIAL_DATA.map((social, idx) => {
        return <SocialButton key={idx} size={size} data={social} />;
      })}
    </VStack>
  );
};
