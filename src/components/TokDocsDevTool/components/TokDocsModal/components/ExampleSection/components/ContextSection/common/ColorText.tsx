import { Text } from '@chakra-ui/react';

import { useSubExampleContext } from '../components/ContextColorPicker/context/useSubExampleContext';

const ColorText = ({ color }: { color?: string }) => {
  const contextColor = useSubExampleContext((ctx) => ctx.state?.color);

  return (
    <Text color={color || contextColor} textStyle={'title'}>
      {color?.toLocaleUpperCase() || contextColor.toUpperCase()}
    </Text>
  );
};

export default ColorText;
