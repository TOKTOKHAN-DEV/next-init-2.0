import { Box, Flex, ModalProps } from '@chakra-ui/react';

import ModalBasis from '@/components/@Modal/ModalBasis';

import { TOK_DOCS_MENU_DATA } from '../../constants/docs';
import { TokDocsSubMenuTitle } from '../../types/docs';
import DocsHeader from './components/DocsHeader';
import DocsNavigation from './components/DocsNavigation';

interface TokDocsModalBasisProps extends Omit<ModalProps, 'children'> {
  title: string;
  content: JSX.Element | JSX.Element[];
  setTitle: (title: TokDocsSubMenuTitle) => void;
}
function TokDocsModalBasis({
  title,
  content,
  setTitle,
  ...props
}: TokDocsModalBasisProps) {
  return (
    <ModalBasis
      size="5xl"
      header={<DocsHeader title={title} />}
      body={
        <Flex w="100%" overflow="auto" h="60vh">
          <DocsNavigation
            menuData={TOK_DOCS_MENU_DATA}
            selectedMenu={title}
            setMenu={setTitle}
          />
          <Box flexGrow={1}>{content}</Box>
        </Flex>
      }
      {...props}
    />
  );
}

export default TokDocsModalBasis;
