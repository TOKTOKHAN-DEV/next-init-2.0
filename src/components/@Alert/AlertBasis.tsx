import { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogProps,
  Button,
  ChakraProps,
} from '@chakra-ui/react';

interface AlertBasisProps
  extends Omit<AlertDialogProps, 'leastDestructiveRef' | 'children'> {
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: JSX.Element;

  headerProps?: ChakraProps;
  bodyProps?: ChakraProps;
  footerProps?: ChakraProps;

  confirmText?: string | JSX.Element;
  cancelText?: string | JSX.Element;
  onConfirm?: () => void;
}

export default function AlertBasis({
  header,
  body,
  footer,

  headerProps,
  bodyProps,
  footerProps,

  confirmText = '확인',
  cancelText = '취소',

  onConfirm,
  ...props
}: AlertBasisProps) {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AlertDialog
      isCentered
      size="sm"
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      {...props}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold" {...headerProps}>
            {header}
          </AlertDialogHeader>

          <AlertDialogBody {...bodyProps}>{body}</AlertDialogBody>
          <AlertDialogFooter {...footerProps}>
            {footer || (
              <>
                <Button
                  colorScheme="primary"
                  ref={cancelRef}
                  onClick={props.onClose}
                >
                  {cancelText}
                </Button>
                <Button colorScheme="secondary" onClick={onConfirm} ml={3}>
                  {confirmText}
                </Button>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
