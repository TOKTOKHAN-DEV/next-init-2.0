import React from 'react';

import { motion } from 'framer-motion';

import {
  Box,
  BoxProps,
  Center,
  ContainerProps,
  Flex,
  Text,
} from '@chakra-ui/react';

import HomeHeader from '../HomeLayout/_fragments/HomeHeader';

interface HomeLayoutProps {
  title: string | JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const ExampleLayout = ({
  //
  title,
  header = <HomeHeader />,
  footer,
  containerProps,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      {header}
      <Center
        justifyContent="start"
        flexDirection="column"
        py="60px"
        {...containerProps}
      >
        <Flex alignItems="center" mt="100px" mb="50px">
          <RotateBox
            mx="20px"
            bg="cyan.500"
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          />
          <Text color="primary.500" textStyle="xl" fontWeight="bold">
            {title}
          </Text>
          <RotateBox
            mx="20px"
            bg="secondary.500"
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </Flex>
        {content}
      </Center>
      {footer}
    </>
  );
};

export default ExampleLayout;

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);
const RotateBox = (props: Parameter<typeof MotionBox>) => (
  <MotionBox
    bg="red.500"
    w="10px"
    h="10px"
    transition={{ repeat: Infinity, duration: 2 }}
    animate={{
      repeatCount: Infinity,
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 200, 200, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    }}
    {...props}
  />
);
