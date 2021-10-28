import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { GetCoinByIdUrl } from '../../api/coinGecko';
import { DetailedCoin } from '../../components/coinGecko/Types';
import SocialData from '../../components/coinGecko/single/SocialData';
import DeveloperDataStats from '../../components/coinGecko/single/DeveloperDataStats';
import { useRouter } from 'next/dist/client/router';
import { useAxios } from '../../hooks/useAxios';
import Spinner from '../../components/common/Spinner';
import CoinHeader from '../../components/coinGecko/single/CoinHeader';
import SupportedExchanges from '../../components/coinGecko/single/SupportedExchanges';
import { PageHead, PageContent } from '../../components/common/Pages';
import PriceData from '../../components/coinGecko/single/PriceData';

const TokenIndex: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: coinData, loading } = useAxios<DetailedCoin>(GetCoinByIdUrl((id as string).toLowerCase()));
  const [supportedExchanges, setSupportedExchanges] = useState<string[]>();

  useEffect(() => {
    if (coinData && coinData?.tickers) {
      const exchanges = coinData.tickers.map((x) => {
        return x.market.name;
      });
      //@ts-ignore
      let uniqueExchanges = [...new Set(exchanges)];
      setSupportedExchanges(uniqueExchanges);
    }
  }, [coinData]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box>
      <PageHead
        title={coinData?.name}
        description="Automatically generated tokenomics for crypto"
        keywords="cryptocurrency, imfeelingbullish, tokenomics"
      />
      <PageContent>
        <CoinHeader
          name={coinData?.name}
          symbol={coinData?.symbol}
          imageUrl={coinData?.image.large}
          description={coinData?.description?.en}
          siteUrl={coinData?.links?.homepage[0]}
        />
        <PriceData currentPrice={coinData?.market_data?.current_price?.usd} />
        <SocialData communityData={coinData?.community_data} links={coinData?.links} />
        <DeveloperDataStats developerData={coinData?.developer_data} />
        <SupportedExchanges supportedExchanges={supportedExchanges} />
      </PageContent>
    </Box>
  );
};
export default TokenIndex;
