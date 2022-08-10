import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Accordion } from '@chakra-ui/react';

import ThemeViewerAccordionItem from '../ThemeViewerAccordionItem';

interface ComponentSectionProps {
  components: Record<string, unknown>;
}
const codeStyle = atomOneDark;

const ComponentSection = ({ components }: ComponentSectionProps) => {
  return (
    <Accordion allowToggle>
      {Object.keys(components).map((key, idx) => {
        const component = components[key];
        return (
          <ThemeViewerAccordionItem //
            key={idx}
            title={key}
            code={
              <SyntaxHighlighter language="json" style={codeStyle}>
                {JSON.stringify(component, null, 4)}
              </SyntaxHighlighter>
            }
          />
        );
      })}
    </Accordion>
  );
};

export default ComponentSection;
