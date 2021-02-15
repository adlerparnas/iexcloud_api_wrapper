import { iexApiRequest } from "./iexcloud.service";

export const ceoCompensation = async (
  symbol: string
): Promise<CeoCompensation> => {
  return await iexApiRequest<CeoCompensation>(`/stock/${symbol}/ceo-compensation`);
};

export interface CeoCompensation {
  symbol: string;
  name: string;
  companyName: string;
  location: string;
  salary: number;
  bonus: number;
  stockAwards: number;
  optionAwards: number;
  nonEquityIncentives: number;
  pensionAndDeferred: number;
  otherComp: number;
  total: number;
  year: string;
}