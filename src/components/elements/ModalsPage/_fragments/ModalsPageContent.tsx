import React from 'react';

import { Button, SimpleGrid } from '@chakra-ui/react';

import SummaryCard from '@components/common/SummaryCard';
import useOpenModalByQueryString from '@components/hooks/useOpenModalByQueryString';

import DrawerExample from './DrawerExample';
import ModalExample from './ModalExample';

function ModalsPageContent() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenBottomDrawer, setIsOpenBottomDrawer] = React.useState(false);

  const { closeModal, openModal } = useOpenModalByQueryString({
    modal: setIsOpenModal,
    drawer: setIsOpenBottomDrawer,
  });

  return (
    <>
      <SimpleGrid spacing="20px" columns={2} w="700px" h="fit-content">
        <Button
          h="140px"
          w="100%"
          variant="unstyled"
          onClick={() => openModal('modal')}
        >
          <SummaryCard
            h="100%"
            title="open modal"
            description="by query-string"
          />
        </Button>
        <Button
          h="140px"
          w="100%"
          variant="unstyled"
          onClick={() => openModal('drawer')}
        >
          <SummaryCard
            h="100%"
            title="open Bottom Drawer"
            description="by query-string"
          />
        </Button>
      </SimpleGrid>
      <ModalExample isOpen={isOpenModal} onClose={() => closeModal('modal')} />
      <DrawerExample
        isOpen={isOpenBottomDrawer}
        onClose={() => closeModal('drawer')}
      />
    </>
  );
}

export default ModalsPageContent;
