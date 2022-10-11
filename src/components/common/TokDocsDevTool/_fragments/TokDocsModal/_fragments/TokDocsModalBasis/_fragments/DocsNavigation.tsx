import React from 'react';

import { Box, ChakraProps, Flex } from '@chakra-ui/react';

import {
  TokDocsMenuType,
  TokDocsSubMenuTitle,
} from '@components/common/TokDocsDevTool/_fragments/TokDocsModal/TokDocsModal.data';

import DocsMenuList from './DocsMenuList';

interface DocsNavigationProps extends ChakraProps {
  menuData: TokDocsMenuType[];
  selectedMenu: string;
  setMenu: (menu: TokDocsSubMenuTitle) => void;
}

const DocsNavigation = ({
  menuData,
  setMenu,
  selectedMenu,
  ...props
}: DocsNavigationProps) => {
  return (
    <Flex direction="column" position="relative" w="200px" {...props}>
      <Box w="100%">
        <DocsMenuList
          title="In App"
          menuData={menuData.filter((d) => d.kind === 'IN APP')}
          selectedMenu={selectedMenu}
          setMenu={setMenu}
        />
        <DocsMenuList
          title="Rules"
          menuData={menuData.filter((d) => d.kind === 'RULES')}
          selectedMenu={selectedMenu}
          setMenu={setMenu}
        />
      </Box>
    </Flex>
  );
};

export default DocsNavigation;
