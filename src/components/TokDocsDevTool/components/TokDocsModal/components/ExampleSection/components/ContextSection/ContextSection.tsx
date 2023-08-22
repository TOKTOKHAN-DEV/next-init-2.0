import {
  Box,
  Button,
  Center,
  Code,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

import ContextColorPicker from './components/ContextColorPicker';
import StatefulColorPicker from './components/StatefulColorPicker';
import { useExamplePageContext } from './context/useExamplePageContext';
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
      templateRows="repeat(6, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
      sx={{
        '&>div': {
          border: '1px solid',
          borderColor: 'gray',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <GridItem
        rowSpan={6}
        colSpan={4}
        borderWidth={0}
        overflow={'hidden'}
        wordBreak={'break-word'}
      >
        <Text textAlign={'center'}>
          Context를 페이지단에서, 혹은 컴포넌트 단에서 사용하는 예시입니다.
          <b>ContextSection</b> 경로를 통해 폴더구조의 위계와 코드스타일을
          확인하실 수 있습니다. 해당 경로에서 코드를 직접 확인해주세요.
        </Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={4} alignSelf={'center'}>
        <VStack>
          <Text as={'h2'} textStyle={'title-lg'}>
            ExamplePage
          </Text>
          <Text textStyle={'title'}>페이지 컨텍스트</Text>
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
      <GridItem
        rowSpan={1}
        colSpan={4}
        borderWidth={0}
        overflow={'hidden'}
        wordBreak={'break-word'}
      >
        <Text textAlign={'center'}>
          Context와 State를 활용한 예시입니다. <br />
          간단한 예시로 차이점을 설명하는 예제입니다. Props drilling이 3단계
          이상 발생할 경우, 지역적인 Context를 사용하는 것을 권장합니다.
          Context를 사용하면 Props drilling을 감소시키는 데 도움이 되며, 공통된
          로직을 효과적으로 재사용할 수 있는 장점이 있습니다. 더 자세한 내용은{' '}
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
      <GridItem rowSpan={2} colSpan={2}>
        <Center flexDir={'column'} gap={'5px'}>
          <Text as={'h2'} textStyle={'title-lg'} textAlign={'center'}>
            Sub Context Example
          </Text>
          <Text textStyle={'title'}>지역 컨텍스트 사용</Text>
          <ContextColorPicker />
        </Center>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Center flexDir={'column'} gap={'5px'}>
          <Text as={'h2'} textStyle={'title-lg'} textAlign={'center'}>
            Sub Example without Context
          </Text>
          <Text textStyle={'title'}>useState 사용</Text>
          <StatefulColorPicker />
        </Center>
      </GridItem>
      <GridItem rowSpan={1} colSpan={4}>
        <Box>
          <Text>
            전역 컨텍스트 src/context{' '}
            <Code>e.g. src/contexts/global/useGlobalStoreContext.ts</Code>
          </Text>
          <Text>
            페이지 컨텍스트 container/context{' '}
            <Code>e.g. src/containers/Home/context/useHomePageContext.ts</Code>
          </Text>
          <Text>
            지역 컨텍스트 component/[container]/context
            <Code>
              e.g.
              src/components/Home/components/ContextColorPicker/context/useSubExampleContext.ts
            </Code>
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default withExamplePageProvider(ContextSection);
