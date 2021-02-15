import { iexApiRequest } from "./iexcloud.service";

export const intradayForDate = async (
  symbol: string,
  date: string,
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false
): Promise<IntradayIEXOnly[]> => {
  date = date.replace(/-/g, "");
  let endpoint = `/stock/${symbol}/chart/date/${date}?chartIEXOnly=true`;
  if (chartLastN > 0) {
    endpoint = endpoint + `&chartLast=${chartLastN}`;
  }
  if (chartInterval > 1) {
    endpoint = endpoint + `&chartInterval=${chartInterval}`;
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

  return await iexApiRequest<IntradayIEXOnly[]>(endpoint);
};

export interface IntradayIEXOnly {
  date: string;
  minute: string;
  label: string;
  high: number;
  low: number;
  average: number;
  volume: number;
  notional: number;
  numberOfTrades: number;
  open: number;
  close: number;
  changeOverTime: number;
}