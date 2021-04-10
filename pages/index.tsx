import { Box, Flex, Heading, Image, Input, Link, Text, useInterval } from '@chakra-ui/react';
import { GetAllCoinsUrl, GetTrendingCoinsUrl, ICGCoin, TrendingCoin, TrendingResult } from '../api/coinGecko';
import React, { useEffect, useState } from 'react';
import MarketTable, { IMarketTableRow } from '../components/coinGecko/MarketTable';
import convertNumberToName from '../util/NumberConverter';
import useScreenSizes from '../hooks/useScreenSizes';
import axios from 'axios';
import MarketTimeoutCounter from '../components/coinGecko/MarketTimeoutCounter';
import Spinner from '../components/common/Spinner';
import { PageContent, PageHead } from '../components/common/Pages';
import CoinMobileContainer from '../components/coinGecko/CoinMobileContainer';
import FilterForm from '../components/coinGecko/FilterForm';
import { useAxios } from '../hooks/useAxios';
import TrendingCoins from '../components/coinGecko/TrendingCoins';

const MARKET_CAP_RANK_MIN = 50;
const MARKET_CAP_RANK_MAX = 400;
const MARKET_CAP_MIN = 5000000;

export const Index = () => {
  const { data: trendingData, loading: trendLoading } = useAxios<TrendingResult>(GetTrendingCoinsUrl());
  const [data, setData] = useState<ICGCoin[]>([]);
  const [marketData, setMarketData] = useState<IMarketTableRow[]>([]);
  const [filteredMarketData, setFilteredMarketData] = useState<IMarketTableRow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
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

  useEffect(() => {
    if (searchTerm.length > 0) {
      setFilteredMarketData(
        marketData.filter((x) => x.name.toString().toLowerCase().includes(searchTerm) || x.symbol.toString().toLowerCase().includes(searchTerm))
      );
    } else {
      setFilteredMarketData([]);
    }
  }, [searchTerm]);

  useInterval(() => {
    if (marketData.length <= 0) {
      RefreshRequest();
    }
  }, 5000);

  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (x) =>
          x.market_cap_rank < MARKET_CAP_RANK_MAX &&
          x.market_cap_rank >= MARKET_CAP_RANK_MIN &&
          x.market_cap > MARKET_CAP_MIN &&
          x.current_price < 1 &&
          (x.total_volume / x.market_cap) * 100 >= 10 &&
          !x.name.includes('Finance') &&
          !x.name.includes('USD')
      );
      setMarketData(
        filteredData.map((x) => ({
          name: x.name,
          symbol: x.symbol,
          displayName: (
            <Flex justify="center" align="center" minW="300px">
              <Box mr={1}>
                <Image src={x.image} boxSize="15px" />
              </Box>
              <Link href={`/token/${x.id}`}>
                <Text mb={1} fontWeight={400}>
                  {x.name + '-' + x.symbol.toUpperCase()}
                </Text>
              </Link>
            </Flex>
          ),
          price: `$${x.current_price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`,
          marketCapRank: x.market_cap_rank,
          marketCap: `$${convertNumberToName(x.market_cap)?.toString()}`,
          dailyChange: `${x.market_cap_change_percentage_24h}%`,
          volumeOverMarketcap: Math.round((x.total_volume / x.market_cap) * 100) + `%`,
          high_24h: `$${x.high_24h}`,
          low_24h: `$${x.low_24h}`,
        }))
      );
    }
  }, [data, SCREEN_MOBILE]);

  if (loading || trendLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <PageHead
        title="Automated Tokenomics"
        description="Automatically generated tokenomics for crypto"
        keywords="cryptocurrency, imfeelingbullish, tokenomics"
      />
      <PageContent>
        <Flex p={4} justifyContent="center" justifySelf="center" alignItems="center" alignSelf="center">
          <Input placeholder="Search for a coin..." w="80%" p={4} justifyContent="center" onChange={(e) => setSearchTerm(e.target.value)} />
        </Flex>
        <TrendingCoins trendingCoins={trendingData?.coins} />
        {marketData.length <= 0 && <MarketTimeoutCounter data={data} />}
        {!SCREEN_MOBILE && marketData.length > 0 && (
          <Flex justify="center">
            <MarketTable marketData={filteredMarketData.length > 0 ? filteredMarketData : marketData} />
          </Flex>
        )}
        {SCREEN_MOBILE && marketData.length > 0 && <CoinMobileContainer coinData={filteredMarketData.length > 0 ? filteredMarketData : marketData} />}
      </PageContent>
    </Box>
  );
};

export default Index;
