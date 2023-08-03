import { motion } from 'framer-motion';

import { Box, BoxProps, Center, FlexProps, Text } from '@chakra-ui/react';

import { PropsOf } from '@/types/module/react/props-of';

interface DocsHeaderProps extends FlexProps {
  title: string;
}
function DocsHeader({ title, ...props }: DocsHeaderProps) {
  return (
    <Center alignItems="center" mb="50px" {...props}>
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
    </Center>
  );
}

export default DocsHeader;

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);
const RotateBox = (props: PropsOf<typeof MotionBox>) => (
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
