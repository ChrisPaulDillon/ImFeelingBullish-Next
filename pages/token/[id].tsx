import { Box, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { GetCoinByIdUrl } from '../../api/coinGecko';
import { DetailedCoin } from '../../components/coinGecko/Types';
import SocialData from '../../components/coinGecko/single/SocialData';
import DeveloperDataStats from '../../components/coinGecko/single/DeveloperDataStats';
import { useRouter } from 'next/dist/client/router';
import { useAxios } from '../../hooks/useAxios';

const TokenIndex: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: coinData } = useAxios<DetailedCoin>(GetCoinByIdUrl(id as string));

  return (
    <Box>
      <Heading textAlign="center">{coinData?.name + ' - ' + coinData?.symbol.toUpperCase()}</Heading>
      <SocialData communityData={coinData?.community_data} />
      <DeveloperDataStats developerData={coinData?.developer_data} />
    </Box>
  );
};
export default TokenIndex;
