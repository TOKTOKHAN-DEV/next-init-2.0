import { Button, Image, useColorMode } from '@chakra-ui/react';
import FloatingBox from 'components/atoms/FloatingBox';

export const ToggleColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FloatingBox position="top">
      <Button onClick={toggleColorMode} colorScheme="dark" w="50px" h="50px" borderRadius="full" p="0">
        <Image src={colorMode === 'light' ? '/icons/moon.svg' : '/icons/sun.svg'} />
      </Button>
    </FloatingBox>
  );
};
