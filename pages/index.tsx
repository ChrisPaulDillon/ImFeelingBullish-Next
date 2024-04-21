import { Box, Flex, Image, Input, Link, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CoinMobileContainer from '../components/coinGecko/CoinMobileContainer';
import MarketTable, { IMarketTableRow } from '../components/coinGecko/MarketTable';
import MarketTimeoutCounter from '../components/coinGecko/MarketTimeoutCounter';
import TrendingCoins from '../components/coinGecko/TrendingCoins';
import { PageContent, PageHead } from '../components/common/Pages';
import Spinner from '../components/common/Spinner';
import { useGetAllCoinGeckoCoinsQuery } from '../data-access/useGetAllCoinGeckoCoinsQuery';
import { useGetTrendingCoinsQuery } from '../data-access/useGetTrendingCoinsQuery';
import useScreenSizes from '../hooks/useScreenSizes';
import convertNumberToName from '../util/NumberConverter';

const MARKET_CAP_RANK_MIN = 50;
const MARKET_CAP_RANK_MAX = 400;
const MARKET_CAP_MIN = 5000000;

export const Index: NextPage = () => {
  const { data: trendingData, isLoading: trendLoading } = useGetTrendingCoinsQuery();

  const [marketData, setMarketData] = useState<IMarketTableRow[]>([]);
  const [filteredMarketData, setFilteredMarketData] = useState<IMarketTableRow[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { SCREEN_MOBILE } = useScreenSizes();

  const { data, isLoading } = useGetAllCoinGeckoCoinsQuery();

  useEffect(() => {
    if (searchTerm.length > 0) {
      setFilteredMarketData(
        marketData.filter((x) => x.name.toString().toLowerCase().includes(searchTerm) || x.symbol.toString().toLowerCase().includes(searchTerm))
      );
    } else {
      setFilteredMarketData([]);
    }
  }, [searchTerm]);

  // useInterval(() => {
  //   if (marketData.length <= 0) {
  //     RefreshRequest();
  //   }
  // }, 5000);

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
          dailyChange: `${x.market_cap_change_percentage_24h.toFixed(2)}%`,
          volumeOverMarketcap: Math.round((x.total_volume / x.market_cap) * 100) + `%`,
          high_24h: `$${x.high_24h}`,
          low_24h: `$${x.low_24h}`,
        }))
      );
    }
  }, [data, SCREEN_MOBILE]);

  if (isLoading || trendLoading) {
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
