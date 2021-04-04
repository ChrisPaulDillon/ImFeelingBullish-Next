import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CoinLinks, CommunityData } from '../Types';
import { SocialIcon } from 'react-social-icons';
import convertNumberToName from '../../../util/NumberConverter';

interface ISocialData {
  communityData: CommunityData;
  links: CoinLinks;
}

const SocialData: React.FC<ISocialData> = ({ communityData, links }) => {
  return (
    <Flex mt={2} align="center" justify="center">
      {communityData?.facebook_likes != 0 && communityData?.facebook_likes && (
        <Text textAlign="center" fontWeight={600} fontSize="lg" p={2}>
          {' '}
          {convertNumberToName(communityData?.facebook_likes)} <SocialIcon url="https://facebook.com/" />
        </Text>
      )}
      {communityData?.reddit_subscribers != 0 && communityData?.reddit_subscribers && (
        <Text textAlign="center" fontWeight={600} fontSize="lg" p={2}>
          {' '}
          {convertNumberToName(communityData?.reddit_subscribers)} <SocialIcon url={links?.subreddit_url ?? 'https://reddit.com'} w="50px" />
        </Text>
      )}
      {communityData?.twitter_followers != 0 && communityData?.twitter_followers && (
        <Text textAlign="center" fontWeight={600} fontSize="lg" p={2}>
          {' '}
          {convertNumberToName(communityData?.twitter_followers)}{' '}
          <SocialIcon url={links?.twitter_screen_name ? `https://twitter.com/${links?.twitter_screen_name}` : `https://twitter.com`} w="50px" />
        </Text>
      )}
      {communityData?.telegram_channel_user_count != 0 && communityData?.telegram_channel_user_count && (
        <Text textAlign="center" fontWeight={600} fontSize="lg" p={2}>
          {' '}
          {convertNumberToName(communityData?.telegram_channel_user_count)} <SocialIcon url="https://telegram.com/" w="50px" />
        </Text>
      )}
    </Flex>
  );
};

export default SocialData;
