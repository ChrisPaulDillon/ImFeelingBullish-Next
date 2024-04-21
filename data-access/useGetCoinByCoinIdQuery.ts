import { useQuery } from '@tanstack/react-query';
import { getCoinByIdRequest } from '../api';

const CACHE_KEY = ['coin-single'];

export const useGetCoinByCoinIdQuery = (coinId: string) => {
  return useQuery(CACHE_KEY, () => getCoinByIdRequest(coinId), {
    enabled: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};
