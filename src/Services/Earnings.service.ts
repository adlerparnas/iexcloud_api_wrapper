import { iexApiRequest } from "./iexcloud.service";

export const earnings = async (
  symbol: string,
  lastn: number = 1
): Promise<Earnings[]> => {
  return await iexApiRequest<Earnings[]>(`/stock/${symbol}/earnings/${lastn}/`);
};

export interface Earnings {
  symbol: string;
  actualEPS: number;
  consensusEPS: number;
  announceTime: string;
  numberOfEstimates: number;
  EPSSurpriseDollar: number;
  EPSReportDate: string;
  fiscalPeriod: string;
  fiscalEndDate: string;
  yearAgo: number;
  yearAgoChangePercent: number;
}