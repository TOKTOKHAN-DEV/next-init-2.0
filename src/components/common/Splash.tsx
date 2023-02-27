import { Center, ChakraProps, Spinner } from '@chakra-ui/react';

function Splash(props: ChakraProps) {
  return (
    <Center w="100vw" h="100vh" bg="gray.100" {...props}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.500"
        size="xl"
      />
    </Center>
  );
}

export default Splash;
