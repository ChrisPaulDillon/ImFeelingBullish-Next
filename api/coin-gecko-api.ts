import axios, { AxiosRequestConfig } from 'axios';
import { DetailedCoin } from '../components/coinGecko/Types';

export const API_BASE_GECKO = `https://api.coingecko.com/api/v3`;

export type CoinGeckoCoin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date: Date;
  roi: any;
  last_updated: Date;
};

export const getAllCoinsRequest = async (options: AxiosRequestConfig = {}): Promise<CoinGeckoCoin[] | null> => {
  const { data } = await axios.get<CoinGeckoCoin[]>(
    `${API_BASE_GECKO}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`,
    options
  );

  return data;
};

export const getCoinByIdRequest = async (coinId: string, options: AxiosRequestConfig = {}): Promise<DetailedCoin | null> => {
  const { data } = await axios.get<DetailedCoin>(`${API_BASE_GECKO}/coins/${coinId}`, options);

  return data;
};

export const getTrendingCoinsUrl = () => `${API_BASE_GECKO}/search/trending`;

export const getTrendingCoinsRequest = async (options: AxiosRequestConfig = {}): Promise<TrendingResult | null> => {
  const { data } = await axios.get<TrendingResult>(`${API_BASE_GECKO}/search/trending`, options);

  return data;
};

export interface TrendingResult {
  coins: Item[];
}

export interface Item {
  item: TrendingCoin;
}

export interface TrendingCoin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
  score: number;
}
