import { iexApiRequest } from "./iexcloud.service";

export const topsLast = async (symbol: string): Promise<TOPSLast[]> => {
  return await iexApiRequest<TOPSLast[]>("/tops/last", {
    symbols: symbol,
  });
};

export interface TOPSLast {
  symbol: string;
  price: number;
  size: number;
  time: number;
}