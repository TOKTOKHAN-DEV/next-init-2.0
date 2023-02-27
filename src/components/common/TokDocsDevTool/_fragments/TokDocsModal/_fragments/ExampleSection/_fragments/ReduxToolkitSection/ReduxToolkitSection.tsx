import { useDispatch } from 'react-redux';

import { Button, Flex, Text } from '@chakra-ui/react';

import { counterSliceAction } from '@features/counter/counterSlice';
import { useAppStore } from '@features/store';

const ReduxToolkitSection = () => {
  const dispatch = useDispatch();
  const { value } = useAppStore((store) => store.COUNTER);

  return (
    <Flex
      padding="10px 0px"
      direction="column"
      align="center"
      justifyContent="center"
    >
      <Text>Redux Toolkit Counter Example</Text>
      <Flex
        align="center"
        justifyContent="center"
        padding="10px 0px"
        gap="10px"
      >
        <Button onClick={() => dispatch(counterSliceAction.increment())}>
          +
        </Button>
        <Text>{value}</Text>
        <Button onClick={() => dispatch(counterSliceAction.decrement())}>
          -
        </Button>
      </Flex>
    </Flex>
  );
};

export default ReduxToolkitSection;
