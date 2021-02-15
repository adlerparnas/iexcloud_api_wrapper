import { iexApiRequest, KVP } from "./iexcloud.service";

export const ohlc = async (symbol: string): Promise<OHLC> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/ohlc`);

  return {
    close: data.close.price,
    closeTime: data.close.time,
    high: data.high,
    low: data.low,
    open: data.open.price,
    openTime: data.open.time,
    symbol,
  };
};

export interface OHLC {
  symbol: string;
  open: number;
  close: number;
  high: number;
  low: number;
  openTime: number;
  closeTime: number;
}