import { Box } from '@chakra-ui/layout';
import CoinMobileCard from './CoinMobileCard';
import { IMarketTableRow } from './MarketTable';

interface ICoinMobileContainerProps {
  coinData: IMarketTableRow[];
}

const CoinMobileContainer: React.FC<ICoinMobileContainerProps> = ({ coinData }) => {
  return (
    <Box>
      {coinData?.map((x) => (
        <CoinMobileCard coinData={x} />
      ))}
    </Box>
  );
};

export default CoinMobileContainer;
