import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

interface LoginTemplateProps {
  content: JSX.Element;
}

const LoginTemplate = ({ content }: LoginTemplateProps) => {
  return (
    <Flex h="100vh" backgroundColor={['white', '#FAFAFA']} alignItems="center" justifyContent="center">
      <Box
        h={['100%', 'auto']}
        w="100%"
        maxW="375px"
        mx="auto"
        backgroundColor="white"
        px="15px"
        py="30px"
        borderWidth={['none', '1px']}
        borderColor="gray.200"
        borderRadius="8px"
      >
        {content}
      </Box>
    </Flex>
  );
};

export default LoginTemplate;
