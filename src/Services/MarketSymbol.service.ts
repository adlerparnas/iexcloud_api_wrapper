import { iexApiRequest } from "./iexcloud.service";

export const marketSymbols = async (): Promise<MarketSymbol[]> => {
  return await iexApiRequest<MarketSymbol[]>("/ref-data/symbols");
};

export interface MarketSymbol {
  symbol: string;
  name: string;
  date: string;
  isEnabled: boolean;
  type: string;
  iexId: string;
}
