import { iexApiRequest } from "./iexcloud.service";

type timePeriod = "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const splits = async (
  symbol: string,
  period: timePeriod = "1m"
): Promise<Splits[]> => {
  return await iexApiRequest<Splits[]>(`/stock/${symbol}/splits/${period}`);
};

export interface Splits {
  exDate: string;
  declaredDate: string;
  ratio: number;
  toFactor: number;
  fromFactor: number;
  description: string;
}