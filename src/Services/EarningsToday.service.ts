import { iexApiRequest } from "./iexcloud.service";
import { Quote } from "./Quote.service";

export const earningsToday = async (
  symbol: string
): Promise<EarningsToday[]> => {
  const { bto } = await iexApiRequest<TodayEarningResponse>(`/stock/${symbol}/today-earnings/`);

  return bto;
};

interface TodayEarningResponse {
  bto: EarningsToday[];
  amc: EarningsToday[];
  dtm: EarningsToday[];
}

export interface EarningsToday {
  symbol: string;
  consensusEPS: number;
  announceTime: number;
  numberOfEstimates: number;
  fiscalPeriod: string;
  fiscalEndDate: string;
  quote: Quote;
}