import { iexApiRequest } from "./iexcloud.service";

export const incomeStatement = async (
  symbol: string,
  period: string = "quarter",
  lastN: number = 1
): Promise<IncomeStatement[]> => {
  const { income } = await iexApiRequest<IncomeResponse>(`/stock/${symbol}/income`, {
    last: lastN,
    period,
  });

  return income;
};

interface IncomeResponse {
  symbol: string;
  income: IncomeStatement[];
}

export interface IncomeStatement {
  reportDate: string;
  totalRevenue: number;
  costOfRevenue: number;
  grossProfit: number;
  researchAndDevelopment: number;
  sellingGeneralAndAdmin: number;
  operatingExpense: number;
  operatingIncome: number;
  otherIncomeExpenseNet: number;
  ebit: number;
  interestIncome: number;
  pretaxIncome: number;
  incomeTax: number;
  minorityInterest: number;
  netIncome: number;
  netIncomeBasic: number;
}