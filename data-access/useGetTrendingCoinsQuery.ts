import { useQuery } from '@tanstack/react-query';
import { getTrendingCoinsRequest } from '../api';

const CACHE_KEY = ['coins-trending'];

export const useGetTrendingCoinsQuery = () => {
  return useQuery(CACHE_KEY, () => getTrendingCoinsRequest(), {
    enabled: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};
