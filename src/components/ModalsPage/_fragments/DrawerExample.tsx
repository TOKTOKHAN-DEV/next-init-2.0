import React from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Input,
} from '@chakra-ui/react';

interface DrawerExampleProps extends DrawerProps {}

function DrawerExample(props: Omit<DrawerExampleProps, 'children'>) {
  return (
    <Drawer placement="bottom" {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>
        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerExample;
