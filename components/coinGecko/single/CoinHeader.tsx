import { Heading, Box, Image, Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

interface ICoinHeaderProps {
  name: string;
  symbol: string;
  siteUrl: string;
  imageUrl: string;
  description: string;
}

const CoinHeader: React.FC<ICoinHeaderProps> = ({ name, symbol, siteUrl, imageUrl, description }) => {
  return (
    <Box>
      <Flex flexDir="column">
        <Link href={siteUrl} isExternal>
          <Flex justify="center">
            <Heading textAlign="center" mr={2}>
              {name + ' - ' + symbol?.toUpperCase()}
            </Heading>
            <Image src={imageUrl} boxSize="40px" />
          </Flex>
        </Link>
        <Text textAlign="center" mt={4}>
          {description?.substr(0, description.indexOf('.'))}
        </Text>
      </Flex>
    </Box>
  );
};

export default CoinHeader;
