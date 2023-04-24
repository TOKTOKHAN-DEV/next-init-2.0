import React from 'react';

import { useRouter } from 'next/router';

import { Box, ChakraProps, Text, VStack } from '@chakra-ui/react';

interface TossPageProps extends ChakraProps {}

function FailPage({ ...basisProps }: TossPageProps) {
  const router = useRouter();
  const { orderId, paymentKey, amount } = router.query;

  return (
    <Box {...basisProps} pt="80px">
      <Text textStyle="xl">결제 실패</Text>
      <VStack align="left" mt="40px">
        <Text>파라미터</Text>
        <Text>orderId : {orderId}</Text>
        <Text>paymentKey : {paymentKey}</Text>
        <Text>amount : {amount}</Text>
      </VStack>
    </Box>
  );
}

export default FailPage;
