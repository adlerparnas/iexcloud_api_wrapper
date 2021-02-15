import { iexApiRequest } from "./iexcloud.service";

type timePeriod = "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const endOfDay = async (
  symbol: string,
  period: timePeriod = "1m",
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false,
  chartCloseOnly: boolean = false
): Promise<EndOfDay[]> => {
  return await iexApiRequest<EndOfDay[]>(`/stock/${symbol}/chart/${period}`, {
    changeFromClose,
    chartCloseOnly,
    chartInterval,
    chartLast: chartLastN,
    chartReset,
    chartSimplify,
  });
};

export interface EndOfDay {
  symbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  uOpen: number;
  uHigh: number;
  uLow: number;
  uClose: number;
  uVolume: number;
  change: number;
  changePercent: number;
  label: string;
  changeOverTime: number;
}