import { iexApiRequest } from "./iexcloud.service";

export const iexSymbols = async (): Promise<IEXSymbol[]> => {
  return await iexApiRequest<IEXSymbol[]>("/ref-data/iex/symbols");
};

export interface IEXSymbol {
  symbol: string;
  date: string;
  isEnabled: boolean;
}
