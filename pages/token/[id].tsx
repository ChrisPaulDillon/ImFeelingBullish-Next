import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { GetAllCoinsUrl, GetCoinByIdUrl } from '../../api/coinGecko';
import { CommunityData, DetailedCoin } from '../../components/coinGecko/Types';
import { SocialIcon } from 'react-social-icons';
import SocialData from '../../components/coinGecko/SocialData';
import DeveloperDataStats from '../../components/coinGecko/DeveloperDataStats';

interface IProps {
  coinData: DetailedCoin;
}

const TokenIndex: NextPage<IProps> = ({ coinData }) => {
  console.log(coinData);

  return (
    <Box>
      <Heading textAlign="center">{coinData?.name + ' - ' + coinData?.symbol.toUpperCase()}</Heading>
      <SocialData communityData={coinData?.community_data} />
      <DeveloperDataStats developerData={coinData?.developer_data} />
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(GetAllCoinsUrl());

  const paths = res?.data.map((coin) => ({
    params: { id: coin.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string;
  const res = await axios.get(GetCoinByIdUrl(id));

  return { props: { coinData: res.data } };
};

export default TokenIndex;
