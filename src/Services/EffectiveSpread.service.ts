import { iexApiRequest } from "./iexcloud.service";

export const effectiveSpread = async (
  symbol: string
): Promise<EffectiveSpread[]> => {
  return await iexApiRequest<EffectiveSpread[]>(`/stock/${symbol}/effective-spread`);
};

export interface EffectiveSpread {
  symbol: string;
  volume: number;
  venue: string;
  venueName: string;
  effectiveSpread: number;
  effectiveQuoted: number;
  priceImprovement: number;
}