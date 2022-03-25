import { HStack, Button, Text } from '@chakra-ui/react';

import { decrement, increment } from 'src/features/Count/counterSlice';
import { useDispatch } from 'react-redux';
import { useRootState } from 'src/components/hooks/useRootState';

const Content = () => {
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

export default Content;
