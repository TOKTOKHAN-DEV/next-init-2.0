import { Box, Button, Text } from '@chakra-ui/react';

import { homeSlice } from '@/contexts/pages/home/hooks/useHomePageState';
import { useHomePageContext } from '@/contexts/pages/home/useHomePageContext';

function Home() {
  console.log('hi');
  return (
    <Box>
      <Text>HomePage</Text>
      <Count />
      <Updator />
    </Box>
  );
}
export default Home;

const Count = () => {
  const count = useHomePageContext((ctx) => ctx.state.value);
  return (
    <Box>
      <Text>{count}</Text>
    </Box>
  );
};

const Updator = () => {
  const dispatch = useHomePageContext((ctx) => ctx.dispatch);

  return (
    <Box>
      <Button
        onClick={() => {
          homeSlice.setState((prev) => ({ ...prev, value: prev.value + 1 }));
        }}
      >
        add
      </Button>

      <Button
        onClick={() =>
          dispatch({
            type: 'SET_VALUE',
            payload: 4,
          })
        }
      >
        add2
      </Button>
    </Box>
  );
};
