import { VStack } from '@chakra-ui/react';

import SocialButton from 'components/common/molecules/SocialButton';

import { SOCIAL_DATA } from 'settings/socialLogin';

export const SocialLogin = () => {
  return (
    <VStack>
      {SOCIAL_DATA.map((social, idx) => {
        return <SocialButton key={idx} data={social} />;
      })}
    </VStack>
  );
};
