import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

import ContextColorPicker from '@/components/Home/components/ContextColorPicker/ContextColorPicker';
import StatefulColorPicker from '@/components/Home/components/StatefulColorPicker';

import { useHomePageContext } from './context/useHomePageContext';

function Home() {
  const value = useHomePageContext((ctx) => ctx.state.value);
  const decreaseValue = useHomePageContext((ctx) => ctx.handler.decreaseValue);
  const increaseValue = useHomePageContext((ctx) => ctx.handler.increaseValue);

  return (
    <Grid
      mt={'150px'}
      h={'100%'}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
      sx={{
        '&>div': {
          border: '1px solid black',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <GridItem rowSpan={2} colSpan={4} alignSelf={'center'}>
        <VStack>
          <Text as={'h2'} textStyle={'title-lg'}>
            HomePage
          </Text>
          <Text>{`Current Context Value is`}</Text>
          <HStack>
            <Button isDisabled={value === 0} onClick={decreaseValue}>
              -
            </Button>
            <Text w={'100px'} textAlign={'center'}>
              {value}
            </Text>
            <Button onClick={increaseValue}>+</Button>
          </HStack>
        </VStack>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Center flexDir={'column'} gap={'5px'}>
          <Text as={'h2'} textStyle={'title-lg'}>
            Sub Context Example
          </Text>
          <ContextColorPicker />
        </Center>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Center flexDir={'column'} gap={'5px'}>
          <Text as={'h2'} textStyle={'title-lg'}>
            Sub Example without Context
          </Text>
          <StatefulColorPicker />
        </Center>
      </GridItem>
    </Grid>
  );
}

export default Home;
