import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { Box, ChakraProps, Text, VStack } from '@chakra-ui/react';

interface TossPageProps extends ChakraProps {}

function SuccessPage({ ...basisProps }: TossPageProps) {
  const router = useRouter();
  const { orderId, paymentKey, amount } = router.query;

  useEffect(() => {
    // TODO Update Order API
    // 주문 상태 업데이트를 통해서 결제 성공 여부 체크
  }, []);
  return (
    <Box {...basisProps} pt="80px">
      <Text textStyle="xl">결제 성공</Text>
      <VStack align="left" mt="40px">
        <Text>파라미터</Text>
        <Text>orderId : {orderId}</Text>
        <Text>paymentKey : {paymentKey}</Text>
        <Text>amount : {amount}</Text>
      </VStack>
    </Box>
  );
}

export default SuccessPage;
