import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';

import { Box, Center, Spinner, Text } from '@chakra-ui/react';

import DataLoadingBoundary from '@/components/DataLoadingBoundary';

const List = dynamic(() => import('@/containers/Home/components/List'), {
  ssr: false,
  suspense: true,
});

function Home() {
  return (
    <Box>
      <Text>HomePage</Text>
      <DataLoadingBoundary
        onError={<Text>error</Text>}
        onLoading={
          <Center>
            <Spinner />
          </Center>
        }
      >
        <List />
      </DataLoadingBoundary>
    </Box>
  );
}

export default Home;
