import { Text as ChakraText, TextProps } from '@chakra-ui/react';

/**
 * @see Docs https://chakra-ui.com/docs/typography/text
 */

const Text = ({ as = 'p', textStyle = 'md', fontWeight = 'medium', ...props }: TextProps) => {
  return <ChakraText as={as} textStyle={textStyle} fontWeight={fontWeight} {...props} />;
};

export default Text;
