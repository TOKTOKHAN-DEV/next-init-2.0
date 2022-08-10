import React from 'react';

import { Button, SimpleGrid } from '@chakra-ui/react';

import useAppStore from '@features/useAppStore';

import SummaryCard from '@components/common/SummaryCard';

import DrawerExample from './_fragments/DrawerExample';
import ModalExample from './_fragments/ModalExample';

import { useGlobalModalHandlerContext } from 'contexts/modal/useGlobalModalHandler.context';
import useOpenModalByQueryParams from 'hooks/useOpenModalByQueryParams';

function ModalsPage() {
  const isOpenGlobalModal = useAppStore(
    (store) => store.MODAL.isOpenGlobalModal,
  );
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenBottomDrawer, setIsOpenBottomDrawer] = React.useState(false);

  const { closeModal, openModal } = useOpenModalByQueryParams({
    modal: setIsOpenModal,
    drawer: setIsOpenBottomDrawer,
  });

  const { closeGlobalModal, openGlobalModal } = useGlobalModalHandlerContext();

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
          onClick={() => openGlobalModal('global-modal')}
        >
          <SummaryCard
            h="100%"
            title="open global modal"
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
      <ModalExample
        title="글로벌 모달"
        isOpen={isOpenGlobalModal}
        onClose={() => closeGlobalModal('global-modal')}
      />
      <ModalExample
        title="모달"
        isOpen={isOpenModal}
        onClose={() => closeModal('modal')}
      />
      <DrawerExample
        isOpen={isOpenBottomDrawer}
        onClose={() => closeModal('drawer')}
      />
    </>
  );
}

export default ModalsPage;
