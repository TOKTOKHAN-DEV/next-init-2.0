import React from 'react';

import { Box, ModalProps } from '@chakra-ui/react';

import { TokDocsSubMenuTitle } from './TokDocsModal.data';
import AppStyleViwerSection from './_fragments/AppStyleViwerSection/AppStyleViwerSection';
import ExampleSection from './_fragments/ExampleSection';
import TokDocsModalBasis from './_fragments/TokDocsModalBasis';
import { useTokDocsTitleValidate } from './_hooks/useTokDocsTitleValidate';

interface TokDocsModalProps extends Omit<ModalProps, 'children'> {}

function TokDocsModal({ ...props }: TokDocsModalProps) {
  const [title, setTitle] =
    React.useState<TokDocsSubMenuTitle>('gnerated Icons');

  const { isAppStyleViewerDocsTitle, isExampleDocsTitle } =
    useTokDocsTitleValidate();

  const getContent = () => {
    if (isAppStyleViewerDocsTitle(title))
      return <AppStyleViwerSection selectedMenu={title} />;
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
