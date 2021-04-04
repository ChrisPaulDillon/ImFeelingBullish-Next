import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const MarketTimeoutCounter = ({ data }) => {
  const [timer, setTimer] = useState<number>(5);

  useEffect(() => {
    if (data.length <= 0) {
      setInterval(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);

  return <Text textAlign="center">Could not load data from CoinGecko 😭. Retrying in {timer}</Text>;
};

export default MarketTimeoutCounter;
