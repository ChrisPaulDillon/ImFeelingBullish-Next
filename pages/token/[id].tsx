import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { GetCoinByIdUrl } from '../../api/coinGecko';
import { DetailedCoin } from '../../components/coinGecko/Types';
import SocialData from '../../components/coinGecko/single/SocialData';
import DeveloperDataStats from '../../components/coinGecko/single/DeveloperDataStats';
import { useRouter } from 'next/dist/client/router';
import { useAxios } from '../../hooks/useAxios';
import Spinner from '../../components/common/Spinner';
import CoinHeader from '../../components/coinGecko/single/CoinHeader';

const TokenIndex: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: coinData, loading } = useAxios<DetailedCoin>(GetCoinByIdUrl(id as string));

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box>
      <CoinHeader
        name={coinData?.name}
        symbol={coinData?.symbol}
        imageUrl={coinData?.image.large}
        description={coinData?.description?.en}
        siteUrl={coinData?.links?.homepage[0]}
      />
      <SocialData communityData={coinData?.community_data} links={coinData?.links} />
      <DeveloperDataStats developerData={coinData?.developer_data} />
    </Box>
  );
};
export default TokenIndex;
