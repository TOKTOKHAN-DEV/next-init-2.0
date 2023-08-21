import {
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

import ContextColorPicker from './components/ContextColorPicker';
import StatefulColorPicker from './components/StatefulColorPicker';
import { useExamplePageContext } from './context/useExamplePageHandler';
import withExamplePageProvider from './hocs/withExamplePageProvider';

const ContextSection = () => {
  const value = useExamplePageContext((ctx) => ctx.state.value);
  const decreaseValue = useExamplePageContext(
    (ctx) => ctx.handler.decreaseValue,
  );
  const increaseValue = useExamplePageContext(
    (ctx) => ctx.handler.increaseValue,
  );

  return (
    <Grid
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
            ExamplePage
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
      <GridItem rowSpan={2} colSpan={4} borderWidth={0}>
        <Text textAlign={'center'}>
          Context를 사용한 예시와 State를 사용한 예시입니다.
          <br />
          이는 차이점을 명확하게 드러내는 간단한 예제입니다. Props drilling이
          3단계 이상 발생할 경우 지역적인 Context 사용을 권장합니다. Context
          사용은 Props drilling을 줄이는 데 도움뿐만 아니라 공통 로직을 재사용할
          수 있는 장점이 있습니다. 더 자세한 내용은{' '}
          <Link
            color="primary"
            isExternal
            href={
              'https://toktokhan.gitbook.io/docs/basic-guides/convention/contexts'
            }
          >
            <b>Tok Docs</b>
          </Link>
          에서 확인해주세요.
        </Text>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Center flexDir={'column'} gap={'5px'}>
          <Text as={'h2'} textStyle={'title-lg'} textAlign={'center'}>
            Sub Context Example
          </Text>
          <ContextColorPicker />
        </Center>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Center flexDir={'column'} gap={'5px'}>
          <Text as={'h2'} textStyle={'title-lg'} textAlign={'center'}>
            Sub Example without Context
          </Text>
          <StatefulColorPicker />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default withExamplePageProvider(ContextSection);
