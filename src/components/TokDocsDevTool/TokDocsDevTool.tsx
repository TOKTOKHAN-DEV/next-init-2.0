import { Button, useDisclosure } from '@chakra-ui/react';

import TokDocsModal from '@/components/TokDocsDevTool/components/TokDocsModal';

function TokDocsDevTools() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  if (process.env.NODE_ENV === 'production') return null;

  return (
    // Provide the client to your App
    <>
      <Button
        size={'xs'}
        onClick={onOpen}
        position="fixed"
        bottom="5%"
        right="5%"
      >
        TOK DOCS
      </Button>
      <TokDocsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default TokDocsDevTools;
