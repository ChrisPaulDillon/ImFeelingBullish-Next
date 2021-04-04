import { Box, Flex, Icon, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import { DeveloperData } from './Types';
import { SocialIcon } from 'react-social-icons';
import { GoGitCommit, GoRepoForked, GoStar } from 'react-icons/go';

interface IDeveloperDataProps {
  developerData: DeveloperData;
}

const DeveloperDataStats: React.FC<IDeveloperDataProps> = ({ developerData }) => {
  return (
    <Flex p={4} justify="center" flexDir="column" align="center">
      <SocialIcon url="https://github.com" />
      <Box mt={2}>
        <Stack flexDir="row" p={1} justify="space-between" isInline>
          <Text textAlign="center">{developerData?.forks} Forks</Text> <Box as={GoRepoForked} size="20px" aria-label="github fork" mt={2} />
        </Stack>
        <Stack flexDir="row" p={1} justify="space-between" isInline>
          <Text textAlign="center">{developerData?.commit_count_4_weeks} Commits (4W)</Text>{' '}
          <Box as={GoGitCommit} size="20px" aria-label="github commit" mt={2} />{' '}
        </Stack>
        <Stack flexDir="row" p={1} justify="space-between" isInline>
          <Text textAlign="center">{developerData?.stars} Stars</Text> <Box as={GoStar} size="20px" aria-label="github commit" mt={2} />{' '}
        </Stack>
      </Box>
    </Flex>
  );
};

export default DeveloperDataStats;
