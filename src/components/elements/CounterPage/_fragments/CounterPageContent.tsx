import { useDispatch } from 'react-redux';

import { Button, HStack, Text } from '@chakra-ui/react';

import { counterSliceAction } from '@features/counter/counterSlice';
import useAppStore from '@features/useAppStore';

const CounterPageContent = () => {
  const dispatch = useDispatch();
  const { value } = useAppStore((store) => store.COUNTER);
  return (
    <HStack>
      <Button onClick={() => dispatch(counterSliceAction.increment())}>
        +
      </Button>
      <Text>{value}</Text>
      <Button onClick={() => dispatch(counterSliceAction.decrement())}>
        -
      </Button>
    </HStack>
  );
};

export default CounterPageContent;
