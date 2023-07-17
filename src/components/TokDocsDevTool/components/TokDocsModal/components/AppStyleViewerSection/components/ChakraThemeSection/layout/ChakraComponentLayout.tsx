import { ReactNode } from 'react';

import { Heading, VStack } from '@chakra-ui/react';

interface ChakraComponentLayoutProps {
  title: string;
  content: ReactNode;
}
const ChakraComponentLayout = ({
  title,
  content,
}: ChakraComponentLayoutProps) => {
  return (
    <VStack
      gap={'20px'}
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
    >
      <Heading size={'lg'}>{title}</Heading>
      {content}
    </VStack>
  );
};

export default ChakraComponentLayout;
