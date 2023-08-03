import {
  ChakraProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';

interface ModalBasisProps extends Omit<ModalProps, 'children'> {
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: string | JSX.Element;

  headerProps?: ChakraProps;
  bodyProps?: ChakraProps;
  footerProps?: ChakraProps;
}

export default function ModalBasis({
  header,
  body,
  footer,

  headerProps,
  bodyProps,
  footerProps,
  ...props
}: ModalBasisProps) {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader {...headerProps}>{header}</ModalHeader>
        <ModalBody {...bodyProps}>{body}</ModalBody>
        <ModalFooter {...footerProps}> {footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
}
