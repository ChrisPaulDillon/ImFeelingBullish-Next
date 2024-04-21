import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { ImArrowUp } from 'react-icons/im';
import { Item, TrendingCoin } from '../../api/coin-gecko-api';

interface ITrendingCoinProps {
  trendingCoins: Item[];
}

const TrendingCoins: React.FC<ITrendingCoinProps> = ({ trendingCoins }) => {
  return (
    <Box p={3}>
      {trendingCoins && (
        <Box>
          <Heading textAlign="center" fontSize="3xl">
            Trending 🔥
          </Heading>
          <Flex justify="center" mt={1} wrap="wrap">
            {trendingCoins?.map((x) => (
              <Box key={x.item.id}>
                <TrendingCoinSingle trendingCoin={x.item} />
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

interface ITrendingCoinSingleProps {
  trendingCoin: TrendingCoin;
}

const TrendingCoinSingle: React.FC<ITrendingCoinSingleProps> = ({ trendingCoin }) => (
  <Box p={1} mx={1}>
    <Link href={`/token/${trendingCoin?.id}`}>
      <Flex>
        <Box as={ImArrowUp} color="green.500" pr={1} />
        <Text textAlign="center">{trendingCoin.name}</Text>
      </Flex>
    </Link>
  </Box>
);

export default TrendingCoins;
