import React from 'react';
//TODO: 개발기간이 끝나면 제거해주세요 "yarn remove react-syntax-highlighter"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
  Accordion,
  Box,
  BoxProps,
  Center,
  Text,
  useTheme,
} from '@chakra-ui/react';

import ThemeViewerAccordionItem from './ThemeViewerAccordionItem';
import ColorSection from './sections/ColorSection';

const codeStyle = atomOneDark;

interface ThemeViewerPageContentProps extends BoxProps {}

function ThemeViewerPageContent({
  ...basisProps
}: ThemeViewerPageContentProps) {
  const theme = useTheme();
  console.log({ theme });
  const {
    //
    colors,
    breakpoints,
    space,
    shadows,
    components,
  } = theme;

  return (
    <Box py="40px" {...basisProps}>
      <Center p="40px">
        <Text textStyle="lg" fontWeight="bold">
          준비 중 입니다
        </Text>
      </Center>
      <Accordion allowToggle>
        <ThemeViewerAccordionItem //
          title="COLORS"
          content={<ColorSection colors={colors} />}
        />
        <ThemeViewerAccordionItem //
          title="BREAK POINTS"
          code={
            <SyntaxHighlighter language="json" style={codeStyle}>
              {JSON.stringify(breakpoints, null, 4)}
            </SyntaxHighlighter>
          }
        />
        <ThemeViewerAccordionItem //
          title="SPACE"
          code={
            <SyntaxHighlighter language="json" style={codeStyle}>
              {JSON.stringify(space, null, 4)}
            </SyntaxHighlighter>
          }
        />
        <ThemeViewerAccordionItem //
          title="SHADOWS"
          code={
            <SyntaxHighlighter language="json" style={codeStyle}>
              {JSON.stringify(shadows, null, 4)}
            </SyntaxHighlighter>
          }
        />
        <ThemeViewerAccordionItem //
          title="COMPONENTS"
          code={
            <SyntaxHighlighter language="json" style={codeStyle}>
              {JSON.stringify(components, null, 4)}
            </SyntaxHighlighter>
          }
        />
      </Accordion>

      <Text>{}</Text>
    </Box>
  );
}

export default ThemeViewerPageContent;
