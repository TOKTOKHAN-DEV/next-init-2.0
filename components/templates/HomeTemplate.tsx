import React from 'react';

import { Box } from '@chakra-ui/react';

interface HomeTemplateProps {
  header: JSX.Element;
}

const HomeTemplate = ({ header }: HomeTemplateProps) => {
  return <Box flexGrow={1}>{header}</Box>;
};

export default HomeTemplate;
