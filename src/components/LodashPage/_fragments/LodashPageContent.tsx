import React from 'react';

import * as _ from 'lodash';

import { Box, ChakraProps, Input, Text } from '@chakra-ui/react';

const DATAS = ['원숭이', '강아지', '토끼', '다람쥐', '고양이'];
interface LodashPageContentProps extends ChakraProps {}

function LodashPageContent({ ...basisProps }: LodashPageContentProps) {
  const [searchValue, setSearchValue] = React.useState('');
  const [result, setResult] = React.useState('');

  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  // 검색 api 호출 시 debounce를 통하여 불필요한 통신을 막아줍니다.
  // sendQuery를 react-query로 바꿔서 사용할 수 있습니다.
  const sendQuery = React.useCallback((query: string) => {
    console.log('debounceResult : ', { query });
    if (!query.length) return;
    const debounceResult = DATAS.find((d) => d.includes(query));
    if (!debounceResult) return setResult('');
    setResult(debounceResult);
  }, []);

  // 300ms 의 입력 주기가 끝나면 출력합니다.
  const delayedQueryCall = React.useRef(
    _.debounce((q) => sendQuery(q), 300),
  ).current;

  const handleSearchChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
      delayedQueryCall(event.target.value);
    },
    [delayedQueryCall],
  );

  // throttle
  React.useEffect(() => {
    const updateWindowSize = () => {
      const { clientHeight, clientWidth } = document.documentElement;
      setDimensions({
        height: clientHeight,
        width: clientWidth,
      });
    };
    updateWindowSize();

    const throttleWithUpdateWindowSize = _.throttle(updateWindowSize, 1000);
    // 1000ms 내에 한 번만 호출합니다.
    window.addEventListener('resize', throttleWithUpdateWindowSize);
    return () => {
      window.removeEventListener('resize', throttleWithUpdateWindowSize);
    };
  }, []);

  const { height, width } = dimensions;

  return (
    <Box {...basisProps}>
      <Input
        onChange={handleSearchChange}
        value={searchValue}
        placeholder="debounce example"
      />
      <Text>debounce result: {result}</Text>
      <Text mt="30px">window 사이즈를 바꿔보세요!</Text>
      <Text>throttle result</Text>
      <Text>{`height: ${height}, width: ${width}`}</Text>
    </Box>
  );
}

export default LodashPageContent;
