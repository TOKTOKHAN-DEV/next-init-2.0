import React from 'react';

import SocialLogin from 'components/organisms/SocialLogin';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const Content = () => {
  return (
    <Flex direction="column" h="100%">
      <Flex w="100%" alignItems="center" justifyContent="center" direction="column" mt={['11vh', '10px']}>
        <Text size="sm" color="gray.400">
          디지털 프로덕트의 가장 똑똑한 경험
        </Text>
        <Image src="/icons/LOGO.png" w="180px" h="auto" loading="lazy" />
      </Flex>
      <Box mt={['auto', '85px']} mb="20px">
        <SocialLogin />
      </Box>
      <Text decoration="underline" w="fit-content" mx="auto" cursor="pointer">
        개인정보처리방침
      </Text>
    </Flex>
  );
};

export default Content;
