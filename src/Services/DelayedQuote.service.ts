import { iexApiRequest } from "./iexcloud.service";

export const delayedQuote = async (symbol: string): Promise<DelayedQuote> => {
  return await iexApiRequest<DelayedQuote>(`/stock/${symbol}/delayed-quote`);
};

export interface DelayedQuote {
  symbol: string;
  delayedPrice: number;
  delayedSize: number;
  delayedPriceTime: number;
  high: number;
  low: number;
  totalVolume: number;
  processedTime: number;
}