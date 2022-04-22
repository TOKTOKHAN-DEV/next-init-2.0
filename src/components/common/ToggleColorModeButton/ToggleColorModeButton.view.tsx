import { Button, Image } from '@chakra-ui/react';

import FloatingBox from '@components/common/FloatingBox';

interface ToggleColorModeButtonViewProps {
  colorMode: 'dark' | 'light';
  toggleColorMode: () => void;
}

export const ToggleColorModeButtonView = ({
  colorMode,
  toggleColorMode,
}: ToggleColorModeButtonViewProps) => {
  return (
    <FloatingBox position="top">
      <Button
        onClick={toggleColorMode}
        colorScheme="dark"
        w="50px"
        h="50px"
        borderRadius="full"
        p="0"
      >
        <Image
          src={
            colorMode === 'light' ? '/icons/svg/moon.svg' : '/icons/svg/sun.svg'
          }
        />
      </Button>
    </FloatingBox>
  );
};
