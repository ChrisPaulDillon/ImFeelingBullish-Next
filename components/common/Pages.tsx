import { Box } from '@chakra-ui/react';
import React from 'react';

export const Page: React.FC = ({ children, ...rest }) => {
  return (
    <Box
      mt={2}
      position="relative"
      height="85vh"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      overflowY="scroll"
      p={1}
      w="100%"
      css={{
        scrollSnapType: 'x mandatory',
        '::-webkit-scrollbar': { width: 0 },
        '-msOverflowStyle': 'none',
        scrollbarWidth: 'none',
      }}
      {...rest}>
      {children}
    </Box>
  );
};
