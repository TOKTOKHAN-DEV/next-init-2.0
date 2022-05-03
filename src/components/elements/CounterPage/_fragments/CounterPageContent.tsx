import { useDispatch } from 'react-redux';

import { Button, HStack, Text } from '@chakra-ui/react';

import { decrement, increment } from '@features/Count/counterSlice';

import { useRootState } from '@components/hooks/useRootState';

const CounterPageContent = () => {
  const dispatch = useDispatch();
  const { value } = useRootState((state) => state.COUNTER);
  return (
    <HStack>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Text>{value}</Text>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </HStack>
  );
};

export default CounterPageContent;
