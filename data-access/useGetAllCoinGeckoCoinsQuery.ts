import { useQuery } from '@tanstack/react-query';
import { getAllCoinsRequest } from '../api';

const CACHE_KEY = ['all-coins'];

export const useGetAllCoinGeckoCoinsQuery = () => {
  return useQuery(CACHE_KEY, () => getAllCoinsRequest(), {
    enabled: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};
