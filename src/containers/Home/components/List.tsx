import React from 'react';

import {
  Box,
  BoxProps,
  Button,
  ChakraProps,
  Flex,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';

import { useFaqListQuery } from '@/swagger/Faq/Faq.query';

interface ListProps extends ChakraProps {}

const List = ({ ...basisProps }: ListProps) => {
  const toast = useToast();
  const { data } = useFaqListQuery({
    options: {
      retry: 1,
      suspense: true,
      useErrorBoundary: true,
      onError: () => {
        toast({ description: 'error' });
        return;
      },
    },
  });

  return (
    <Box {...basisProps}>
      {data?.map((item) => {
        return <Text key={item.id}>{item.title}</Text>;
      })}
    </Box>
  );
};

export default List;
