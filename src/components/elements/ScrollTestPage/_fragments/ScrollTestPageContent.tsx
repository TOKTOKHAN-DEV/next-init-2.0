import React from 'react';

import { Box, ChakraProps, Heading, Text } from '@chakra-ui/react';

import useScrollSection from '@components/hooks/useScrollSection';
import useScrollIsShow from '@components/hooks/useScrollIsShow';

interface ScrollTestPageContentProps extends ChakraProps {}

function ScrollTestPageContent({ ...basisProps }: ScrollTestPageContentProps) {
  const parentsRef = React.useRef<HTMLDivElement | null>(null);
  const section1Ref = React.useRef<HTMLDivElement | null>(null);
  const section2Ref = React.useRef<HTMLDivElement | null>(null);
  const section3Ref = React.useRef<HTMLDivElement | null>(null);
  const section4Ref = React.useRef<HTMLDivElement | null>(null);
  const section5Ref = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLParagraphElement | null>(null);

  const { ref: text1Ref, isShow: text1IsShow } =
    useScrollIsShow<HTMLParagraphElement>(0.8);

  useScrollSection({
    parentsRef,
    targetRef: section1Ref,
    onProgress: ({ helper }) => {
      const text = textRef.current;
      if (!text) return;
      helper({
        start: 0.2,
        end: 1,
        inOutPoint: 0.6,
        onIn: ({ progressOnIn }) => {
          text.style.opacity = `${progressOnIn}`;
        },
        onOut: ({ progressOnOut }) => {
          text.style.opacity = `${1 - progressOnOut}`;
        },
      });
    },
  });

  useScrollSection({
    parentsRef,
    targetRef: section2Ref,
    onProgress: ({ progress }) => {
      console.log(2, { progress });
    },
  });

  useScrollSection({
    parentsRef,
    targetRef: section3Ref,
    onProgress: ({ progress }) => {
      console.log(3, { progress });
    },
  });

  useScrollSection({
    parentsRef,
    targetRef: section4Ref,
    onProgress: ({ progress }) => {
      console.log(4, { progress });
    },
  });

  useScrollSection({
    parentsRef,
    targetRef: section5Ref,
    onProgress: ({ progress }) => {
      console.log(5, { progress });
    },
  });

  return (
    <Box ref={parentsRef} {...basisProps}>
      <Box h="500vh" ref={section1Ref} bg="red">
        <Heading opacity="0" position="fixed" top="50%" ref={textRef}>
          Section 1
        </Heading>
        1
      </Box>
      <Box h="600px" ref={section2Ref} bg="yellow">
        <Text
          fontSize="2em"
          pt="5em"
          ref={text1Ref}
          opacity={text1IsShow ? 1 : 0}
          transition="all 2s ease-in-out 0s"
          transform={`translate(0px, ${text1IsShow ? 0 : 20}px)`}
        >
          3
        </Text>
      </Box>
      <Box h="500vh" ref={section3Ref} bg="blue">
        <h1>2</h1>
      </Box>
      <Box h="500vh" ref={section4Ref} bg="green">
        4
      </Box>
      <Box h="500vh" ref={section5Ref} bg="pink">
        5
      </Box>
    </Box>
  );
}

export default ScrollTestPageContent;
