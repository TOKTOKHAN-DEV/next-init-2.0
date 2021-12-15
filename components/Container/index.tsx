import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

/**
 * @see Docs https://chakra-ui.com/docs/typography/text
 */

const Container = ({ maxW = ['100%', '780px', '980px', '1280px', '1760px'], px = '15px', m = 'auto', ...props }: ContainerProps) => {
  return <ChakraContainer maxW={maxW} px={px} m={m} {...props} />;
};

export default Container;
