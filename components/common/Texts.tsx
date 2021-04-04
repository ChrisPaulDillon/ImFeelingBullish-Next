import React from 'react';
import { Text, Heading, useColorMode, useColorModeValue as mode, BoxProps } from '@chakra-ui/react';

export const Banner: React.FC<BoxProps> = ({ ...rest }) => {
  return <Heading textAlign="center" fontSize={['md', 'xl', 'xl', '2xl']} fontWeight="extrabold" {...rest}></Heading>;
};
