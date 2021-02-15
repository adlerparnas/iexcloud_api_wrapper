import { iexApiRequest } from "./iexcloud.service";

/**
 * Pulls balance sheet data. Available quarterly (4 quarters) and annually (4 years)
 *
 * - Data Weigthing: 3000 message units per symbol per period
 *
 * @param symbol - a market symbol
 * @param period - "annual" | "quarter"
 * @returns array of records
 *
 */
export const balanceSheet = async (
  symbol: string,
  period: string = "quarter",
  lastN: number = 1
): Promise<BalanceSheet[]> => {
  const { balancesheet } = await iexApiRequest<BalanceSheetResponse>(
    `/stock/${symbol}/balance-sheet`,
    {
      last: lastN,
      period,
    }
  );

  return balancesheet;
};

interface BalanceSheetResponse {
  symbol: string;
  balancesheet: BalanceSheet[]
}

export interface BalanceSheet {
  symbol: string;
  reportDate: string;
  currentCash: number;
  shortTermInvestments: number;
  receivables: number;
  inventory: number;
  otherCurrentAssets: number;
  currentAssets: number;
  longTermInvestments: number;
  propertyPlantEquipment: number;
  goodwill: number | null;
  intangibleAssets: number | null;
  otherAssets: number;
  totalAssets: number;
  accountsPayable: number;
  currentLongTermDebt: number;
  otherCurrentLiabilities: number;
  totalCurrentLiabilities: number;
  longTermDebt: number;
  otherLiabilities: number;
  minorityInterest: number;
  totalLiabilities: number;
  commonStock: number;
  retainedEarnings: number;
  treasuryStock: number | null;
  capitalSurplus: number | null;
  shareholderEquity: number;
  netTangibleAssets: number;
}