import { Box } from '@chakra-ui/react';

interface FloatingBoxProps {
  position: 'top' | 'bottom';
  children: JSX.Element;
}
const FloatingBox = ({ position, children }: FloatingBoxProps) => {
  return (
    <Box
      position="absolute"
      bottom={position === 'bottom' ? '30px' : 'none'}
      top={position === 'top' ? '30px' : 'none'}
      right="16px"
      zIndex="999"
    >
      {children}
    </Box>
  );
};

export default FloatingBox;
