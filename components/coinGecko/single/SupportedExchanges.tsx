import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';

interface ISupportExchangesProps {
  supportedExchanges: Array<string>;
}

const SupportedExchanges: React.FC<ISupportExchangesProps> = ({ supportedExchanges }) => {
  return (
    <Box mt={4}>
      <Heading fontSize="lg" textAlign="center">
        Supported Exchanges
      </Heading>
      <Flex flexGrow={1} flexWrap="wrap" justify="center" align="center" mt={2}>
        {supportedExchanges?.map((x) => (
          <Text textAlign="center" p={2}>
            {x}
          </Text>
        ))}
        )
      </Flex>
    </Box>
  );
};

export default SupportedExchanges;
