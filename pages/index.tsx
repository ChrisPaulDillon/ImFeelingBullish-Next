import { Box, Flex, Image, Spinner, Text, useInterval } from '@chakra-ui/react';
import { useAxios } from '../hooks/useAxios';
import { GetAllCoinsUrl, ICGCoin } from '../api/coinGecko';
import React, { useEffect, useState } from 'react';
import MarketTable, { IMarketTableRow } from '../components/coinGecko/MarketTable';
import convertNumberToName from '../util/NumberConverter';
import useScreenSizes from '../hooks/useScreenSizes';
import axios from 'axios';
import MarketTimeoutCounter from '../components/coinGecko/MarketTimeoutCounter';

const MARKET_CAP_RANK_MIN = 50;
const MARKET_CAP_RANK_MAX = 300;
const MARKET_CAP_MIN = 5000000;

export const Index = () => {
  //const { data, loading } = useAxios<ICGCoin[]>(GetAllCoinsUrl());
  const [data, setData] = useState<ICGCoin[]>([]);
  const [marketData, setMarketData] = useState<IMarketTableRow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { SCREEN_MOBILE } = useScreenSizes();

  const RefreshRequest = async (): Promise<ICGCoin[]> => {
    try {
      setLoading(true);
      const response = await axios.get(GetAllCoinsUrl());
      setData(response.data);
    } catch (err) {
      return err?.response?.data;
    }
    setLoading(false);
  };

  useEffect(() => {
    RefreshRequest();
  }, []);

  useInterval(() => {
    if (marketData.length <= 0) {
      RefreshRequest();
    }
  }, 5000);

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
              <Text mb={1} fontWeight={400} minW="200px">
                {x.name + '-' + x.symbol.toUpperCase()}
              </Text>
            </Flex>
          ),
          price: `$${x.current_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`,
          marketCapRank: x.market_cap_rank,
          marketCap: `$${convertNumberToName(x.market_cap).toString()}`,
          dailyChange: `${x.market_cap_change_percentage_24h}%`,
        }))
      );
    }
  }, [data, SCREEN_MOBILE]);

  if (loading) {
    return <Spinner color="green.500" alignItems="center" justifyContent="center" />;
  }

  return (
    <Box>
      {marketData.length <= 0 && <MarketTimeoutCounter data={data} />}
      {marketData.length > 0 && <MarketTable marketData={marketData} />}
    </Box>
  );
};

export default Index;