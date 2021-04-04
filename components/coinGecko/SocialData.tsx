import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CommunityData } from './Types';
import { SocialIcon } from 'react-social-icons';

interface ISocialData {
  communityData: CommunityData;
}

const SocialData: React.FC<ISocialData> = ({ communityData }) => {
  return (
    <Flex mt={2} align="center" justify="center">
      {communityData?.facebook_likes && (
        <Text textAlign="center" fontWeight={600} fontSize="lg" p={2}>
          {' '}
          {communityData?.facebook_likes} <SocialIcon url="https://facebook.com/" />
        </Text>
      )}
      {communityData?.reddit_subscribers && (
        <Text textAlign="center" fontWeight={600} fontSize="lg" p={2}>
          {' '}
          {communityData?.reddit_subscribers} <SocialIcon url="https://reddit.com/" w="50px" />
        </Text>
      )}
      {communityData?.twitter_followers && (
        <Text textAlign="center" fontWeight={600} fontSize="lg" p={2}>
          {' '}
          {communityData?.twitter_followers} <SocialIcon url="https://twitter.com/" w="50px" />
        </Text>
      )}
      {communityData?.telegram_channel_user_count && (
        <Text textAlign="center" fontWeight={600} fontSize="lg" p={2}>
          {' '}
          {communityData?.telegram_channel_user_count} <SocialIcon url="https://telegram.com/" w="50px" />
        </Text>
      )}
    </Flex>
  );
};

export default SocialData;
