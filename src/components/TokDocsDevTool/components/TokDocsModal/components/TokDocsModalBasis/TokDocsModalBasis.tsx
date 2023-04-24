import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';

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
    <Modal size="5xl" isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          height="80vh"
          maxH="80vh"
          minH="80vh"
          overflow="auto"
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
        >
          <DocsHeader title={title} />
          <Flex w="100%">
            <DocsNavigation
              menuData={TOK_DOCS_MENU_DATA}
              selectedMenu={title}
              setMenu={setTitle}
            />
            <Box flexGrow={1}>{content}</Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default TokDocsModalBasis;
