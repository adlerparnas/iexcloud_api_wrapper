import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const tops = async (symbol: string): Promise<TOPS[]> => {
  return await iexApiRequest<TOPS[]>("/tops", {
    symbols: symbol,
  });
};

export interface TOPS {
  symbol: string;
  marketPercent: number;
  bidSize: number;
  bidPrice: number;
  askSize: number;
  askPrice: number;
  volume: number;
  lastSalePrice: number;
  lastSaleSize: number;
  lastSaleTime: number;
  lastUpdated: number;
  sector: string;
  securityType: string;
}
