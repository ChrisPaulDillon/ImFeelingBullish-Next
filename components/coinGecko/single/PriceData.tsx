import { Box, Heading } from '@chakra-ui/layout';

interface IPriceDataProps {
  currentPrice: number;
}

const PriceData: React.FC<IPriceDataProps> = ({ currentPrice }) => {
  return (
    <Box p={4} mt={2}>
      {currentPrice != 0 && (
        <Heading textAlign="center" fontSize="xl">
          Current Price {`$${currentPrice}`}
        </Heading>
      )}
    </Box>
  );
};

export default PriceData;
