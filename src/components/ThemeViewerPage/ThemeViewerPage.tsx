import React from 'react';
//TODO: 개발기간이 끝나면 제거해주세요 "yarn remove react-syntax-highlighter"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import {
  Accordion,
  Box,
  BoxProps,
  Center,
  Text,
  useTheme,
} from '@chakra-ui/react';

import ThemeViewerAccordionItem from './_fragments/ThemeViewerAccordionItem';
import ColorSection from './_fragments/sections/ColorSection';
import ComponentSection from './_fragments/sections/ComponentSection';
import FontWeightSection from './_fragments/sections/FontWeightSection';
import LetterSpacingSection from './_fragments/sections/LetterSpacingSection';
import RadiusSection from './_fragments/sections/RadiusSection';
import ShadowSection from './_fragments/sections/ShadowSection';
import SpaceSection from './_fragments/sections/SpaceSection';
import TextStyleSection from './_fragments/sections/TextStyleSection';

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
    letterSpacings,
    radii,
    fontWeights,
    textStyles,
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
          content={<SpaceSection spaces={space} />}
        />
        <ThemeViewerAccordionItem //
          title="RADIUS"
          content={<RadiusSection radii={radii} />}
        />
        <ThemeViewerAccordionItem //
          title="SHADOWS"
          code={
            <SyntaxHighlighter language="json" style={codeStyle}>
              {JSON.stringify(shadows, null, 4)}
            </SyntaxHighlighter>
          }
          content={<ShadowSection boxShadows={shadows} />}
        />
        <ThemeViewerAccordionItem //
          title="LATTER SPACING"
          content={<LetterSpacingSection letterSpacings={letterSpacings} />}
        />
        <ThemeViewerAccordionItem //
          title="FONT WEIGHT"
          content={<FontWeightSection fontWeights={fontWeights} />}
        />
        <ThemeViewerAccordionItem //
          title="TEXT STYLE"
          code={
            <SyntaxHighlighter language="json" style={codeStyle}>
              {JSON.stringify(textStyles, null, 4)}
            </SyntaxHighlighter>
          }
          content={<TextStyleSection textStyles={textStyles} />}
        />
        <ThemeViewerAccordionItem //
          title="COMPONENTS"
          content={<ComponentSection components={components} />}
        />
      </Accordion>
    </Box>
  );
}

export default ThemeViewerPageContent;
