import React from 'react';

import {
  Badge,
  Box,
  Button,
  ChakraProps,
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Spinner,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';

import ChakraComponentLayout from './layout/ChakraComponentLayout';

interface ChakraUiProps extends ChakraProps {}

function ChakraUi({ ...basisProps }: ChakraUiProps) {
  return (
    <Container {...basisProps} py={'100px'}>
      <VStack spacing={'50px'} alignItems={'flex-start'}>
        <ChakraComponentLayout
          title={'Button'}
          content={
            <SimpleGrid columns={4} spacing={10}>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </SimpleGrid>
          }
        />
        <ChakraComponentLayout
          title={'Input'}
          content={
            <SimpleGrid columns={4} spacing={10}>
              <Input placeholder="extra small size" size="xs" />
              <Input placeholder="small size" size="sm" />
              <Input placeholder="medium size" size="md" />
              <Input placeholder="large size" size="lg" />
            </SimpleGrid>
          }
        />
        <ChakraComponentLayout
          title={'Badge'}
          content={
            <SimpleGrid columns={4} spacing={10}>
              <Badge>Default</Badge>
              <Badge colorScheme="green">Success</Badge>
              <Badge colorScheme="red">Removed</Badge>
              <Badge colorScheme="purple">New</Badge>
            </SimpleGrid>
          }
        />
        <ChakraComponentLayout
          title={'Spinner'}
          content={
            <SimpleGrid columns={4} spacing={10}>
              <Spinner size="xs" />
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </SimpleGrid>
          }
        />
        <ChakraComponentLayout
          title={'Tooltip'}
          content={
            <SimpleGrid columns={4} spacing={10}>
              <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
                Hover me
              </Tooltip>
              <Tooltip
                hasArrow
                label="Search places"
                bg="gray.300"
                color="black"
              >
                Hover me
              </Tooltip>
            </SimpleGrid>
          }
        />
        <ChakraComponentLayout
          title={'Spinner'}
          content={
            <SimpleGrid columns={4} spacing={10}>
              <Checkbox isDisabled>Checkbox</Checkbox>
              <Checkbox isDisabled defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox colorScheme="red" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Checkbox
              </Checkbox>
            </SimpleGrid>
          }
        />
      </VStack>
    </Container>
  );
}

export default ChakraUi;
