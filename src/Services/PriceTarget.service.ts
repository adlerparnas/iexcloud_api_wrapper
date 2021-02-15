import { iexApiRequest } from "./iexcloud.service";

export const priceTarget = async (symbol: string): Promise<PriceTarget> => {
  return await iexApiRequest<PriceTarget>(`/stock/${symbol}/price-target`);
};

export interface PriceTarget {
  symbol: string;
  updatedDate: string;
  priceTargetAverage: number;
  priceTargetHigh: number;
  priceTargetLow: number;
  numberOfAnalysts: number;
}
