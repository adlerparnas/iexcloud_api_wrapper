import { iexApiRequest } from "./iexcloud.service";

export const previousDay = async (symbol: string): Promise<PreviousDay> => {
  return await iexApiRequest<PreviousDay>(`/stock/${symbol}/previous`);
};

export interface PreviousDay {
  symbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
}