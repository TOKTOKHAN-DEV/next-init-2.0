import React from 'react';

import {
  AccordionButton,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Box, Text } from '@chakra-ui/layout';

interface ThemeViewerAccordionItemProps
  extends Omit<AccordionItemProps, 'title'> {
  title?: string | JSX.Element;
  content?: JSX.Element;
  code?: JSX.Element;
}

const ThemeViewerAccordionItem = ({
  title,
  content,
  code,
  ...baseProps
}: ThemeViewerAccordionItemProps) => {
  return (
    <AccordionItem {...baseProps}>
      <AccordionButton fontWeight="bold">
        <Text textStyle="lg">{title}</Text>
      </AccordionButton>
      <AccordionPanel as="section">
        {!!code && (
          <Box>
            <Text mb="20px" fontSize="20px" fontWeight="bold" color="gray.600">
              CODE
            </Text>
            {code}
          </Box>
        )}
        {content}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default ThemeViewerAccordionItem;
