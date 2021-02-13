import { iexApiRequest } from "./iexcloud.service";

export const advancedStats = async (symbol: string): Promise<IEXAdvancedStats> => {
  return await iexApiRequest<IEXAdvancedStats>(`/stock/${symbol}/advanced-stats`);
};

export interface IEXAdvancedStats {
  companyName: string;
  marketcap: number;
  week52high: number;
  week52low: number;
  week52change: number;
  sharesOutstanding: number;
  float: number;
  symbol: string;
  avg10Volume: number;
  avg30Volume: number;
  day200MovingAvg: number;
  day50MovingAvg: number;
  employees: number;
  ttmEPS: number;
  ttmDividendRate: number;
  dividendYield: number;
  nextDividendDate: string;
  exDividendDate: string;
  nextEarningsDate: string;
  peRatio: number;
  maxChangePercent: number;
  year5ChangePercent: number;
  year2ChangePercent: number;
  year1ChangePercent: number;
  ytdChangePercent: number;
  month6ChangePercent: number;
  month3ChangePercent: number;
  month1ChangePercent: number;
  day30ChangePercent: number;
  day5ChangePercent: number;
  totalCash: number;
  currentDebt: number;
  revenue: number;
  grossProfit: number;
  totalRevenue: number;
  EBITDA: number;
  revenuePerShare: number;
  revenuePerEmployee: number;
  debtToEquity: number;
  profitMargin: number;
  enterpriseValue: number;
  enterpriseValueToRevenue: number;
  priceToSales: number;
  priceToBook: number;
  forwardPERatio: number | null;
  pegRatio: number;
  beta: number;
}