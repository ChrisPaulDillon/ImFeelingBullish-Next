import { Box, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import { useAxios } from '../hooks/useAxios';
import { GetAllCoinsUrl, ICGCoin } from '../api/coinGecko';
import React, { useEffect, useState } from 'react';
import MarketTable, { IMarketTableRow } from '../components/coinGecko/MarketTable';
import convertNumberToName from '../util/NumberConverter';
import useScreenSizes from '../hooks/useScreenSizes';

const MARKET_CAP_RANK_MIN = 50;
const MARKET_CAP_RANK_MAX = 300;
const MARKET_CAP_MIN = 5000000;

export const Index = () => {
  const { data, loading } = useAxios<ICGCoin[]>(GetAllCoinsUrl());
  const [marketData, setMarketData] = useState<IMarketTableRow[]>([]);
  const { SCREEN_MOBILE } = useScreenSizes();

  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (x) =>
          x.market_cap_rank < MARKET_CAP_RANK_MAX && x.market_cap_rank >= MARKET_CAP_RANK_MIN && x.market_cap > MARKET_CAP_MIN && x.current_price < 1
      );
      setMarketData(
        filteredData.map((x) => ({
          name: (
            <Flex justify="center" align="center">
              <Box mr={1}>
                <Image src={x.image} boxSize="15px" />
              </Box>
              {!SCREEN_MOBILE ? (
                <Text mb={1} fontWeight={400} minW="200px">
                  {x.name + '-' + x.symbol.toUpperCase()}
                </Text>
              ) : (
                <Text>{x.symbol.toUpperCase()}</Text>
              )}
            </Flex>
          ),
          price: `$${x.current_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`,
          marketCapRank: x.market_cap_rank,
          marketCap: `$${convertNumberToName(x.market_cap).toString()}`,
          dailyChange: `${x.market_cap_change_percentage_24h}%`,
          symbol: x.symbol.toUpperCase(),
        }))
      );
    }
  }, [data, SCREEN_MOBILE]);

  if (marketData.length <= 0 || marketData.length <= 0) {
    return <Spinner color="green.500" />;
  }

  return <MarketTable marketData={marketData} />;
};

export default Index;
