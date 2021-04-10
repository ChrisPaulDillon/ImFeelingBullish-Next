import { API_BASE_GECKO } from "./apiBase"

export interface ICGCoin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number,
    fully_diluted_valuation: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h:number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    ath: number,
    ath_change_percentage: number,
    ath_date: Date,
    atl: number,
    atl_change_percentage:number,
    atl_date: Date,
    roi: any,
    last_updated: Date

}
export const GetAllCoinsUrl = () => `${API_BASE_GECKO}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`;

export const GetCoinByIdUrl = (coinId: string) => {
    if(coinId) {
        return `${API_BASE_GECKO}/coins/${coinId}`;
    }
}