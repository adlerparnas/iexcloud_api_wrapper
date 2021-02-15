import { iexApiRequest } from "./iexcloud.service";

export const internationalSymbolsByExchange = async (exchange: string): Promise<InternationalSymbol[]> => {
  return await iexApiRequest<InternationalSymbol[]>(`/ref-data/exchange/${exchange}/symbols`);
};

export const internationalSymbolsByRegion = async (region: string): Promise<InternationalSymbol[]> => {
  return await iexApiRequest<InternationalSymbol[]>(`/ref-data/region/${region}/symbols`);
};

export interface InternationalSymbol {
  symbol: string;
  date: string;
  isEnabled: boolean;

  exchange: string;
  name: string;
  type: string;
  iexId: string;
  region: string;
  currency: string;
}