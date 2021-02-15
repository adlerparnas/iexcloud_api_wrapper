import { iexApiRequest } from "./iexcloud.service";

export const financials = async (
  symbol: string,
  lastn: number = 1
): Promise<Financials[]> => {
  return await iexApiRequest<Financials[]>(
    `/stock/${symbol}/financials/${lastn}/`
  );
};

export interface Financials {
  symbol: string;
  reportDate: string;
  grossProfit: number;
  costOfRevenue: number;
  operatingRevenue: number;
  totalRevenue: number;
  operatingIncome: number;
  netIncome: number;
  researchAndDevelopment: number;
  operatingExpense: number;
  currentAssets: number;
  totalAssets: number;
  totalLiabilities: number;
  currentCash: number;
  currentDebt: number;
  totalCash: number;
  totalDebt: number;
  shareholderEquity: number;
  cashChange: number;
  cashFlow: number;
  operatingGainsLosses: number | null;
}