import React from 'react';

import { useTheme } from '@chakra-ui/react';

import { AppStyleViewerDocsType } from '../../types/docs';
import ColorSection from './components/ColorSection';
import GeneratedIconSection from './components/GeneratedIconSection';

interface AppStyleViewerSectionProps {
  selectedMenu: AppStyleViewerDocsType;
}

function AppStyleViewerSection({ selectedMenu }: AppStyleViewerSectionProps) {
  const theme = useTheme();
  const { semanticTokens } = theme;

  return (
    <>
      {selectedMenu === 'generated Icons' && <GeneratedIconSection />}
      {selectedMenu === 'colors' && (
        <ColorSection colors={semanticTokens.colors} />
      )}
    </>
  );
}

export default AppStyleViewerSection;
