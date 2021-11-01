import React from 'react';

import Link from 'next/link';

import Input from 'components/atoms/Input';

import { IdIcon, PasswordIcon } from 'components/icons/System';
import SocialLogin from 'components/organisms/SocialLogin';

import { VStack, Button, Image, Box, Flex, Text } from '@chakra-ui/react';

const Content = () => {
  return (
    <Flex direction="column" h="100%">
      <Flex w="100%" alignItems="center" justifyContent="center" direction="column" mt={['11vh', '10px']}>
        <Text size="sm" color="gray.400">
          디지털 프로덕트의 가장 똑똑한 경험
        </Text>
        <Image src="/icons/LOGO.png" w="180px" h="auto" loading="lazy" />
      </Flex>
      <VStack w="100%" mt={['auto', '85px']} mb="80px" spacing="40px">
        <Input type="text" placeholder="아이디" icon={<IdIcon fill="#4575F5" w="24px" h="24px" />} errorText="아이디를 입력해주세요." />
        <Input type="password" placeholder="비밀번호" icon={<PasswordIcon fill="#4575F5" w="24px" h="24px" />} />
      </VStack>
      <VStack spacing="20px">
        <Button w="100%" borderRadius="99px" size="lg" colorScheme="primary">
          로그인
        </Button>
        <Flex alignItems="center" justifyContent="space-evenly" w="100%">
          <Link href="#" passHref>
            <Text textStyle="md" cursor="pointer" decoration="underline">
              비밀번호 찾기
            </Text>
          </Link>
          <Link href="#" passHref>
            <Text textStyle="md" cursor="pointer" decoration="underline">
              회원가입
            </Text>
          </Link>
        </Flex>
      </VStack>
      <Flex direction="column" mt="20px" alignItems="center">
        <Box w="100%" h="1px" backgroundColor="gray.2" />
        <Text textStyle="sm" color="gray.4" my="20px">
          소셜 계정으로 간편 로그인/회원가입
        </Text>
        <SocialLogin size="sm" />
      </Flex>
    </Flex>
  );
};

export default Content;
