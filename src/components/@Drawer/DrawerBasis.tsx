import {
  ChakraProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from '@chakra-ui/react';

interface DrawerBasisProps extends Omit<DrawerProps, 'children'> {
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: string | JSX.Element;

  headerProps?: ChakraProps;
  bodyProps?: ChakraProps;
  footerProps?: ChakraProps;
}

export default function DrawerBasis({
  header,
  body,
  footer,

  headerProps,
  bodyProps,
  footerProps,
  ...props
}: DrawerBasisProps) {
  return (
    <>
      <Drawer size="sm" placement="right" {...props}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton //
            w="40px"
            h="40px"
            onClick={props.onClose}
          />
          <DrawerHeader {...headerProps}>{header}</DrawerHeader>
          <DrawerBody {...bodyProps}>{body}</DrawerBody>
          <DrawerFooter {...footerProps}>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
