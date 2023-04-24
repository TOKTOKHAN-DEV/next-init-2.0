import React from 'react';

import { useColorMode } from '@chakra-ui/color-mode';

import { ToggleColorModeButtonView } from './ToggleColorModeButton.view';

const ToggleColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ToggleColorModeButtonView
      colorMode={colorMode}
      toggleColorMode={toggleColorMode}
    />
  );
};

export default ToggleColorModeButton;
