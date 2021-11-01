import React from 'react';

import Link from 'next/link';

import Input from 'components/atoms/Input';
import CheckBox from 'components/atoms/CheckBox';

import { IdIcon, PasswordIcon } from 'components/icons/System';

import { VStack, Button, Image, Flex, Text } from '@chakra-ui/react';

const Content = () => {
  return (
    <Flex direction="column" h="100%">
      <Flex w="100%" alignItems="center" justifyContent="center" direction="column" mt={['11vh', '10px']}>
        <Text size="sm" color="gray.400">
          디지털 프로덕트의 가장 똑똑한 경험
        </Text>
        <Image src="/icons/LOGO.png" w="180px" h="auto" loading="lazy" />
      </Flex>
      <VStack w="100%" mt={['auto', '85px']} mb="20px" spacing="40px">
        <Input type="text" placeholder="아이디" icon={<IdIcon fill="#4575F5" w="24px" h="24px" />} errorText="아이디를 입력해주세요." />
        <Input type="password" placeholder="비밀번호" icon={<PasswordIcon fill="#4575F5" w="24px" h="24px" />} />
      </VStack>
      <Flex alignItems="center" justifyContent="space-between" mb="120px">
        <CheckBox checked>자동 로그인</CheckBox>
        <Link href="#" passHref>
          <Text textStyle="md" cursor="pointer">
            아이디/패스워드 찾기
          </Text>
        </Link>
      </Flex>
      <VStack spacing="20px">
        <Button w="100%" borderRadius="99px" size="lg" colorScheme="primary">
          로그인
        </Button>
        <Link href="#" passHref>
          <Text textStyle="md" cursor="pointer" decoration="underline">
            회원가입
          </Text>
        </Link>
      </VStack>
    </Flex>
  );
};

export default Content;
