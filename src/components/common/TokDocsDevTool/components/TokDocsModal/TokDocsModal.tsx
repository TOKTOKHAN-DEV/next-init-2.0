import React, { useState } from 'react';

import { Box, ModalProps } from '@chakra-ui/react';

import AppStyleViewerSection from './components/AppStyleViewerSection/AppStyleViewerSection';
import ExampleSection from './components/ExampleSection';
import TokDocsModalBasis from './components/TokDocsModalBasis';
import { TokDocsSubMenuTitle } from './types/docs';
import {
  isAppStyleViewerDocsTitle,
  isExampleDocsTitle,
} from './utils/validate-title';

interface TokDocsModalProps extends Omit<ModalProps, 'children'> {}

function TokDocsModal({ ...props }: TokDocsModalProps) {
  const [title, setTitle] = useState<TokDocsSubMenuTitle>('generated Icons');

  const getContent = () => {
    if (isAppStyleViewerDocsTitle(title))
      return <AppStyleViewerSection selectedMenu={title} />;
    if (isExampleDocsTitle(title))
      return <ExampleSection selectedMenu={title} />;
  };

  return (
    <TokDocsModalBasis
      title={title}
      setTitle={setTitle}
      content={<Box p="20px">{getContent()}</Box>}
      {...props}
    />
  );
}

export default TokDocsModal;
