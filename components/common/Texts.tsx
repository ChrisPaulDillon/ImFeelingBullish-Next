import React from 'react';
import { Text, Heading, useColorMode, useColorModeValue as mode, BoxProps, Box, Flex } from '@chakra-ui/react';

export const Banner: React.FC<BoxProps> = ({ ...rest }) => {
  return (
    <Flex>
      <Heading textAlign="center" fontSize={['md', 'xl', 'xl', '2xl']} fontWeight="extrabold" {...rest}></Heading>
      <Box mt={1}>
        <span>🐂</span>
      </Box>
    </Flex>
  );
};
