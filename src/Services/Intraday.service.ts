import { iexApiRequest } from "./iexcloud.service";

// TODO: is this file necessary?
export const intraday = async (
  symbol: string,
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false
): Promise<Intraday[]> => {
  let endpoint = `/stock/${symbol}/chart/1d?chartInterval=${chartInterval}`;
  if (chartLastN > 0) {
    endpoint = endpoint + `&chartLast=${chartLastN}`;
  }
  if (changeFromClose) {
    endpoint = endpoint + `&changeFromClose=true`;
  }
  if (chartReset) {
    endpoint = endpoint + `&chartReset=true`;
  }
  if (chartSimplify) {
    endpoint = endpoint + `&chartSimplify=true`;
  }

  return await iexApiRequest<Intraday[]>(endpoint);
};

export interface Intraday {
  date: string;
  minute: string;
  label: string;
  high: number;
  low: number;
  average: number;
  volume: number;
  notional: number;
  numberOfTrades: number;
  marketHigh: number;
  marketLow: number;
  marketAverage: number;
  marketVolume: number;
  marketNotional: number;
  marketNumberOfTrades: number;
  open: number;
  close: number;
  marketOpen: number;
  marketClose: number;
  changeOverTime: number;
  marketChangeOverTime: number;
}