import React, { useState } from 'react';

import { loadTossPayments } from '@tosspayments/payment-sdk';
import { Select } from 'chakra-react-select';

import { Box, Button, Center } from '@chakra-ui/react';

const PAYMENTS_TYPE = [
  { value: '카드', label: '카드' },
  { value: '토스페이', label: '토스페이' },
  { value: '가상계좌', label: '가상계좌' },
  { value: '계좌이체', label: '계좌이체' },
  { value: '휴대폰', label: '휴대폰' },
  { value: '문화상품권', label: '문화상품권' },
  { value: '도서문화상품권', label: '도서문화상품권' },
  { value: '게임문화상품권', label: '게임문화상품권' },
];
function TossSection() {
  const [type, setType] = useState<any>(PAYMENTS_TYPE[0]);
  const clientKey = 'test_ck_aBX7zk2yd8yyKYvjGJE8x9POLqKQ';

  const test = async () => {
    const tossPayments = await loadTossPayments(clientKey);
    tossPayments.requestPayment(type.value, {
      amount: 15000,
      orderId: 'WAJnmx9Tq4lb-bD59Wk8B', // orderId는 서버에서 생성 후 전달받은 값
      orderName: '똑똑한 티셔츠 외 2건',
      customerName: '박토스',
      successUrl: `${window.location.origin}${'/successUrl'}`,
      failUrl: `${window.location.origin}${'/failUrl'}`,
    });
  };
  return (
    <Box pt="80px">
      <Select
        value={type}
        isSearchable={false}
        onChange={setType}
        options={PAYMENTS_TYPE}
        placeholder=""
      />
      <Center mt="20px">
        <Button onClick={test} colorScheme="primary" w="400px">
          결제 테스트
        </Button>
      </Center>
    </Box>
  );
}

export default TossSection;
