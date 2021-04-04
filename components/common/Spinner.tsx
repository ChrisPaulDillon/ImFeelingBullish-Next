import React from 'react';
import { Flex, Spinner as ChakraSpinner } from '@chakra-ui/react';

const Spinner = () => {
  return (
    <Flex align="center" justify="center">
      <ChakraSpinner color="green.500" alignItems="center" justifyContent="center" />
    </Flex>
  );
};

export default Spinner;
