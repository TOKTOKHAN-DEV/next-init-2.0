import React from 'react';

import { Box } from '@chakra-ui/react';

interface ContentTemplateProps {
  header?: JSX.Element;
  content: JSX.Element;
}

const ContentTemplate = ({ header, content }: ContentTemplateProps) => {
  return (
    <>
      <Box flexGrow={1}>{header}</Box>
      <Box>{content}</Box>
    </>
  );
};

export default ContentTemplate;
