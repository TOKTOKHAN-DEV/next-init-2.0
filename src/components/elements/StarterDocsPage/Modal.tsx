import React from 'react';

import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';

const MyModal = ({ ...basisProps }: Omit<ModalProps, 'children'>) => {
  return (
    <Modal {...basisProps}>
      <ModalBody>
        <ModalOverlay />
        <ModalContent>hi</ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default MyModal;

const Basis = Box;
