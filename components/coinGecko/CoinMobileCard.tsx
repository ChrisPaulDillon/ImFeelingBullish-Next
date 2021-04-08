import { IMarketTableRow } from './MarketTable';
import { Heading, Avatar, Box, Center, Image, Flex, Text, Stack, Button, useColorModeValue } from '@chakra-ui/react';

interface ICoinMobileCardProps {
  coinData: IMarketTableRow;
}

const CoinMobileCard: React.FC<ICoinMobileCardProps> = ({ coinData }) => {
  return (
    <Center py={6}>
      <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} textAlign="center">
              {coinData.displayName}
            </Heading>
            <Text color={'gray.500'}>{coinData.price}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{coinData.marketCap}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Market Cap
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{coinData.marketCapRank}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Market Cap Rank
              </Text>
            </Stack>
          </Stack>
          <Stack direction={'row'} justify={'center'} spacing={6} mt={3}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600} textColor={coinData.dailyChange?.includes('-') ? 'red.500' : 'green.500'}>
                {coinData.dailyChange}
              </Text>
              <Text fontSize={'sm'} color={'gray.500'} textAlign="center">
                Daily Change
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{coinData.volumeOverMarketcap}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Vol/Marketcap
              </Text>
            </Stack>
          </Stack>
          {/* <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button> */}
        </Box>
      </Box>
    </Center>
  );
};

export default CoinMobileCard;
