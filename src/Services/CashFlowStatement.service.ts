import { iexApiRequest } from "./iexcloud.service";

/**
 * Pulls cash flow data. Available quarterly (4 quarters) and annually (4 years)
 *
 * - Data Weighting: 1000 message units per symbol per period
 * - Data Schedule: Updates at 8am, 9am UTC daily
 *
 * @param symbol stock symbol
 * @param period (quarter) "annual" | "quarter"
 * @param lastN (1) number of periods to report
 * @return a dataframe
 * @export
 * @examples
 * cashflowStatement("AAPL",period = "quarter", lastN =4)
 */
export const cashFlowStatement = async (
  symbol: string,
  period: string = "quarter",
  lastN: number = 1
): Promise<CashFlowStatement[]> => {
  const { cashflow } = await iexApiRequest<CashFlowResponse>(`/stock/${symbol}/cash-flow`, {
    last: lastN,
    period,
  });

  return cashflow;
};

interface CashFlowResponse {
  symbol: string,
  cashflow: CashFlowStatement[]
}

export interface CashFlowStatement {
  symbol: string;
  reportDate: string;
  netIncome: number;
  depreciation: number;
  changesInReceivables: number;
  changesInInventories: number;
  cashChange: number;
  cashFlow: number;
  capitalExpenditures: number;
  investments: number;
  investingActivityOther: number;
  totalInvestingCashFlows: number;
  dividendsPaid: number;
  netBorrowings: number;
  otherFinancingCashFlows: number;
  cashFlowFinancing: number;
  exchangeRateEffect: number | null;
}