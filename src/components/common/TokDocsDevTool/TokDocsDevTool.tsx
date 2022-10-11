import { Button, useDisclosure } from '@chakra-ui/react';

import TokDocsModal from '@components/common/TokDocsDevTool/_fragments/TokDocsModal';

function TokDocsDevTools() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    // Provide the client to your App
    <>
      <Button onClick={onOpen} position="fixed" bottom="5%" right="5%">
        TOK DOCS
      </Button>
      <TokDocsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default TokDocsDevTools;
