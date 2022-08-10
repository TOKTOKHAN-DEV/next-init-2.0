import React from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

interface HomePageContentProps extends BoxProps {}

function HomePageContent({ ...basisProps }: HomePageContentProps) {
  return <Box {...basisProps}>Hello World</Box>;
}

export default HomePageContent;
