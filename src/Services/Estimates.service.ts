import { iexApiRequest } from "./iexcloud.service";

export const estimates = async (
  symbol: string,
  lastN: number = 1
): Promise<Estimates[]> => {
  return await iexApiRequest<Estimates[]>(`/stock/${symbol}/estimates/${lastN}`);
};

export interface Estimates {
  consensusEPS: number;
  numberOfEstimates: number;
  fiscalPeriod: string;
  fiscalEndDate: string;
  reportDate: string;
}
