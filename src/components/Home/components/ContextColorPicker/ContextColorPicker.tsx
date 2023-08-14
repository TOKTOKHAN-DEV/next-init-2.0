import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

import withColorPickerProvider from '@/hocs/withColorPickerProvider';

import { useSubExampleContext } from './context/useSubExampleContext';

const ContextColorPicker = () => {
  const handleColor = useSubExampleContext((ctx) => ctx.handler.handleColor);
  const color = useSubExampleContext((ctx) => ctx.state.color);

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

export default withColorPickerProvider(ContextColorPicker);
