import { useState } from 'react';

import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

import { Colors } from './ContextColorPicker/context/hooks/useSubExampleState';

const StatefulColorPicker = () => {
  const [color, setColor] = useState<Colors>('red');

  const handleColor = (color: Colors) => {
    setColor(color);
  };
  return (
    <VStack justifyContent={'center'}>
      <Text>Change Box Background Color</Text>
      <HStack>
        <Button colorScheme={'red'} onClick={() => handleColor('red')}>
          Red
        </Button>
        <Button colorScheme={'blue'} onClick={() => handleColor('blue')}>
          Blue
        </Button>
        <Button colorScheme={'orange'} onClick={() => handleColor('orange')}>
          Orange
        </Button>
      </HStack>
      <Box w={'100px'} h={'100px'} bgColor={`${color}.500`} />
    </VStack>
  );
};

export default StatefulColorPicker;
