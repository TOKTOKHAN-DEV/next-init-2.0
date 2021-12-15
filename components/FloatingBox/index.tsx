import { Box } from '@chakra-ui/react';

/**
 * @see Docs https://chakra-ui.com/docs/typography/text
 */

interface Props {
  position: 'top' | 'bottom';
  children: JSX.Element;
}
const FloatingBox = ({ position, children }: Props) => {
  return (
    <Box position="absolute" bottom={position === 'bottom' ? '30px' : 'none'} top={position === 'top' ? '30px' : 'none'} right="16px" zIndex="999">
      {children}
    </Box>
  );
};

export default FloatingBox;
