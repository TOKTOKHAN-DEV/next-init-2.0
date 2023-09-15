import {
  Badge,
  Button,
  ChakraProps,
  Checkbox,
  Container,
  HStack,
  Input,
  SimpleGrid,
  Spinner,
  Tooltip,
  VStack,
} from '@chakra-ui/react';

import SocialButton from '@/components/SocialButton/SocialButton';

import ChakraComponentLayout from './layout/ChakraComponentLayout';

interface ChakraThemeSectionProps extends ChakraProps {}

const ChakraThemeSection = ({ ...basisProps }: ChakraThemeSectionProps) => {
  return (
    <Container variant={'chakra'} {...basisProps}>
      <VStack spacing={'50px'} alignItems={'flex-start'}>
        <ChakraComponentLayout
          title={'Button'}
          content={
            <SimpleGrid columns={3} spacing={10}>
              <Button>Button</Button>
              <Button colorScheme={'secondary'}>Button</Button>
              <SocialButton
                data={{ link: '#', social: 'google' }}
                size={'md'}
              />
              <SocialButton data={{ link: '#', social: 'kakao' }} size={'md'} />
              <SocialButton data={{ link: '#', social: 'naver' }} size={'md'} />
              <SocialButton data={{ link: '#', social: 'apple' }} size={'md'} />
              <SocialButton
                data={{ link: '#', social: 'facebook' }}
                size={'md'}
              />
              <HStack>
                <SocialButton
                  data={{ link: '#', social: 'kakao' }}
                  size={'sm'}
                />
                <SocialButton
                  data={{ link: '#', social: 'naver' }}
                  size={'sm'}
                />

                <SocialButton
                  data={{ link: '#', social: 'apple' }}
                  size={'sm'}
                />
                <SocialButton
                  data={{ link: '#', social: 'facebook' }}
                  size={'sm'}
                />
              </HStack>
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
          title={'Checkbox'}
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
        <ChakraComponentLayout
          title={'Badge'}
          content={
            <SimpleGrid columns={4} spacing={10}>
              <Badge>Default</Badge>
              <Badge colorScheme="success">Success</Badge>
              <Badge colorScheme="warning">Warning</Badge>
              <Badge colorScheme="secondary">New</Badge>
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
      </VStack>
    </Container>
  );
};

export default ChakraThemeSection;
