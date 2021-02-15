import { iexApiRequest } from "./iexcloud.service";

type timePeriod = "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const dividends = async (
  symbol: string,
  range: timePeriod = "1m"
): Promise<Dividends[]> => {
  return await iexApiRequest<Dividends[]>(
    `/stock/${symbol}/dividends/${range}`
  );
};

export interface Dividends {
  symbol: string;
  exDate: string;
  paymentDate: string;
  recordDate: string;
  declaredDate: string;
  amount: number;
  flag: string;
  currency: string;
  description: string;
  frequency: string;
}