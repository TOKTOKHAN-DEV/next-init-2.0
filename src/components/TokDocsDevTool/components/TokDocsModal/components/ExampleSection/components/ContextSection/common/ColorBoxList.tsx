import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

import { Colors } from '../components/ContextColorPicker/context/hooks/useSubExampleState';

type ColorBoxListProps = {
  onClick: (color: Colors) => void;
  color: Colors;
};
const ColorBoxList = ({ onClick, color }: ColorBoxListProps) => {
  return (
    <VStack justifyContent={'center'}>
      <Text>Change Box Background Color</Text>
      <HStack>
        <Button colorScheme={'red'} onClick={() => onClick('red')}>
          Red
        </Button>
        <Button colorScheme={'blue'} onClick={() => onClick('blue')}>
          Blue
        </Button>
        <Button colorScheme={'orange'} onClick={() => onClick('orange')}>
          Orange
        </Button>
      </HStack>
      <Box w={'100px'} h={'100px'} bgColor={`${color}.500`} />
    </VStack>
  );
};

export default ColorBoxList;
